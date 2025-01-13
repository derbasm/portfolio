import React from "react";
import {Timeline} from "@/components/linearpath-timeline"

interface WorkExperience {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
  }
  

const WorkExperience =({ workExperienceList }: {workExperienceList : WorkExperience[]}) => {
  return (
    <div className="flex flex-col items-center relative">
      {workExperienceList.map((work, index) => (
        <Timeline
          key={index}
          index={index}
          school={work.company}  
          degree={work.description} 
          start={work.start}
          end={work.end ?? "Present"}  
        />
      ))}
    </div>
  );
}

export default WorkExperience;
