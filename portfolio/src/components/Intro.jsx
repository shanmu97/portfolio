import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import shanmu from '../assets/shanmu.png';

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
    <div className="flex min-h-screen bg-black items-end" ref={ref}>
      {/* Left half: Text block */}
      <div className="w-1/2 flex flex-col justify-center items-end mb-24">
        <motion.h1
          className="text-9xl font-bold text-white leading-tight -mb-1"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0.3} // delay for FULL STACK
        >
          FULL STACK
        </motion.h1>
        <motion.h1
          className="text-9xl font-bold text-white leading-tight -mt-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0.6} // delay for DEVELOPER
        >
          DEVELOPER
        </motion.h1>
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
