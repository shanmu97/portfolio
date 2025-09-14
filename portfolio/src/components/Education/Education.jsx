import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import EducationCard from "./EducationCard";
import montessori from "../../assets/montessori.jpg";
import narayana from "../../assets/narayana.jpg";
import vitap from "../../assets/vitap.jpg";
import montessorilogo from "../../assets/montessorilogo.jpg";
import narayanalogo from "../../assets/narayanalogo.jpg";
import vitaplogo from "../../assets/vitaplogo.jpg";

const EducationSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { amount: 0.3 });

  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  // State to track which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, img: montessori, finalX: "-20vw" },
    { id: 2, img: vitap, finalX: "20vw" },
    { id: 3, img: narayana, finalX: "0vw" },
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
      logo: vitaplogo,
      name: "VIT-AP University",
      year: "2021 - 2025",
      location: "Amaravati, Andhra Pradesh",
      class: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      gpa: "8.9",
    },
    {
      logo: narayanalogo,
      name: "Narayana Junior College",
      year: "2020 - 2021",
      location: "Ongole, Andhra Pradesh",
      class: "Intermediate",
      percentage: "97.1",
    },
  ];

  useEffect(() => {
    if (isTitleInView) {
      titleControls
        .start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        })
        .then(() => {
          cardsControls
            .start({
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            })
            .then(() => {
              cardsControls.start((i) => ({
                x: i === 0 ? "-150%" : i === 1 ? "0%" : "150%",
                transition: { duration: 0.6, ease: "easeInOut" },
              }));
            });
        });
    } else {
      cardsControls.start({
        x: 0,
        y: 300,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      titleControls.start({
        y: 100,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
  }, [isTitleInView, titleControls, cardsControls]);

  const getInitialCardStyle = () => ({
    left: "35%",
    transform: "translateX(-50%)",
    top: 0,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.h2
        ref={titleRef}
        initial={{ y: 100, opacity: 0 }}
        animate={titleControls}
        className="text-6xl font-bold mb-52 text-white"
      >
        Education
      </motion.h2>

      <div className="relative w-full max-w-4xl h-64">
        {cards.map(({ id, img }, i) => (
          <motion.div
  key={id}
  custom={i}
  initial={{ y: 300, opacity: 0, x: 0, scale: i === 1 ? 1.2 : 1 }}
  animate={cardsControls}
  className="absolute w-64 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center"
  style={{
    ...getInitialCardStyle(),
    zIndex:
      hoveredCard === id
        ? 50
        : i === 1
        ? 30 // middle card gets highest zIndex normally
        : i === 2
        ? 20 // right card below middle card
        : 10, // left card lowest
  }}
  onMouseEnter={() => setHoveredCard(id)}
  onMouseLeave={() => setHoveredCard(null)}
>
  <EducationCard img={img} info={details[i]} isFlipped={hoveredCard === id} />
</motion.div>

        ))}
      </div>
    </div>
  );
};

export default EducationSection;
