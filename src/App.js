import * as React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";
import pinkBlobImage from "./images/Pink Blob.svg";
import designingImage from "./images/Designing.svg";

function App() {
  return (
    <>
      <div className="header">
        <Logo />
      </div>
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
                src={pinkBlobImage}
                alt="A Pink circle with a happy face with its arms in the air"
                className="pinkBlob"
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
