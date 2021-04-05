const { yellow, red, blueBright, magenta, cyan, green } = require("chalk");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");
const moniker = require("moniker");

const path = require("path");
const morgan = require("morgan");
const express = require("express");

const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

const { isObject } = require("util");

const port = process.env.PORT || 4001;

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "FrontEnd/build")));
app.use(cors());

//api routes
app.get("/", (req, res, next) => {
  try {
    res.send({ response: "Alive!" }).status(200);
  } catch (error) {
    next(error);
  }
});
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "FrontEnd/build", "index.html"));
});

//error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error");
});

//sockets
const serverSocket = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:4001"],
    methods: ["GET", "POST"],
    credentials: true,
  },
  // transports: ["websocket"]
  //^^TECHNICALLY NEEDED - currently throwing errors. don't delete. yet.
});

let players = {};
let rooms = [];
const nameIt = () => {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: "-",
  });
};

//socket events
serverSocket.on("connection", (socket) => {
  console.log(yellow(`server new client connected on ${socket.id}`));

  socket.on("disconnect", () => {
    delete players[socket.id];
    console.log(
      red(
        `player ${socket.username} has left the building (clientID: ${socket.id})`
      )
    );
    socket.disconnect();
  });

  socket.on("scribble time", ({ username, room }) => {
    //PLAYER STUFF
    if (username === "random") username = moniker.choose();
    socket.username = username;
    //ROOM STUFF
    if (room && !rooms.includes(room)) {
      socket.emit("invalid room");
    } else {
      if (!room) {
        room = nameIt();
        rooms.push(room);
      }
      socket.room = room;
      socket.join(room);
      players[socket.username] = socket.room;
      socket.emit("scramble time", room);
    }
    //just to check :)
    console.log(green(rooms));
    console.log(cyan(JSON.stringify(players)));
  });

  socket.on("get room players", (room) => {
    console.log(magenta("getting room players"));
    let playersInRoom = [];
    for (let username in players) {
      if (players[username] === room) {
        playersInRoom.push(username);
      }
    }
    socket.emit("all players", playersInRoom);
    console.log("emitting all players", playersInRoom);
  });

  // re: canvas
  socket.on("add text box", ({ room, canvasJSON }) => {
    socket.in(room).emit("create new text box", canvasJSON);
  });

  socket.on("send new lines", (value) => {
    socket.in(value.room).emit("load new lines", value.canvasJSON);
  });

  //re: chat room
  const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"
  //join a conversation --> prob don't need; refactor
  const {room} = socket.handshake.query
  console.log(room)
  if (socket.in(room)){
    socket.join(room)}
  //listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    serverSocket.in(room).emit(NEW_CHAT_MESSAGE_EVENT, data)
  })
});

http.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
