import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/card";

interface ProjectProps {
  title: string;
  techStack: string[];
  description: string;
}

export function Project({ title, techStack, description }: ProjectProps) {
  return (
    <Card className="flex flex-col overflow-hidden p-4 h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="px-2 py-1 text-xs bg-[#81c2e6] text-[#254e7a] border border-[#5584b0] rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default Project;
