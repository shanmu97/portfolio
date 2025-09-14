const Stickman = () => (
  <div className="flex justify-center items-center h-screen bg-white">
    <svg
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="67" cy="40" r="15" fill="black" />
      {/* Body */}
      <rect x="54" y="56" width="28" height="60" rx="8" fill="black" />

      {/* Left Arm - L shape */}
      <g transform="translate(4,-0)">
        <rect
          x="23"
          y="37"
          width="55" // increased length for front extension
          height="10"
          rx="5"
          fill="black"
          transform="rotate(35 23 37)" // rotate around base point (23,37)
        />
      </g>

      {/* Right Arm - L shape (mirrored) */}
      {/* Right Arm - Mirror of Left */}
<g transform="translate(-10, 0)">
  <rect
    x="20"
    y="40"
    width="55"
    height="10"
    rx="5"
    fill="black"
    transform="rotate(-35 97 37)" // pivot on the far right side
  />
</g>


      
      {/* Left Leg (bent) */}
      <rect
        x="56"
        y="112"
        width="14"
        height="55"
        rx="7"
        fill="black"
        transform="rotate(13 75 105)"
      />
      {/* Right Leg (bent) */}
      <rect
        x="66"
        y="112"
        width="14"
        height="55"
        rx="7"
        fill="black"
        transform="rotate(-13 60 105)"
      />
    </svg>
  </div>
);

export default Stickman;
