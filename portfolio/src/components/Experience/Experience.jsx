import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stickman from "./Stickman";
import ComicSpeechBubble from "./BubbleCard";
import lumiq from "../../assets/lumiq.png";

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ introRef }) {
  const expRef = useRef();
  const lineRef = useRef();
  const fillRef = useRef();
  const stickmanRef = useRef();

  const [scrollY, setScrollY] = useState(0);
  const [experienceDone, setExperienceDone] = useState(false);
  const [currentBubbleIndex, setCurrentBubbleIndex] = useState(-1);

  const bubbleItems = [
    {
      image1: lumiq,
      companyName: "Lumiq",
      from: "Jan 2025",
      to: "Jun 2025",
      points: {
        point1:
          "Collaborated with a team to design and develop a chatbot integrating a large language model with a database for natural language data retrieval.",
        point2:
          "Used a large language model to convert natural language inputs into SQL queries, allowing the chatbot to process user requests and generate executable database queries for data retrieval.",
      },
    },
    {
      companyName: "Freelancing",
      from: "Jul 2025",
      to: "Present",
      points: {
        point1:
          "Successfully delivered two complete projects, managing end-to-end development from design to deployment.",
        point2:
          "Collaborated with clients to understand requirements, implemented features, and ensured high-quality, maintainable code.",
      },
    },
  ];

  // Typing animation for heading characters
  useEffect(() => {
    const heading = expRef.current.querySelector("h2");
    if (!heading) return;

    const slideUpTL = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "60% top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress === 1 && !experienceDone) {
            setExperienceDone(true);
          }
        },
      },
    });

    slideUpTL.fromTo(
      heading,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [introRef, experienceDone]);

  // Stickman sliding and line fill animation on scroll, with milestone and bubble logic
  useEffect(() => {
    if (!experienceDone) return;

    const line = lineRef.current;
    const fill = fillRef.current;
    const stickman = stickmanRef.current;
    if (!line || !fill || !stickman) return;

    const lineWidth = line.offsetWidth;
    const stickmanWidth = stickman.offsetWidth || 90;

    // Milestone positions as a percentage of available line (adjust as needed)
    const milestonePercents = [0.25, 0.6];
    const milestoneXs = milestonePercents.map(
      (p) => p * (lineWidth - stickmanWidth)
    );
    const preDistance = 50; // pixels before milestone to start showing
    const postDistance = 40; // pixels after milestone to keep showing

    const getNearMilestoneIndex = (stickmanX) => {
      for (let i = 0; i < milestoneXs.length; i++) {
        const x = milestoneXs[i];
        if (stickmanX >= x - preDistance && stickmanX <= x + postDistance) {
          return i;
        }
      }
      return -1;
    };

    const maxMovement = lineWidth - stickmanWidth;
    const updateStickman = (progress) => {
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const newX = clampedProgress * maxMovement;
      stickman.style.transform = `translateX(${newX}px)`;
      const milestoneIndex = getNearMilestoneIndex(newX);
      setCurrentBubbleIndex(milestoneIndex);
      fill.style.width = `${(newX / maxMovement) * 100}%`;
    };

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          updateStickman(self.progress);
        },
      },
    });

    return () => {
      scrollTL.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [experienceDone]);

  // Track scrollY for optional Stickman props or effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={expRef}
      className="min-h-screen flex flex-col items-center pt-20 relative"
    >
      {/* Sticky Container for heading + line */}
      <div className="sticky top-20 z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="relative inline-block mb-96">
          <h2 className="text-white text-center text-6xl font-bold relative">
            Experience
          </h2>
        </div>

        {/* Line */}
        <div className="w-full relative mt-8">
          <div
            ref={lineRef}
            className="h-1 w-[96%] relative overflow-visible border border-white rounded mb-40"
          >
            <div
              ref={fillRef}
              className="absolute top-0 left-0 h-full bg-white w-0 rounded"
            />
            {/* Milestone Circles */}
            {/* Milestone Circles with "from" labels below */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
            <div className="absolute top-full left-1/4 mt-2 text-white text-xs font-semibold select-none -translate-x-1/2">
              {bubbleItems[0].from}
            </div>

            <div className="absolute top-1/2 left-3/5 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
            <div className="absolute top-full left-3/5 mt-2 text-white text-xs font-semibold select-none -translate-x-1/2">
              {bubbleItems[1].from}
            </div>

            {/* Arrow Head */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white" />
            {/* Stickman and Bubble */}
            <div
              ref={stickmanRef}
              className={`absolute -top-[110px] left-0`}
              style={{ transition: "transform 0.3s ease-out" }}
            >
              {experienceDone && <Stickman scrollY={scrollY} />}
              {experienceDone && currentBubbleIndex !== -1 && (
                <div className="absolute left-20 bottom-32 transition-opacity duration-300 ease-out opacity-100">
                  <ComicSpeechBubble
                    bubbleItems={[bubbleItems[currentBubbleIndex]]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Spacer or other content below to create scroll space */}
      <div className="h-[550px]" /> {/* adjust height as needed */}
    </div>
  );
}
