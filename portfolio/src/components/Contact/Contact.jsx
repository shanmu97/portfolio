import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaDownload,
  FaEnvelope,
  FaTimes,
} from 'react-icons/fa';
import Mobile from './Mobile';
import sanji from '../../assets/luffy.png';
import resume from '../../assets/ShanmukhaReddy_SoftwareDeveloper.pdf'

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ref for the whole content container
  const containerRef = useRef(null);

  // Detect if container is at least 30% visible in viewport
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  const imageVariants = {
hidden: { x: 100, opacity: 0, scale: 1 },
visible: {
  x: 0,
  opacity: 1,
  scale: 1.69,
  transition: {
    type: 'spring',
    stiffness: 50,
    damping: 20
  }
}

  };

  return (
    <div className="relative h-screen bg-black overflow-hidden mt-64" ref={containerRef}>

      <div className={`w-full h-full ${isModalOpen ? 'blur-sm' : ''}`}>

        {/* Left: Text Content */}
        <motion.div
          className="absolute left-10 bottom-36 w-full h-full flex flex-col justify-center px-6 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="space-y-4 text-white ">
            <h2 className="text-9xl font-bold">Let’s Connect</h2>

            <p className="text-gray-300 text-lg">
              Here we go, off to the Grand Line! Wanna be my crewmate? Hit me up on socials and let’s have fun!
            </p>

            <p className="text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              Hyderabad, India
            </p>

            <div className="flex gap-6 text-3xl text-white pt-4">
              <a href="https://wa.me/+919390122293" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-400 transition-transform duration-300" />
              </a>
              <a href="https://linkedin.com/in/vsr07" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition-transform duration-300" />
              </a>
              <a href="https://github.com/shanmu97" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-400 transition-transform duration-300" />
              </a>
              <a href="https://instagram.com/shanmukhareddy.vasa" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-400 transition-transform duration-300" />
              </a>
              
              {/* Email icon to open modal */}
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="hover:text-blue-500 transition-transform duration-300 focus:outline-none"
                aria-label="Open email modal"
              >
                <FaEnvelope />
              </button>

              <a
  href={resume}
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <FaDownload className="hover:text-yellow-300 transition-transform duration-300" />
</a>

            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="absolute right-[70vh] top-0 w-full md:w-1/2 h-full"
          style={{ originX: 0 }}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <img
            src={sanji}
            alt="Luffy"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <p
  className="absolute text-yellow-400 italic text-lg text-center"
  style={{ top: '90%', left: '5%' }} // example position, adjust as you like
>
  "As long as I live, there are infinite chances"<br/> - Monkey D. Luffy
</p>


      </div>

      {/* Modal for Mobile component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative rounded-lg w-full">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-10 right-[80vh] text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Close modal"
            >
              <FaTimes size={24} className='text-white' />
            </button>

            {/* Mobile component */}
            <Mobile />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
