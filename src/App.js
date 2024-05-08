import * as React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";
import pinkCharacterImage from "./images/Pink Blob.svg";
import designingImage from "./images/Designing.svg";
import fujiDigitalBlobs from "./images/Fuji-Digital-Blobs.svg";

function App() {
  return (
    <div className="pageStyling">
      <div className="header">
        <Logo />
      </div>
      <img
        src={fujiDigitalBlobs}
        alt="A blue and pink blob"
        className="blobStyling"
      />
      <div className="body">
        <Card>
          <div className="cardLayout">
            <img
              src={designingImage}
              alt="Two cartoon people discussing work over a computer"
              className="designingImage"
            />
            <div className="textContainer">
              <h1>Under Construction</h1>
              <p>We are currently working hard on making an amazing website.</p>
              <p>Stay tuned...</p>
              <img
                src={pinkCharacterImage}
                alt="A Pink circle with a happy face with its arms in the air"
                className="pinkBlob"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
