import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA_EN: ResumeData = {
  header: {
    name: "Mouhanad Derbas",
    location: "Nürnberg, Germany",
    locationLink: "https://www.google.com/maps/place/N%C3%BCrnberg/",
    about:
      "Full Stack Developer passionate about creating high-quality and forward-thinking solutions.",
    summary:
      "As a full-stack developer with the ability to successfully implement projects from the conception phase to market launch. " +
      "My strength lies in planning, developing and implementing innovative solutions that are both technically and strategically convincing." +
      "I am enthusiastic about discovering and learning new technologies. " +
      "I take every opportunity to expand my knowledge and apply modern tools and methods to develop efficient and future-proof applications. " +
      "My determination and enjoyment of continuous further training enable me to stay up to date and drive projects forward with fresh, creative approaches.",
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
      degree: "Bachelor's Degree in Computer Scince and Media (B. Sc.)",
      start: "10/2019",
      end: "04/2024",
    },
    {
      school: "Technical University of Nuremberg",
      degree: "Bachelor's Degree in Computer Scince (until second semester)",
      start: "10/2017",
      end: " 09/2029",
    },
    {
      school: "Bildungszentrum Nuernberg",
      degree: "Language Course C1 Level",
      start: "01/2017",
      end: "04/2017",
    },
    {
      school: "Bildungszentrum Nuernberg",
      degree: "Language Course B2 Level",
      start: "06/2016",
      end: "10/2016",
    },
    {
      school: "Bildungszentrum Nuernberg",
      degree: "Language Course B1 Level",
      start: "07/2015",
      end: "04/2016",
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
        "Voluntary participation in the development of several projects. " +
        "Contributed to backend development using Spring Boot and Java, as well as creating a CI/CD pipeline with GitLab. " +
        "Also involved in development and integration using Docker. " +
        "Assisted in frontend implementation with React and Next.js to create a user-friendly interface."
    },
    {
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Software Develpoer",
      start: "10/2022",
      end: "Present",
      description:
        "Worked on and supported multiple projects as a Fullstack Developer in various areas and technologies such as Mendix, Python, and React, as well as in project management and UI/UX design. " +
        "Led the PIM project and the SOAP-Nextcloud bridge, supported the development of the creation of the Time-Slot tool and the development of ETL jobs."
    },
  ],
  skills: [
    {
      name: "JavaScript",
      level: "6/10",
    },
    {
      name: "Python",
      level: "6/10",
    },
    {
      name: "Java",
      level: "6/10",
    },
    {
      name: "C++",
      level: "4/10",
    },
    {
      name: "Tailwind",
      level: "4/10",
    },
    {
      name: "PHP",
      level: "4/10",
    },
    {
      name: "React",
      level: "8/10",
    },
    {
      name: "CSS",
      level: "8/10",
    },
    {
      name: "HTML",
      level: "8/10",
    },
    {
      name: "Flutter",
      level: "4/10",
    },
    {
      name: "Mendix",
      level: "8/10",
    },
    {
      name: "Node.js",
      level: "6/10",
    },
    {
      name: "Postgresql",
      level: "6/10",
    },
    {
      name: "AWS",
      level: "4/10",
    },
    {
      name: "Azure",
      level: "2/10",
    },
    {
      name: "Docker",
      level: "6/10",
    },
    {
      name: "Jenkins",
      level: "6/10",
    },
    {
      name: "Gitlab",
      level: "6/10",
    },
    {
      name: "Linux",
      level: "6/10",
    },
    {
      name: "OpenAPI",
      level: "6/10",
    },
    {
      name: "Git",
      level: "8/10",
    },
    {
      name: "Scrum",
      level: "10/10",
    },
    {
      name: "Spring",
      level: "6/10",
    },
    {
      name: "Kubernetes",
      level: "6/10",
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
      detailedDescription: "Web portal for processing financing applications, communication with banks, document management and handling customer requests.",
      myRole: "Conception and implementation of responsive frontend components; implementation of forms, validation, UI logic and design with React, Bootstrap and CSS; integration into existing backend",
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
      detailedDescription: "Mobile application for creating, managing and searching classified ads in various categories (e.g. electronics, furniture, vehicles). Features include ads with images, filter and search functions, favorites lists, user profiles, chat function for communication between users, registration and login as well as a rating system.",
      myRole: "Full-stack development: Backend with Spring Boot and PostgreSQL, API documentation with OpenAPI, storage and provision of images via MinIO, implementation of a powerful search function with Elasticsearch, setup of unit and integration tests. Frontend development with Flutter and Dart, UI components, form validations and API integration. DevOps: Building and maintaining CI/CD pipeline with GitLab, containerization with Docker and deployment in test environments",
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
      detailedDescription: "Calendar tool for managing resources and time that enables efficient coordination of both schedules and available resources.",
      myRole: "Frontend development, component logic in React, data modeling in Mendix, implementing business logic, deployment and styling, integration into Kubernetes environment",
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
      myRole: "Frontend development, interface development with REST, data modeling in Mendix, implementing business logic, styling and CI/CD and deployment",
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
      detailedDescription: "Extraction, transformation and loading (ETL) of data from Excel files using Airflow workflows into a central database.",
      myRole: "Development of ETL pipeline with Python and Airflow, automation of daily data processing, database connection",
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
      myRole: "Development of SOAP interface, PDF conversion, automated upload to Nextcloud",
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
