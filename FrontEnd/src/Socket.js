import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import useSocket from "use-socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";

const SocketComp = () => {
  const [drawing, sendDrawing] = useState("");

  const [socket] = useSocket(ENDPOINT, {
    autoConnect: false,
    //any other options
  });

  socket.connect();
  console.log(socket);

  //   const [response, setResponse] = useState("");
  // by default nobody's drawing
  //   const socket = socketIOClient(ENDPOINT);

  //   useEffectOLD(() => {
  //     const socket = socketIOClient(ENDPOINT);
  //     socket.on("FromAPI", (data) => {
  //       setResponse(data);
  //     });
  //     return () => socket.disconnect();
  //   }, []);

  //   const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    //socket= io.connect("http://localhost:3000")
    // const socket = socketIOClient(ENDPOINT);
    socket.on("drawing", (data) => {
      sendDrawing(data);
      // console.log("are you drawing?")
    });
    return () => socket.disconnect();
  }, []);

  //   function mouseDragged() {}

  let data = { x: "1", y: "2" };
  //   let data = { x: mouseX, y: mouseY };

  socket.emit(
    "drawing",
    data,
    console.log("client emit: socket.js: data:", data)
  );

  //   socket.emit(
  //     "data",
  //     { data: "drawing" }
  // (data = { drawing: "lines" })
  // console.log("are you drawing?")
  //   {
  //     x0: x0 / w,
  //     y0: y0 / h,
  //     x1: x1 / w,
  //     y1: y1 / h,
  //     color: color,
  //   }
  //   );

  //   let canvasEl = document.getElementById("canvas");
  let drawingColorEl = document.getElementById("drawing-color");
  //   let drawingModeEl = document.getElementById("drawing-mode-selector");
  //   let drawingLineWidthEl = document.getElementById("drawing-line-width");
  //   let brushSizeText = document.getElementById("brushSize");

  //   canvasEl.addEventListener("mousedown", onMouseDown, false);
  //   canvasEl.addEventListener("mouseup", onMouseUp, false);
  //   canvasEl.addEventListener("mouseout", onMouseUp, false);
  //   canvasEl.addEventListener("mousemove", onMouseMove, false);

  //   function onMouseDown(e) {
  //     drawing = true;

  //     let x = e.clientX || e.touches[0].clientX;
  //     let y = e.clientY || e.touches[0].clientY;
  //   }

  return (
    <div>
      <p>{/* It's <time dateTime={response}>{response}</time> */}</p>
    </div>
  );
};

export default SocketComp;
