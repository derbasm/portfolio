import React from "react";

interface Timeline {
  index: number;
  school: string;
  degree: string;
  start: string;
  end: string;
}

export function Timeline({ school, degree, start, end }: Timeline) {
  return (
    <div className="relative border-l-4 border-[#cbe3ef] p-6 text-sm text-[#cbe3ef] bg-[#5584b0] py-4 shadow-lg border-b"
    style={{ borderBottomColor: '#254e7a' }}>
      {/* Timeline Marker */}
      <div className="absolute w-4 h-4 bg-[#4a90e2] rounded-full -left-2.5 border-2 border-[#f7faff]"></div>

      <div className="flex items-center justify-between">
        {/* Time Period */}
        <time className="text-lg font-medium flex-shrink-0">
          {start} - {end}
        </time>

        {/* Spacer to center align school */}
        <div className="flex-1 flex justify-center">
          <h3 className="text-lg font-bold ">{school}</h3>
        </div>
      </div>

      {/* Degree */}
      <p className="text-base font-medium ">{degree}</p>
    </div>
  );
}
