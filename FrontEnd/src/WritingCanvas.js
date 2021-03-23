import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import { Button, Title2, Body } from "./AppCSS";
import { StyledCanvas } from "./AppCSS";
import { PlayArea } from "./AppCSS";
import { CanvasBackground } from "./AppCSS";
import socket from "./Socket";

const WritingCanvas = () => {
  const [textCanvas, setTextCanvas] = useState("");
  const [font, setFont] = useState("arial");
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 600,
      width: 800,
      isContentEditable: true,
    });

  useEffect(() => {
    setTextCanvas(initCanvas());
    socket.on("create new text box", (canvas) => {
      console.log("front end heard create new text box");
      const newText = new fabric.IText("Type here...", {
        left: 150,
        top: 100,
        isContentEditable: true,
        // fontFamily: font,
      });
      canvas.add(newText);
      canvas.renderAll();
    });
  }, []);



  const handleTextBtn = (canvas) => {
    const newText = new fabric.IText("Type here...", {
      left: 150,
      top: 100,
      isContentEditable: true,
      fontFamily: font,
    });
    console.log("canvas", canvas);
    canvas.add(newText);
    canvas.renderAll();
    socket.emit("add text box", canvas);
  };

  const changeFont = (evt) => {
    setFont(evt.target.value);
    textCanvas.getActiveObject().setSelectionStyles({
      fontFamily: font,
    });
    textCanvas.renderAll();
  };

  return (
    <Body>
      <Title2>Writing Canvas !</Title2>
      <Button onClick={() => handleTextBtn(textCanvas)}>Add Text</Button>
      <div id="text-options">
        <label htmlFor="font-family">Font:</label>
        <select id="font-family" value={font} onChange={changeFont}>
          <option value="arial">Arial</option>
          <option value="comic sans ms">Comic Sans MS</option>
          <option value="impact">Impact</option>
          <option value="monaco">Monaco</option>
        </select>
      </div>
      <PlayArea>
        <CanvasBackground>
          <StyledCanvas id="canvas"></StyledCanvas>
        </CanvasBackground>
      </PlayArea>
    </Body>
  );
};

export default WritingCanvas;
