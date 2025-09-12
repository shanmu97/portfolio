import { useRef, useEffect } from "react";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import "./index.css";
import Education from "./components/Education/Education"

function App() {
  const introRef = useRef();

  return (
    <div className="bg-black">
      <div ref={introRef} id="intro">
        <Intro />
      </div>
      <Experience introRef={introRef} />
      <Skills />
      <Education/>
    </div>
  );
}

export default App;
