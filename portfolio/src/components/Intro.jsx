import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import shanmu from "../assets/shanmu.png";
import Socials from "./Contact/Socials";

const Intro = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
    }),
  };

  return (
    <div className="flex min-h-screen items-center" ref={ref}>
      {/* Left half: Text block */}
      <div className="w-1/2 flex flex-col justify-center items-center mb-12">
        <motion.h1
          className="text-[7rem] font-bold text-white leading-tight cal-sans-regular -mb-5"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0.3}
        >
          SHANMUKHA
        </motion.h1>
        <motion.h1
          className="text-[7rem] font-bold text-white leading-tight cal-sans-regular -mb-2"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0.6}
        >
          <span className="mr-9">REDDY</span>
  <span>VASA</span>
        </motion.h1>
        <motion.h1
          className="text-[3.5rem] font-bold text-white leading-tight mt-0 cal-sans-regular"
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0.9}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
          }}
        >
          WEB DEVELOPER
        </motion.h1>
        <motion.p
          className="flex flex-col items-center mt-6 text-white text-[1.05rem] max-w-[41.5rem] italic "
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={1.2} // delay after headings
        >
          <span className="text-center font-semibold libre-baskerville-regular-italic">
            Full-stack web developer with a focus on React and Node.js. I build
            clean, scalable apps with a user-first approach. Open to remote
            projects and collaborations.
          </span>
          <span className="block text-center  cal-sans-medium mt-1">
            Always learning, Always building.
          </span>
        </motion.p>
        <motion.div
          className="mt-4 text-white text-md max-w-xs text-center italic"
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={1.5}
        >
          <Socials />
        </motion.div>
      </div>

      {/* Right half: Image block */}
      <motion.div
        className="object-contain max-h-[100vh] w-1/2"
        initial="hidden"
        animate={controls}
        variants={variants}
        custom={0} // delay for photo first
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)",
        }}
      >
        <img
          src={shanmu}
          alt="Shanmukha"
          className="object-cover min-h-screen w-full -mt-28"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
