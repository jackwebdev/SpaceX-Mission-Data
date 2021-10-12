import React from "react";

import GenerateLogs from "../components/GenerateLogs";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={process.env.PUBLIC_URL + "/images/spacex-logo.png"} alt="Logo"/>
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
