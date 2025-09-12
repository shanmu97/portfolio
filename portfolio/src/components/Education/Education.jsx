import { useRef, useState, useEffect } from "react";
import { useMotionValue, useTransform, motion, useScroll } from "framer-motion";
import montessori from "../../assets/montessori.jpg";
import narayana from "../../assets/narayana.jpg";
import vitap from "../../assets/vitap.jpg";
import EducationCard from "./EducationCard";

import montessorilogo from "../../assets/montessorilogo.jpg";
import narayanalogo from "../../assets/narayanalogo.jpg";
import vitaplogo from "../../assets/vitaplogo.jpg";

function Education() {
  const cardsContainerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, img: montessori, finalX: "-20vw" },
    { id: 2, img: narayana, finalX: "20vw" },
    { id: 3, img: vitap, finalX: "0vw" },
  ];

  const details = [
    {
      logo: montessorilogo,
      name: "Montessori High School",
      year: "2018 - 2019",
      location: "Ongole, Andhra Pradesh",
      class: "Secondary",
      gpa: "10",
    },
    {
      logo: narayanalogo,
      name: "Narayana Junior College",
      year: "2020 - 2021",
      location: "Ongole, Andhra Pradesh",
      class: "Intermediate",
      percentage: "97.1",
    },
    {
      logo: vitaplogo,
      name: "VIT-AP University",
      year: "2021 - 2025",
      location: "Amaravati, Andhra Pradesh",
      class: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      gpa: "8.9",
    },
  ];

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [animationEndScrollY, setAnimationEndScrollY] = useState(0);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      const containerBottom = container.offsetTop + container.offsetHeight;
      // Start fading out 100px after the animation ends
      setAnimationEndScrollY(containerBottom + 100);
    }
  }, []);

  // Use different ref for cards container to separate scroll from header

  // Scroll progress based on cards container to control animations under header
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  });

  // Control header opacity (fade out after cards finish animating)

  const transforms = cards.map((card, i) => {
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const startX = 0.6 + i * 0.1;
    const endX = startX + 0.3;
    const x = useTransform(
      scrollYProgress,
      [startX, endX],
      ["0vw", card.finalX]
    );
    return { x, opacity };
  });
  

return (
  <div className="min-h-screen flex flex-col items-center relative mt-48">
    {/* 🔵 TOP MARKER */}

    {/* Sticky header that stays visible on top */}
    <motion.h2
      className="sticky top-20 bg-black text-6xl font-bold text-white text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Education
    </motion.h2>

    {/* Cards container with height constrained below header */}
    <div
      ref={cardsContainerRef}
      className="relative w-full h-[125vh] flex justify-center items-center overflow-hidden pt-60"
    >
      {cards.map(({ id, img }, i) => {
        const isHovered = hoveredCard === id;
        return (
          <motion.div
            key={id}
            className={`absolute flex items-center justify-center rounded-lg shadow-lg ${
              isHovered ? "w-[500px] h-72 z-50" : "w-72 h-60 z-10"
            }`}
            style={{
              x: transforms[i].x,
              opacity: transforms[i].opacity,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: [0, -5, 0, 5, 0],
              rotateY: isHovered ? 180 : 0,
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "easeInOut",
              },
              rotateY: { duration: 0.6, ease: "easeInOut" },
            }}
            onHoverStart={() => setHoveredCard(id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <EducationCard img={img} flipped={isHovered} info={details[i]} />
          </motion.div>
        );
      })}
    </div>

    {/* 🔴 BOTTOM MARKER */}
  </div>
);

}

export default Education;
