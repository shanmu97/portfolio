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
  // Initial entrance animation on page load
  gsap.fromTo(
    [imageRef.current, fullstackRef.current, developerRef.current],
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.3 }
  );

  // Scroll-triggered animation sliding elements out upward when scrolling up past trigger
  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: fullstackRef.current.parentElement,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
  });

  scrollTl.to(
    [imageRef.current, fullstackRef.current, developerRef.current],
    { y: -100, opacity: 0, duration: 0.8, ease: "power3.in", stagger: 0.3 }
  );

  return () => {
    if (scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
    scrollTl.kill();
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
