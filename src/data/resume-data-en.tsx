import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA_EN: ResumeData = {
  header: {
    name: "Mouhanad Derbas",
    location: "Nürnberg, Germany",
    locationLink: "https://www.google.com/maps/place/N%C3%BCrnberg/",
    about:
      "Full Stack Developer building reliable web applications from concept to production.",
    summary:
      "I deliver full-stack solutions with React/Next.js and Java/Spring Boot, from requirements to deployment. " +
      "My focus is clean architecture, maintainable code, and user-centered interfaces. " +
      "I enjoy taking ownership of features end-to-end and collaborating closely with product and design teams.",
    avatar: "/Avatar.webp",
    contact: {
      email: "derbasmo94@gmail.com",
      tel: "+491729099415",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/derbasm",
          icon: FaGithub,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/derbasmo/",
          icon: FaLinkedin,
        },
      ],
    }
  }
  ,
  education: [
    {
      school: "LinkedIn Learning",
      degree: "Currently enrolled in online courses across various disciplines",
      start: "03/2024",
      end: "Present"
    },
    {
      school: "Technical University of Nuremberg",
      degree: "Bachelor's Degree in Computer Science and Media (B. Sc.)",
      start: "10/2019",
      end: "04/2024",
    },
    {
      school: "Technical University of Nuremberg",
      degree: "Bachelor's Degree in Computer Science (until second semester)",
      start: "10/2017",
      end: "09/2019",
    },
    {
      school: "Damascus University",
      degree: "Bachelor's Degree Computer Technology (until fourth semester)",
      start: "09/2012",
      end: "09/2014",
    },
    {
      school: "High school Syria",
      degree: "Baccalaureate",
      start: "09/2000",
      end: "07/2012",
    },
  ],
  work: [
    {
      company: "Ibtikar",
      link: "",
      title: "Software Developer",
      start: "11/2024",
      end: "Present",
      description:
        "Contributing to multiple product features across backend and frontend. " +
        "Implemented services with Spring Boot and Java, supported CI/CD workflows with GitLab, and integrated container-based delivery using Docker. " +
        "Built and improved user-facing functionality with React and Next.js."
    },
    {
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Software Developer",
      start: "10/2022",
      end: "Present",
      description:
        "Full-stack delivery across multiple client projects using React, Mendix, and Python. " +
        "Took ownership of core parts of PIM and SOAP-Nextcloud integration, and contributed to Time Slot and ETL pipelines. " +
        "Worked across development, UI/UX implementation, and project coordination."
    },
  ],
  skills: [
    {
      name: "JavaScript",
      level: "Advanced",
    },
    {
      name: "Python",
      level: "Intermediate",
    },
    {
      name: "LangChain",
      level: "Intermediate",
    },
    {
      name: "LangGraph",
      level: "Intermediate",
    },
    {
      name: "Java",
      level: "Intermediate",
    },
    {
      name: "C++",
      level: "Basic",
    },
    {
      name: "Tailwind",
      level: "Intermediate",
    },
    {
      name: "PHP",
      level: "Basic",
    },
    {
      name: "React",
      level: "Advanced",
    },
    {
      name: "CSS",
      level: "Advanced",
    },
    {
      name: "HTML",
      level: "Advanced",
    },
    {
      name: "Flutter",
      level: "Basic",
    },
    {
      name: "Mendix",
      level: "Advanced",
    },
    {
      name: "Node.js",
      level: "Intermediate",
    },
    {
      name: "Postgresql",
      level: "Intermediate",
    },
    {
      name: "AWS",
      level: "Basic",
    },
    {
      name: "Azure",
      level: "Basic",
    },
    {
      name: "Docker",
      level: "Intermediate",
    },
    {
      name: "Jenkins",
      level: "Intermediate",
    },
    {
      name: "Gitlab",
      level: "Intermediate",
    },
    {
      name: "Linux",
      level: "Intermediate",
    },
    {
      name: "OpenAPI",
      level: "Intermediate",
    },
    {
      name: "Git",
      level: "Advanced",
    },
    {
      name: "Scrum",
      level: "Advanced",
    },
    {
      name: "Spring",
      level: "Intermediate",
    },
    {
      name: "Kubernetes",
      level: "Intermediate",
    },
  ],
  languages: [
    {
      name: "German",
      level: "C1", 
      proficiency: "Fluent",
      description: "Excellent written and spoken skills, working professionally since 2022"
    },
    {
      name: "English",
      level: "B2",
      proficiency: "Conversational", 
      description: "Good knowledge for international projects and technical documentation"
    },
    {
      name: "Arabic",
      level: "C2",
      proficiency: "Native",
      description: "Native speaker, negotiation level"
    }
  ],
  projects: [
    {
      title: "Multi-Agent System",
      organization: "Current Project",
      period: "Current",
      techStack: [
        "Python",
        "LangChain",
        "LangGraph",
        "MCP Servers",
        "Embeddings",
        "Vector Search",
        "LLM Orchestration",
        "API Integration"
      ],
      description: "Development of a multi-agent system for multiple use cases with coordinated task execution, data access through MCP servers, and semantic processing through embeddings.",
      detailedDescription: "Designed and implemented a multi-agent system in which specialized agents collaborate, plan tasks, exchange context, and handle different use cases within a shared orchestration architecture. The solution includes MCP servers for structured access to external data sources and embedding/vector-search workflows for semantic retrieval.",
      myRole: "Implemented agent workflows with Python, LangChain, and LangGraph, built MCP servers for external data access, integrated embedding workflows for semantic search, and designed reusable agent and tooling components.",
      link: ""
    },
    {
      title: "Financing Portal",
      organization: "Ancud IT",
      period: "Since April 2025",
      techStack: [
        "JavaScript",
        "React",
        "Bootstrap",
        "CSS"
      ],
      description: "Web portal for processing financing applications, communication with banks, document management and handling customer requests.",
      detailedDescription: "Web portal used by advisors to process financing requests, manage documents, and coordinate communication with banking partners.",
      myRole: "Designed and implemented responsive frontend components, form flows, validation logic, and UI interactions with React, Bootstrap, and CSS; integrated features with existing backend APIs.",
      link: ""
    },
    {
      title: "Manshoor",
      organization: "Ibtikar",
      period: "Since August 2024",
      techStack: [
        "Java",
        "Spring Boot",
        "Maven",
        "Docker",
        "PostgreSQL",
        "MinIO",
        "Elasticsearch",
        "OpenAPI",
        "Flutter",
        "Dart",
        "GitLab CI/CD"
      ],
      description: "Mobile application for creating, managing and searching classified ads in various categories.",
      detailedDescription: "Marketplace app for creating and searching listings across categories such as electronics, furniture, and vehicles. Features include media uploads, user profiles, chat, favorites, authentication, and ratings.",
      myRole: "Delivered full-stack functionality across Spring Boot/PostgreSQL backend and Flutter frontend. Implemented API documentation with OpenAPI, image handling via MinIO, search with Elasticsearch, test setup, and CI/CD with GitLab and Docker.",
      link: ""
    },
    {
      title: "Adam",
      organization: "Self-Developed",
      techStack: [
        "React",
        "Next.js",
        "Tailwind",
        "HTML"
      ],
      description: "A website that displays information about a moving company, including services, images, and a contact form.",
      link: "https://adam-umzug.de"
    },
    {
      title: "Time Slot",
      organization: "Ancud IT",
      period: "Since February 2023",
      techStack: [
        "JavaScript",
        "React",
        "Mendix",
        "SASS",
        "Kubernetes"
      ],
      description: "A calendar tool for managing resources and time that makes it possible to efficiently coordinate both schedules and available resources.",
      detailedDescription: "Scheduling and resource-planning tool for coordinating time slots and operational capacities in one interface.",
      myRole: "Implemented frontend components and interaction logic in React, supported data modeling in Mendix, and contributed to deployment and integration in a Kubernetes-based environment.",
      link: ""
    },
    {
      title: "PIM",
      organization: "Ancud IT",
      period: "Since February 2023",
      techStack: [
        "Java",
        "Mendix",
        "RESTful APIs",
        "SASS",
        "Kubernetes"
      ],
      description: "Product Information Management, software solution that supports companies in centrally managing, organizing and disseminating all relevant product information",
      detailedDescription: "Software for central management, organization and distribution of all relevant product information.",
      myRole: "Developed frontend features, REST interfaces, and Mendix data models; implemented business logic and supported styling, CI/CD, and deployment workflows.",
      link: ""
    },
    {
      title: "ETL Jobs",
      organization: "Ancud IT",
      period: "October 2024 - December 2024",
      techStack: [
        "Python",
        "Airflow",
      ],
      description: "Extract, Transform, Load and refers to the process by which data is extracted from various sources, transformed and loaded into a target system ",
      detailedDescription: "ETL workflows for extracting, transforming, and loading Excel-based datasets into a central database using Apache Airflow.",
      myRole: "Built Python/Airflow data pipelines, automated recurring processing jobs, and maintained database integration for reliable ingestion.",
      link: ""
    },
    {
      title: "SOAP-Nextcloud",
      organization: "Ancud IT",
      period: "October 2024 - December 2024",
      techStack: [
        "Python",
        "SOAP",
      ],
      description: "Data is retrieved through a SOAP API, structured in a Word document, converted to PDF, and transferred to Nextcloud within a folder structure.",
      detailedDescription: "Automated retrieval of data via SOAP API, creation of structured Word documents, conversion to PDF, transfer to Nextcloud folders.",
      myRole: "Implemented SOAP integration, automated document generation and PDF conversion, and built reliable file transfer to structured Nextcloud folders.",
      link: ""
    },
    {
      title: "NVE-Scanner",
      organization: "Ancud IT",
      techStack: [
        "Node.js",
        "Express.js",
        "React",
        "Electron"
      ],
      description: "System for automated NVE number capture on a conveyor belt, with ERP data transfer and conveyor control.",
      link: ""
    },

  ],
  certificates: [
    {
      title: "Full Stack Web Developer",
      image: "/images/FullStackWebentwickler.webp"
    },
    {
      title: "Software Developer",
      image: "/images/Softwareentwickler.webp"
    },
    {
      title: "Software Engineer",
      image: "/images/SoftwareIngenieur.webp"
    },
    {
      title: "Git Expert",
      image: "/images/GitExpert.webp"
    },
    {
      title: "Linux Administrator",
      image: "/images/LinuxAdministrator.webp"
    },
    {
      title: "AWS Specialist",
      image: "/images/AWS.webp"
    },
    {
      title: "DevOps Engineer",
      image: "/images/DevOps.webp"
    },
    {
      title: "Mendix Developer",
      image: "/images/Mendix.webp"
    }
  ]
} as const;

export default RESUME_DATA_EN;
