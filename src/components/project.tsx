import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/card";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}


export function Project({ title, link, techStack, description }: Project) {
  return (
    <Card
      className="flex flex-col overflow-hidden p-2 h-full bg-[#cbe3ef]"
      onClick={link ? () => window.open(link, '_blank') : undefined}
    >
      <CardHeader>
        <CardTitle
          className={`${link ? 'underline cursor-pointer' : '' } p-1`}
        >
          {title}
        </CardTitle>
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
