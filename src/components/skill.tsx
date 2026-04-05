import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiCss,
  SiHtml5,
  SiCplusplus,
  SiSpring,
  SiPhp,
  SiPostgresql,
  SiKubernetes,
  SiGitlab,
  SiJira,
  SiTailwindcss,
  SiOpenapiinitiative,
  SiFlutter
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava, FaAws, FaJenkins, FaGit, FaLinux } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import MendixIcon from "@/components/mendixicon";
import type { Skill } from "@/types/resume";

const Skill = ({ SkillList }: { SkillList: Skill[] }) => {
  const parseSkillLevel = (level: string): number => {
    if (level.includes('/')) {
      const parts = level.split('/').map(Number);
      if (parts.length === 2) {
        const value = parts[0];
        const max = parts[1];
        if (value !== undefined && max !== undefined && !Number.isNaN(value) && !Number.isNaN(max) && max > 0) {
          return Math.round((value / max) * 100);
        }
      }
    }

    const normalized = level.toLowerCase();
    if (normalized.includes('advanced') || normalized.includes('expert')) {
      return 90;
    }
    if (normalized.includes('intermediate')) {
      return 70;
    }
    if (normalized.includes('basic') || normalized.includes('beginner')) {
      return 45;
    }
    return 60;
  };

  const getSkillLabel = (score: number) => {
    if (score >= 85) {
      return "Advanced";
    }
    if (score >= 65) {
      return "Intermediate";
    }
    return "Basic";
  };

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
        return SiCss;
      case "AWS":
        return FaAws;
      case "HTML":
        return SiHtml5;
      case "Linux":
        return FaLinux;
      case "Java":
        return FaJava;
      case "Spring":
        return SiSpring;
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
      case "OpenAPI":
        return SiOpenapiinitiative;
      case "Flutter":
        return SiFlutter;
      case "Mendix":
        return MendixIcon;
      default:
        return null;
    }
  };

  const getColor = () => {
    // Einheitliche Farbe für alle Skill-Level
    return { bgColor: "bg-gradient-to-r from-[#254e7a] to-[#5584b0]" };
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {SkillList.map((skill) => {
        const IconComponent = getIconComponent(skill.name);
        const { bgColor } = getColor();
        const score = parseSkillLevel(skill.level);
        const label = getSkillLabel(score);

        return (
          <div
            key={skill.name}
            className={`flex items-center gap-x-2 p-3 text-sm font-medium border-2 border-[#5584b0] dark:border-[#81c2e6] rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800`}
            style={{ flex: "1 1 calc(25% - 1rem)" }}
          >
            {IconComponent && <IconComponent className="text-lg text-[#5584b0] dark:text-[#81c2e6]" />}
            <span className="flex-grow text-[#254e7a] dark:text-gray-100">{skill.name}</span>

            <div className="flex items-center gap-2">
              <div className="w-16 bg-gray-300 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                <div className={`h-full rounded-full ${bgColor}`} style={{ width: `${score}%` }} />
              </div>
              <span className="text-xs text-[#254e7a] dark:text-gray-100 font-semibold min-w-[76px] text-right">
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
