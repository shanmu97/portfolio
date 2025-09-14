import React from "react";
import { motion } from "framer-motion";

function EducationCard({ img, isFlipped, info }) {
  return (
    <div
      className="relative w-[600px] h-72 bg-black" // black background for entire card
      style={{
        perspective: 1000,
        backgroundColor: "black", // fallback
        zIndex: isFlipped ? 20 : 10,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          backgroundColor: "transparent",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
           scale: isFlipped ? 1.1 : 1,

        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full left-1/2 transform -translate-x-1/2 rounded-md border border-black shadow-lg overflow-hidden bg-black"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={img}
            alt="education front"
            className="w-full h-full object-cover rounded-md brightness-75"
          />

          <div className="absolute bottom-4 w-full text-center">
            <p className="text-white text-xl font-semibold px-4 py-1 inline-block rounded-md mx-auto">
              {info.class}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-[500px] h-full left-1/2 transform -translate-x-1/2 rotate-y-180 rounded-md border border-black shadow-lg flex items-center justify-center p-6 text-black bg-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex flex-col justify-between text-gray-900">
            {/* Top Section */}
            <div className="flex flex-col items-center gap-2">
              {info.logo && (
                <img
                  src={info.logo}
                  alt="school logo"
                  className="w-20 h-20 object-cover shadow-md"
                  style={{ boxShadow: "6px 6px rgba(128, 128, 128, 0.4)" }}
                />
              )}
              <h3 className="text-2xl font-semibold my-2">
                {info.name}
              </h3>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm mt-4">
              <div>
                <span className="font-semibold">Year:</span> {info.year}
              </div>
              <div>
                <span className="font-semibold">Course:</span> {info.class}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {info.location}
              </div>
              {info.major && (
                <div>
                  <span className="font-semibold">Major:</span> {info.major}
                </div>
              )}
              {info.gpa && (
                <div>
                  <span className="font-semibold">GPA:</span> {info.gpa}
                </div>
              )}
              {info.percentage && (
                <div>
                  <span className="font-semibold">Percentage:</span> {info.percentage}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EducationCard;
