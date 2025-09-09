import { useRef } from "react";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import "./index.css";

function App() {
  const introRef = useRef();
  return (
    <>
      <div className="bg-black">
        <div ref={introRef}>
          <Intro />
        </div>
        <Experience introRef={introRef} />
      </div>
    </>
  );
}

export default App;
