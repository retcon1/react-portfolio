import React from "react";
import "./styles/styles.scss";
import Hello from "./components/Hello";
import WaveTransition from "./components/WaveTransition";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="page-1">
        <Hello />
        <WaveTransition />
      </div>
      <About />
    </div>
  );
}

export default App;
