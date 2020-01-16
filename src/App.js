import React from "react";
import "./App.scss";
import Toto from "./components/Toto";
import Sab from "./components/sabrina/Sab";

function App() {
  return (
    <div>
      <div>
        <Toto />
        <Toto isTiti />
        <Toto />
      </div>

      <div>
        <JessiK />
        <JessiK isPurple />
        <JessiK />
      </div>
    </div>
  );
}

export default App;
