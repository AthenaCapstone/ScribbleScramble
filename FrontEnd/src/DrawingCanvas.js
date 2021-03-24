import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import {
  Button,
  Title2,
  StyledCanvas,
  PlayArea,
  CanvasBackground,
} from "./AppCSS";

const DrawingCanvas = () => {
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  // useEffect(() => {
  //   if (canvas.freeDrawingBrush) {
  //     updateBrush();
  //     // console.log("second useEffect");
  //   }
  //   // setBrushSize()
  //   // setBrushColor()
  // }, [canvas]);

  let drawingColorEl = document.getElementById("drawing-color");
  let drawingModeEl = document.getElementById("drawing-mode-selector");
  let drawingLineWidthEl = document.getElementById("drawing-line-width");
  let brushSizeText = document.getElementById("brushSize");
  // maybe need to position with value inside canvas
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 600,
      width: 800,
      backgroundColor: "white",
      isDrawingMode: true,
    });

  // fabric.Object.prototype.transparentCorners = false;

  function updateBrush(canvas) {
    if (!canvas.freeDrawingBrush) {
      // console.log("no free drawing brush");
      canvas.freeDrawingBrush = new fabric[drawingModeEl.value + "Brush"]();
    }

    let brush = canvas.freeDrawingBrush;
    brush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    brushSizeText.innerHTML = drawingLineWidthEl.value;
    brush.color = drawingColorEl.value;
  }

  return (
    <div>
      <div id="drawing-mode-options">
        <label htmlFor="drawing-mode-selector">Mode:</label>
        <select id="drawing-mode-selector" onChange={() => updateBrush(canvas)}>
          <option value="Pencil">Pencil</option>
          <option value="Circle">Circle</option>
          <option value="Pattern">Pattern</option>
        </select>

        <label htmlFor="drawing-line-width">Line width:</label>
        <span id="brushSize">11</span>
        <input
          type="range"
          defaultValue="11"
          min="0"
          max="150"
          id="drawing-line-width"
          onChange={() => updateBrush(canvas)}
        />

        <label htmlFor="drawing-color">Line color:</label>
        <input
          type="color"
          defaultValue="#005E7A"
          id="drawing-color"
          onChange={() => updateBrush(canvas)}
        />
      </div>

      <Title2>Drawing Canvas!</Title2>
      <PlayArea>
        <CanvasBackground>
          <StyledCanvas
            id="canvas"
            onClick={() => updateBrush(canvas)}
            onMouseDown={() => updateBrush(canvas)}
          ></StyledCanvas>
        </CanvasBackground>
      </PlayArea>
      <Button onClick={() => canvas.clear()}>clear</Button>
    </div>
  );
};

export default DrawingCanvas;
