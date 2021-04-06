import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  StartDrawBtn,
  LandingBtns,
  LandingPage,
  PublicRoomButton,
  CreateRoomButton,
  HowToPlay,
  LandingPageHeader,
  DrawerTitle,
  FAQdiv,
  GalleryDiv,
} from "./AppCSS";
import socket from "./Socket";
import AvatarCarousel from "./AvatarCarousel";
import Drawer from "./Drawer";
import Gallery from "./Gallery";

const LandingPageComp = () => {
  const [username, setUsername] = useState("random");
  const [roomToJoin, setRoomToJoin] = useState("");
  const history = useHistory();

  useEffect(() => {
    socket.on("scramble time", (name) => {
      history.push(`/${name}`);
      socket.emit("get room players", name);
      console.log("get room players");
      return () => socket.off("scramble time");
    });
  }, [history]);

  const startScribbling = (evt) => {
    evt.preventDefault();
    socket.emit("scribble time", {
      username,
      room: roomToJoin,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LandingPageHeader>
        <LandingPage>
          <div>
            <LandingBtns>
              <input
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="text"
                name="username"
                placeholder="Enter a username"
                minLength={1}
                maxLength={30}
                autoComplete="false"
                onChange={(evt) => {
                  setUsername(evt.target.value.trim());
                }}
              />

              <AvatarCarousel />

              <StartDrawBtn>
                <PublicRoomButton
                  type="button"
                  name="create"
                  onClick={(evt) => startScribbling(evt)}
                >
                  Play!
                </PublicRoomButton>
              </StartDrawBtn>

              <input
                style={{ marginTop: "5px", marginBottom: "5px" }}
                type="text"
                placeholder="Know your room?"
                onChange={(evt) => setRoomToJoin(evt.target.value)}
              />
              <StartDrawBtn>
                <CreateRoomButton
                  type="button"
                  name="join"
                  onClick={(evt) => startScribbling(evt)}
                >
                  Join Room
                </CreateRoomButton>
              </StartDrawBtn>
            </LandingBtns>
          </div>
        </LandingPage>
        <img
          src={"/images/howPlay.png"}
          style={{
            width: "115px", //246 //124
            // marginRight: "20px",
            marginTop: "200px",
            marginLeft: "25px",
          }}
          alt="how"
        />
      </LandingPageHeader>
      {/* FAQ Block */}

      <HowToPlay>
        <div>
          <Gallery
            style={{ float: "right", marginRight: "40px", marginTop: "38px" }}
          />
          <h3>FAQ:</h3>

          <GalleryDiv>
            {/* <div style={{ width: "450px", margin: "auto" }}> */}

            <Drawer title={"What's a Scribb Scrab?"}>
              <div
                style={{
                  width: "500px",
                  marginRight: "0px",
                  marginTop: "5px",
                  marginBottom: "3px",
                }}
              >
                A combination of words and drawings such as:
              </div>
              <div
                style={{
                  width: "200px",
                  marginRight: "0px",
                  marginBottom: "10px",
                }}
              >
                Illustrated poems, concrete poetry etc
              </div>
            </Drawer>

            <div>
              <Drawer title={"How Do I Play?"}>
                <ol style={{ marginTop: "2px", marginBottom: "5px" }}>
                  <li>Click "Play" to Create A Room</li>
                  <li>
                    Enter A Name and Click "Join Room" to Join A Friend's Room.
                  </li>
                  <li>Give Your Room Name To Friends You Want To Join.</li>

                  <li>Draw Or Write Whatever You Want!</li>
                  <li>
                    Click The Scramble Button to Grab and Move Drawings or Text.
                  </li>
                  <li> When You're Done Click "I'm Done"</li>
                  <li>Download Your Scribb Scrabb to Share With Friends!</li>
                </ol>
              </Drawer>
            </div>

            <Drawer title={"What Is Scramble Mode?"}>
              <div style={{ marginTop: "6px" }}>
                <span>Clicking </span>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Scramble
                </span>{" "}
                <span>
                  allows you to grab and move drawings and text around the
                  canvas.
                </span>
                <div>
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/scramblePic.png"
                  />
                </div>
                <FAQdiv>
                  First draw your drawing then click{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Scramble
                  </span>{" "}
                  to enable scrambling
                </FAQdiv>
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo1.png"
                  />
                </div>
                <FAQdiv>
                  Click on the line you want to move or drag to select multiple
                  lines to move at once{" "}
                </FAQdiv>
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo2.png"
                  />
                </div>
                {/* <div>First draw your drawing </div> */}
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo3.png"
                  />
                </div>
                <FAQdiv>You can also move rotate/edit/scale text</FAQdiv>
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo9.png"
                  />
                </div>
                <FAQdiv>
                  When you're ready to draw again click anywhere on the brush
                  tools to renable drawing.
                </FAQdiv>
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo9b.png"
                  />
                </div>
                <FAQdiv>
                  You can also edit text that's already been placed by clicking{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Scramble
                  </span>{" "}
                  or Edit Text
                  <div>and then clicking inside the text you want to edit.</div>
                </FAQdiv>
                <div>
                  {" "}
                  <img
                    style={{ width: "400px", marginTop: "15px" }}
                    src="/images/demo9e.png"
                  />
                </div>
              </div>
            </Drawer>
            {/* </div> */}
          </GalleryDiv>
        </div>
        {/* <Gallery style={{ float: "right" }} /> */}
      </HowToPlay>
    </div>
  );
};

export default LandingPageComp;
