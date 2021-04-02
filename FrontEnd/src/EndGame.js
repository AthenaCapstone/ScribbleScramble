import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import {
  EndGamePage,
  EndGameContainer,
  PlayAgainBtn,
  Paragraph,
  DownloadBtn,
  EndGameElement,
  EndGameH1,
} from "./AppCSS";
import { fabric } from "fabric";

import { Link } from "react-router-dom";
import socket from "./Socket";
import SaveScribs from './SaveScribs'

const EndGame = (props) => {
  const [canvas, setCanvas] = useState("");
  const [scribs, setScribs] = useState("")
console.log('props in endgame', props.location.state)
  //   socket.on("send final image");

  let finalImg = props.location.state.scribs
  let finalScribs = props.location.state.scribs
 
console.log('scribs in endgame', scribs)
console.log('finalImg in endgame', finalImg)

  socket.on("broadcasting final image", (value) => {
    finalImg = value;
    console.log("finalImg---->", finalImg);
  });

  const handleDownloadBtn = () => {
    console.log("clicked download");

  };

  return (
    <EndGamePage>
      <EndGameContainer>
        <EndGameH1>
          Thanks For Playing!
        </EndGameH1>
        <EndGameElement>Save your Scribb Scrabb?</EndGameElement>
        <EndGameElement>
          <img
            src={finalScribs}
            style={{ width: "300px", margin: "10px" }}
          />
        </EndGameElement>

        <DownloadBtn onClick={() => handleDownloadBtn()}>Download</DownloadBtn>

        <EndGameElement>
          <Link to="/" style={{ color: "black", margin: "15px" }}>
            Play Again?
          </Link>{" "}
        </EndGameElement>
      </EndGameContainer>
    </EndGamePage>
  );
};

export default EndGame;
