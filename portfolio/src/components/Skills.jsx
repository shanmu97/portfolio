import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import shanmu from "../assets/shanmu.jpg";

export default function Intro() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // useEffect(() => {
  //   // Entrance animations
  //   gsap.fromTo(
  //     imgRef.current,
  //     { y: "-100vh", opacity: 0 },
  //     { y: "0", opacity: 1, duration: 1.5, ease: "power3.out" }
  //   );
  //   gsap.fromTo(
  //     textRef.current,
  //     { y: "100vh", opacity: 0 },
  //     { y: "0", opacity: 1, duration: 1.5, delay: 0.8, ease: "power3.out" }
  //   );

  //   // Scroll event handler for exit animation with fade-out
  //   function onScroll() {
  //     const scrollY = window.scrollY;
  //     const threshold = 100; // Customize when fadeout starts

  //     if (scrollY > threshold) {
  //       gsap.to([imgRef.current, textRef.current], {
  //         y: "-100vh",
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power1.in",
  //         overwrite: "auto",
  //       });
  //     } else {
  //       gsap.to([imgRef.current, textRef.current], {
  //         y: "0",
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         overwrite: "auto",
  //       });
  //     }
  //   }

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center flex-col">
        <img
          ref={imgRef}
          src={shanmu}
          alt="Profile"
          className="w-64 h-72
            [mask-image:linear-gradient(to_bottom,black,transparent)]
            [mask-repeat:no-repeat] [mask-size:100%_100%]
            [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
            [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
        />
        <div
          ref={textRef}
          className="flex flex-col text-9xl font-bold text-white -mt-6
            [mask-image:linear-gradient(to_bottom,black,transparent)]
            [mask-repeat:no-repeat] [mask-size:100%_100%]
            [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
            [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
        >
          <span>WEB DEVELOPER</span>
        </div>
      </div>
    </div>
  );
}
