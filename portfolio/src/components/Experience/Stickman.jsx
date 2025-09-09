function Stickman({ scrollY, style }) {
  const walkPhase = scrollY / 10;
  const armAngle = Math.sin(walkPhase) * 30;
  const legAngle = Math.sin(walkPhase + Math.PI) * 30;
  const backLegAngle = Math.sin(walkPhase) * 30;
  const backArmAngle = Math.sin(walkPhase + Math.PI) * 30;

  return (
    <svg
      style={style}
      width="90"
      height="130"
      viewBox="0 0 90 130"
      aria-label="Walking stickman"
    >
      <circle cx="45" cy="20" r="15" fill="white" />
      <rect x="41" y="35" width="8" height="40" rx="4" fill="white" />
      <g transform={`rotate(${backArmAngle},45,45)`} opacity="0.4">
        <rect x="41" y="40" width="8" height="32" rx="4" fill="white" />
      </g>
      <g transform={`rotate(${armAngle},45,45)`}>
        <rect x="41" y="40" width="8" height="32" rx="4" fill="white" />
        <rect x="38" y="68" width="14" height="4" rx="2" fill="white" />
        <rect x="25" y="72" width="40" height="18" rx="4" fill="white" />
      </g>
      <g transform={`rotate(${legAngle},45,76)`}>
        <rect x="41" y="75" width="8" height="40" rx="4" fill="white" />
      </g>
      <g transform={`rotate(${backLegAngle},45,76)`} opacity="0.4">
        <rect x="41" y="75" width="8" height="40" rx="4" fill="white" />
      </g>
    </svg>
  );
}

export default Stickman;
