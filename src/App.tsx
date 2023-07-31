import React from "react";
import "./styles/styles.scss";
import Hello from "./components/Hello";
import WaveTransition from "./components/WaveTransition";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Hello />
      <WaveTransition color="#2d3673" />
      <About />
      <WaveTransition color="#070b22" />
    </div>
  );
}

export default App;
