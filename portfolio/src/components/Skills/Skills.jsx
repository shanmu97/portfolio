import React, { useRef } from 'react';
import SkillCard from './SkillCard';
import { motion, useScroll } from 'framer-motion';

function Skills() {
  const containerRef = useRef(null);

  const skills = [
  // Row 1 - 8 items
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },

  // Row 2 - 7 items
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },


  // Row 3 - 6 items
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'PySpark', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
  { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];
  // Get scroll progress for Skills component (from 0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // when top of element hits bottom of screen to when bottom hits top
  });

  return (
    <div className="text-white px-4" ref={containerRef}>
      <div className="relative">
  <div
    className="sticky top-0 z-10"
    style={{ height: '95vh' }}
  >
    {/* This sticks the animation content for one viewport height */}
    <motion.h2
      className="text-5xl text-center mb-24 pt-50 cal-sans-regular"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Skillset
    </motion.h2>

    {/* Row 1 - 8 items */}
{/* Row 1 - 7 items */}
<div className="flex justify-center items-center mb-8">
  <div className="grid grid-cols-7 gap-x-12 gap-y-8 max-w-fit">
    {skills.slice(0, 7).map((skill, index) => (
      <SkillCard key={index} skill={skill} index={index} scrollYProgress={scrollYProgress} />
    ))}
  </div>
</div>

{/* Row 2 - 6 items */}
<div className="flex justify-center mb-8">
  <div className="grid grid-cols-6 gap-x-12 gap-y-8 max-w-fit">
    {skills.slice(7, 13).map((skill, index) => (
      <SkillCard key={index + 7} skill={skill} index={index + 7} scrollYProgress={scrollYProgress} />
    ))}
  </div>
</div>

{/* Row 3 - remaining items */}
<div className="flex justify-center">
  <div className="grid grid-cols-5 gap-x-12 max-w-fit">
    {skills.slice(13).map((skill, index) => (
      <SkillCard key={index + 13} skill={skill} index={index + 13} scrollYProgress={scrollYProgress} />
    ))}
  </div>
</div>

  </div>
</div>
<div className="h-[80px]" /> 

    </div>
  );
}

export default Skills;
