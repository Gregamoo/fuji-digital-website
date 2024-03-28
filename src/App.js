import * as React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="header">
        <Logo />
      </div>
      <div className="body">
        <Card>
          <h1>Under Construction</h1>
          <p>We are currently working hard on making an amazing website.</p>
          <p>Stay tuned...</p>
        </Card>
      </div>
    </>
  );
}

export default App;
