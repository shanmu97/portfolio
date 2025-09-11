import React, { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';

const getRandomInitial = () => {
  const x = Math.floor(Math.random() * 800 - 400); // -400 to 400
  const y = Math.floor(Math.random() * -600 - 100); // -700 to -100
  return { x, y };
};

const SkillCard = ({ skill, index, scrollYProgress }) => {
  const initial = useMemo(() => getRandomInitial(), []);

  const start = 0.15 + index * 0.01;
  const end = start + 0.2;

  const x = useTransform(scrollYProgress, [start, end], [initial.x, 0]);
  const y = useTransform(scrollYProgress, [start, end], [initial.y, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ x, y, opacity }}
      className="group flex flex-col items-center bg-gray-200 p-4 rounded-lg my-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="w-14 h-14 object-contain"
      />

      {/* Container for the name with height toggle */}
      <div
        className="overflow-hidden max-h-0 group-hover:max-h-20 transition-[max-height] duration-300 ease-in-out"
      >
        <p className="text-sm text-center mt-2 text-black font-semibold">{skill.name}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
