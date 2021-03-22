// const path = require('path')
const express = require("express");
const app = express();
// const morgan = require('morgan')
const http = require("http");

const index = require("./api/index");

const port = process.env.PORT || 4001;

// app.use(morgan('dev'))

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.use(index);

const server = http.createServer(app);
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// sending time

let interval;

const getApiAndEmit = (socket) => {
  const response = new Date();
  socket.emit("FromAPI", response);
};

// drawing

//listening for drawings maybe
let getDrawingAndEmit = (socket) => {
  //   const drawing = "?";
  const drawing = { drawing: "picture" };
  console.log("getting drawing?");
  console.log("drawing", drawing);
  //   socket.on("drawing", (data) =>
  socket.broadcast.emit("drawing", drawing);
  //   );
};

socketIo.on("connection", (socket) => {
  console.log("New client connected");
  //   console.log("data", data);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

socketIo.on("connection", (socket) => {
  console.log("testing sending drawing");

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getDrawingAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("drawer disconnected");
    clearInterval(interval);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
