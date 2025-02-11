import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiCplusplus,
  SiSpringboot,
  SiPhp,
  SiPostgresql,
  SiKubernetes,
  SiGitlab,
  SiJira,
  SiTailwindcss,
  SiFlutter
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava, FaAws, FaJenkins, FaGit, FaLinux } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import MendixIcon from "@/components/mendixicon";

interface Skill {
  name: string;
  level: string;
}

const Skill = ({ SkillList }: { SkillList: Skill[] }) => {
  const getIconComponent = (skillName: string) => {
    switch (skillName) {
      case "JavaScript":
        return SiJavascript;
      case "React":
        return SiReact;
      case "Node.js":
        return SiNodedotjs;
      case "Python":
        return SiPython;
      case "Docker":
        return SiDocker;
      case "CSS":
        return SiCss3;
      case "AWS":
        return FaAws;
      case "HTML":
        return SiHtml5;
      case "Linux":
        return FaLinux;
      case "Java":
        return FaJava;
      case "Spring Boot":
        return SiSpringboot;
      case "PHP":
        return SiPhp;
      case "Postgresql":
        return SiPostgresql;
      case "Jenkins":
        return FaJenkins;
      case "Scrum":
        return DiScrum;
      case "Kubernetes":
        return SiKubernetes;
      case "Azure":
        return VscAzure;
      case "Git":
        return FaGit;
      case "Gitlab":
        return SiGitlab;
      case "C++":
        return SiCplusplus;
      case "C#":
        return null;
      case "Jira":
        return SiJira;
      case "Tailwind":
        return SiTailwindcss;
      case "Flutter":
        return SiFlutter;
      case "Mendix":
        return MendixIcon;
      default:
        return null;
    }
  };

  const getColor = (level: string) => {
    switch (level) {
      case "5/5":
        return { bgColor: "bg-green-600" };
      case "4/5":
        return { bgColor: "bg-lime-600" };
      case "3/5":
        return { bgColor: "bg-yellow-600" };
      case "2/5":
        return { bgColor: "bg-orange-500" };
      case "1/5":
        return { bgColor: "bg-red-600" };
      default:
        return { bgColor: "bg-gray-300" };
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {SkillList.map((skill) => {
        const IconComponent = getIconComponent(skill.name);
        const { bgColor } = getColor(skill.level);

        return (
          <div
            key={skill.name}
            className={`flex items-center gap-x-2 p-2 text-sm font-medium border-2 border-gray-600 rounded-lg transition-transform duration-200 transform hover:scale-105`}
            style={{ flex: "1 1 calc(25% - 1rem)" }}
          >
            {IconComponent && <IconComponent className="text-lg" />}
            <span className="flex-grow">{skill.name}</span>

            {/* Progress Bar */}
            <div className="flex items-end gap-0.5 h-6">
              {[1, 2, 3, 4, 5].map((level) => {
                const isFilled = parseInt(skill.level[0], 10) >= level;

                return (
                  <div
                    key={level}
                    className={`w-1 ${isFilled ? bgColor : "bg-gray-300"} rounded-md transition-all duration-300`}
                    style={{
                      height: `${level * 20}%`,
                      animation: isFilled ? "bounce 1s infinite ease-in-out" : "none",
                      animationDelay: `${level * 0.1}s`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
