import React from "react";
import "./App.scss";

import GenerateLogs from "../components/GenerateLogs";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="/images/SpaceX-Logo.png" alt="Logo"/>
      </header>
      <main>
        <div className="bg">
          <div className="stars"></div>
        </div>
        <GenerateLogs />
      </main>
    </div>
  );
};

export default App;
