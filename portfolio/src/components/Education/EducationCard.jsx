import React from "react";
import { motion } from "framer-motion";

function EducationCard({ img, flipped, info }) {

  return (
    <motion.div
      className="relative w-[850px] h-72"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{ rotateY: flipped ? 180 : 0,
        scale: flipped ? 1.2 : 1,
       }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Front Side */}
      <motion.div
  className="absolute w-full h-full rounded-md border border-black shadow-lg overflow-hidden"
  style={{
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
  }}
>
  <img
    src={img}
    alt="education front"
    className="w-full h-full object-cover rounded-md brightness-75"
  />

  {/* Overlay Text at Bottom */}
  <div className="absolute bottom-4 w-full text-center">
    <p className="text-white text-xl font-semibold px-4 py-1 inline-block rounded-md mx-auto">
      {info.class}
    </p>
  </div>
</motion.div>


      {/* Back Side */}
      <motion.div
        className="absolute w-full h-full rounded-md border border-black bg-white shadow-lg flex items-center justify-center"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        {flipped && <div
          className="w-full h-full p-6 text-black rounded-md flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Top: Logo & Institution Name */}
          <div className="flex flex-col items-center gap-2">
            {info.logo && (
              <img
                src={info.logo}
                alt="school logo"
                className="w-20 h-20 object-cover shadow-md"
                   style={{ boxShadow: "6px 6px rgba(128, 128, 128, 0.4)" }} 
              />
            )}
            <h3 className="text-2xl font-semibold text-gray-800 my-2">
              {info.name}
            </h3>
          </div>

          {/* Info Grid: 2 Columns Per Row */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
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
                <span className="font-semibold">Percentage:</span>{" "}
                {info.percentage}
              </div>
            )}
          </div>
        </div>}
      </motion.div>
    </motion.div>
  );
}

export default EducationCard;
