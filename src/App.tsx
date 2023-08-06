import "./styles/styles.scss";
import Hello from "./components/Hello";
import WaveTransition from "./components/WaveTransition";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Hello />
      <WaveTransition color="var(--color-alt-page)" />
      <About />
      <WaveTransition color="var(--color-primary)" />
      <Portfolio />
      <WaveTransition color="var(--color-alt-page)" />
      <Contact />
    </div>
  );
}

export default App;
