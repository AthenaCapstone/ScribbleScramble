import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

const WritingCanvas = () => {
  const [text, setTextCanvas] = useState("");

  const handleTextBtn = () => {
    const newWord = new fabric.IText("Type more here...", {
        left: 150,
        top: 800,
        isContentEditable: true
      })
      canvas.add(newWord);
  }

  useEffect(() => {
    setTextCanvas(initCanvas());
  }, []);

  const initCanvas = () => 
  new fabric.Canvas("canvas", {
    height: 600,
    width: 800
  }
    );

  const canvas = new fabric.Canvas("canvas")

  let word = new fabric.IText("Type here...", {
    left: 100,
    top: 700
  })

  canvas.add(word);
  
  return (
    <div>
      <h1>Writing Canvas !</h1>
      <button onClick={handleTextBtn()}>Add Text</button>
      <canvas
        id="canvas" style={{border: "1px solid black", width: "500px"}}
      ></canvas>
    </div>
  );
};

export default WritingCanvas;
