import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

export const Body = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  background-image: url(./images/background.jpg);
  height: 100%;
`;

export const Header = styled.header`
  background: #000000
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border-radius: 20px;
  no-repeat: true
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
`;
export const Button = styled.button`
  border-radius: 3px;
  border: 2px solid darkgrey;
  align: center;
  color: #216858
  margin: 0 1em;
  height: 30px;
  width: 80px;
  `;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #982649;
  background-color: black;
  width: 800px;
  height: 145px;
  margin: auto;
  margin-top: 20px;
  border-radius: 20px;
`;

export const Title2 = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
`;

export const PlayArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCanvas = styled.canvas`
  width: 450px;
  margin: auto;
  border: 3px outset black;
  border-radius: 3px;
  z-index: 2;
`;

export const CanvasBackground = styled.div`
  display: flex;
  width: 800px;
  border-radius: 3px;
  background: white;
  z-index: 1;
  margin-bottom: 10px;
`;

// this styles all buttons in the "palette"-> brush type, color, size etc
export const Palette = styled.div`
  display: flex;
  justify-content: center;
  background: #4c9c8a;
  width: 800px;
  height: 120px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 125px;
  border-radius: 20px;
`;

//this is for just the color swatches in the palette

export const BrushSizesContainer = styled.div`
  display: flex;
  height: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const SmallBrushBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 6px;
  border: 2px solid darkgrey;
  justify-content: center;
  background-color: #4c9c8a;
`;

export const MedBrushBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 6px;
  border: 2px solid darkgrey;
  justify-content: center;
  background-color: #4c9c8a;
`;

export const LargeBrushBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 6px;
  border: 2px solid darkgrey;
  background-color: #4c9c8a;
  margin-right: 10px;
`;

// export const SmallBrushBtn = styled.button`
//   height: 30px;
//   width: 30px;
//   margin-right: 0;
//   margin-left: 5px;
//   border-radius: 6px;
//   border: 2px solid darkgrey;
//   justify-content: center;
//   background-color: #4c9c8a;
// `;

// export const MedBrushBtn = styled.button`
//   height: 30px;
//   width: 30px;
//   background-color: #4c9c8a;
//   border-radius: 6px;
//   border: 2px solid darkgrey;
// `;

// export const LargeBrushBtn = styled.button`
//   height: 30px;
//   width: 30px;
//   background-color: #4c9c8a;
//   border-radius: 6px;
//   border: 2px solid darkgrey;
//   margin-right: 5px;
//   margin-left: 0;
//   justify-content: center;
//   align-items: center;
// `;

export const SelectedSize = styled.div`
  border-size: 5px;
  border-color: black;
`;

export const SelectedColor = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 0px;
`;

export const PaletteColors = styled.div`
  margin: 5px;
  margin-left: 8px;
  margin-right: 0px;
`;

export const PaletteBtns = styled.div`
  margin-top: 10px;
`;

export const StartDrawBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StartDrawImg = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 50%;
`;

export const StartWriteImg = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  height: 50%;
`;

export const StartWriteBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LandingPage = styled.div`
  background-color: #ecf6f0;
  height: 600px;
  display: flex;
  justify-content: center;
  width: 800px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 250px;
`;

export const LandingBtns = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  margin-top: 5px;
`;

export const LandingButton = styled.button`
  border-radius: 3px;
  border: 2px solid darkgrey;
  align: center;
  color: #216858;
  margin: 0 1em;
  height: 43px;
  width: 150px;
  background-color: #134d44;
  color: white;
`;

export const ClearButton = styled.button`
  border-radius: 6px;
  border: 2px solid darkgrey;
  align: center;
  color: #216858;
  margin: 0 1em;
  margin-top: 10px;
  height: 28px;
  width: 55px;
  background-color: #134d44;
  color: white;
`;

export const PngButton = styled.button`
  border-radius: 6px;
  border: 2px solid darkgrey;
  align: center;
  color: #216858;
  margin: 0 1em;
  margin-top: 10px;
  margin-right: 0px;
  height: 28px;
  width: 33px;
  background-color: #4c9c8a;
  color: white;
`;

// export const brushBtn= style.button

export const AddTxtBtn = styled.button`
  border-radius: 6px;
  border: 2px solid darkgrey;
  align: center;
  color: #216858;
  margin: 0 1em;
  margin-top: 5px;
  height: 28px;
  width: 80px;
  background-color: #134d44;
  color: white;
`;
