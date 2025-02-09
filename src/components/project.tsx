import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/card";

interface Project {
  title: string;
  organization: string,
  description: string;
  techStack: string[];
  link?: string;
}

export function Project({ title, organization, link, techStack, description }: Project) {
  return (
    <Card className="flex flex-col overflow-hidden p-2 h-full bg-[#cbe3ef]">
      <CardHeader>
        <CardTitle
          className={`${link ? 'underline cursor-pointer' : ''} p-1 border-b border-[#81c2e6] pb-4 flex justify-between items-center`}
        >
          <span>{title}</span>
          <span>{organization}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2 justify-center">
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
