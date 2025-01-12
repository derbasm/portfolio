import React from "react";
import { Timeline } from "@/components/zigzag-timeline";

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

const Educations = ({ education }: { education: Education[] }) => {
  return (
    <div className="p-6 shadow-lg ">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="flex flex-col items-center space-y-6 relative">
        {education.map((edu, index) => (
          <Timeline
            key={index}
            index={index}
            school={edu.school}
            degree={edu.degree}
            start={edu.start}
            end={edu.end}
          />
        ))}
      </div>
    </div>
  );
};

export default Educations;
