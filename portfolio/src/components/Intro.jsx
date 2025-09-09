import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shanmu from '../assets/shanmu.png';

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
  <div className="flex min-h-screen bg-black items-end">
    {/* Left half: Text block */}
    <div className="w-1/2 flex flex-col justify-center items-end pr-">
      <h1
        ref={fullstackRef}
        className="text-9xl font-bold text-white leading-tight"
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
        className="text-9xl font-bold text-white leading-tight mb-16"
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

    {/* Right half: Image block */}
    <div
    className="object-contain max-h-[100vh] w-1/2"
  ref={imageRef}
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)",
  }

  }
>
  <img
    src={shanmu}
    alt="Shanmukha"
    className="object-cover min-h-screen w-full -mt-28"
  />
</div>


  </div>
);

};

export default Intro;
