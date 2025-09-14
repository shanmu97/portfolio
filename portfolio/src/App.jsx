import { useRef, useEffect } from "react";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import "./index.css";
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact";
import { useModal } from "./components/ModalContext";
import Mobile from "./components/Contact/Mobile";
import { FaTimes } from "react-icons/fa";

function App() {
  const introRef = useRef();
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <div className="bg-black">
      <div ref={introRef} id="intro">
        <Intro />
      </div>
      <Experience introRef={introRef} />
      <Skills />
      <Education/>
      <Contact/>
      {isModalOpen && (
        <div className="fixed inset-0 filter backdrop-blur-md bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative rounded-lg w-[90%] max-w-xl p-6 shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-20 right-10 text-gray-700 hover:text-black"
              aria-label="Close modal"
            >
              <FaTimes size={24} className="text-white"/>
            </button>
            <Mobile />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
