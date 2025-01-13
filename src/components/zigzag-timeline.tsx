import React from "react";

interface Timeline {
  index: number;
  school: string;
  degree: string;
  start: string;
  end: string;
}

export function Timeline({ index, school, degree, start, end }: Timeline) {
  return (
    <div
      className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } w-full max-w-4xl`}
    >
      {/* Timeline Icon */}
      <div className="relative z-10 w-12 h-12 bg-[#5584b0] text-white rounded-full flex items-center justify-center shadow-md">
        <span className="font-bold">{index + 1}</span>

        {/* Vertical Line */}
        {index < 7 && (
          <div
            className={`absolute w-1 bg-[#5584b0] top-full left-1/2 transform -translate-x-1/2`}
            style={{ height: "40px" }}
          ></div>
        )}

        {/* Horizontal Line */}
        <div
          className={`absolute w-8 h-1 bg-[#5584b0] top-1/2 transform ${index % 2 === 0 ? "left-[125%] -translate-x-1/2" : "right-[125%] translate-x-1/2"
            }`}
          style={{ height: "3px" }}
        ></div>
      </div>

      {/* Timeline Content */}
      <div
        className={`flex bg-blue-100 border rounded-lg z-11 shadow-md w-full ${index % 2 === 0 ? "ml-6" : "mr-6"}`}
      >
        {/* First Column: Start - End */}
        <div className="flex flex-row items-center justify-center text-xl bg-[#81c2e6] text-[#254e7a] p-4 rounded-md w-1/4">
          {/* Start */}
          <div className="flex items-center font-bold">
            <span>{start}</span>
          </div>
          {/* Separator */}
          <div className="flex items-center font-bold px-3">
            <span className="text-base">-</span>
          </div>
          {/* End */}
          <div className="flex items-center font-bold">
            <span>{end}</span>
          </div>
        </div>

        {/* Second Column: School and Degree */}
        <div className="flex flex-col p-4 w-3/4">
          <div className="text-base font-bold text-[#254e7a]">{school}</div>
          <div className="text-base text-[#254e7a]">{degree}</div>
        </div>
      </div>
    </div>
  );
}
