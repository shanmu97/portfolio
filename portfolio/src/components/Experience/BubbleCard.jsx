import React from "react";

export default function BubbleCard({ bubbleItems }) {
  if (!bubbleItems || bubbleItems.length === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[150px] relative space-y-6 oscillate">
      {bubbleItems.map((item, index) => (
        <div
          key={index}
          className="w-[420px] h-auto border border-white rounded-lg"
          style={{
            backgroundColor: "transparent",
            boxShadow: "8px 8px rgba(107, 114, 128, 1)", // opaque shadow
          }}
        >
          <div className="w-full flex flex-col items-center bg-white text-black text-lg rounded-lg p-4">
            {/* Header: logo and company name */}
            <div className="flex items-center justify-center gap-2 w-full mb-1">
              {item.image1 && <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white">
                 <img
                  src={item.image1}
                  alt={`${item.companyName} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>}
              <span className="text-4xl font-semibold text-center cal-sans-medium">{item.companyName}</span>
            </div>

            {/* Date range placeholder - customize if date props provided */}
            <div>
              <span className="text-[1rem] font-semibold text-center pl- cal-sans-medium">
                {/* Example static date, replace or add date field to item */}
                {item.from} - {item.to}
              </span>
            </div>

            <div className="w-[86%] h-0.5 bg-black mt-1" />

            {/* List of points */}
            <div className="w-[86%] mt-2 overflow-y-auto max-h-[240px]">
              <ul className=" w-full list-disc list-inside space-y-1 text-justify libre-baskerville-regular">
                {Object.values(item.points).map((point, idx) => (
                  <li key={idx} className="text-xs leading-snug">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
