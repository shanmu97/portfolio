import { useRef, useEffect } from "react";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import "./index.css";

function App() {
  const introRef = useRef();

  return (
    <div className="bg-black">
      <div ref={introRef} id="intro">
        <Intro />
      </div>
      <Experience introRef={introRef} />
      <Skills />
    </div>
  );
}

export default App;
