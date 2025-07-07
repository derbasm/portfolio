"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillItemProps {
  name: string;
  level: string; // Format "3/5"
  icon?: React.ReactNode;
  category?: string;
}

interface AnimatedSkillProps {
  SkillList: SkillItemProps[];
  language: "de" | "en";
}

const AnimatedSkill = ({ SkillList, language }: AnimatedSkillProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const titles = {
    de: {
      technical: "Technische Fähigkeiten",
      soft: "Soft Skills",
      tools: "Tools & Technologien"
    },
    en: {
      technical: "Technical Skills",
      soft: "Soft Skills", 
      tools: "Tools & Technologies"
    }
  };

  // Group skills by category
  const groupedSkills = SkillList.reduce((acc, skill) => {
    const category = skill.category || "technical";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, SkillItemProps[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={ref} className="space-y-8">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <motion.div
          key={category}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-center">
            {titles[language][category as keyof typeof titles[typeof language]] || category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              // Convert "3/5" to percentage
              const [current, total] = skill.level.split('/').map(Number);
              const percentage = Math.round((current / total) * 100);
              
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      {skill.icon && (
                        <span className="text-[#5584b0] dark:text-[#81c2e6]">
                          {skill.icon}
                        </span>
                      )}
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#254e7a] to-[#5584b0] rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSkill;
