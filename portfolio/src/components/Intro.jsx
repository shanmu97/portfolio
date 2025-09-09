import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shanmu from '../assets/shanmu.jpg';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const fullstackRef = useRef(null);
  const developerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fullstackRef.current.parentElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play play play play",
        scrub: false,
        markers: false, // Set true to debug scroll trigger positions
      },
    });

    tl.fromTo(
      imageRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        fullstackRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        developerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex justify-center items-center gap-12 min-h-screen bg-black">
      <div className="flex flex-col items-end justify-center">
        <h1
          ref={fullstackRef}
          className="text-9xl font-bold text-white"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
        >
          FULL STACK
        </h1>
        <h1
          ref={developerRef}
          className="text-9xl font-bold text-white"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%)",
          }}
        >
          DEVELOPER
        </h1>
      </div>
      <div
        ref={imageRef}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
        }}
      >
        <img src={shanmu} alt="Shanmukha" />
      </div>
    </div>
  );
};

export default Intro;
