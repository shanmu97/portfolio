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
  { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },

  // Row 2 - 7 items
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },

  // Row 3 - 6 items
  { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Hibernate', image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Hibernate_logo_a.png' },
  { name: 'Maven', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg' },
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
    <div className="text-white py-20 px-4" ref={containerRef}>
      <div className="relative">
  <div
    className="sticky top-0 z-10"
    style={{ height: '95vh' }}
  >
    {/* This sticks the animation content for one viewport height */}
    <motion.h2
      className="text-5xl text-center mb-24 pt-50"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Skills
    </motion.h2>

    {/* Row 1 - 8 items */}
    <div className="flex justify-center mb-8">
      <div className="grid grid-cols-8 gap-x-12 gap-y-8">
        {skills.slice(0, 8).map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex justify-center mb-8">
      <div className="grid grid-cols-7 gap-x-12 gap-y-8">
        {skills.slice(8, 15).map((skill, index) => (
          <SkillCard key={index + 8} skill={skill} index={index + 8} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>

    {/* Row 3 */}
    <div className="flex justify-center">
      <div className="grid grid-cols-6 gap-x-12">
        {skills.slice(15).map((skill, index) => (
          <SkillCard key={index + 15} skill={skill} index={index + 15} scrollYProgress={scrollYProgress} />
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
