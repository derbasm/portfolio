import { FaGithub, FaLinkedin } from "react-icons/fa";

export const RESUME_DATA_EN = {
  name: "Mouhanad Derbas",
  initials: "MD",
  location: "Nürnberg, Germany",
  locationLink: "https://www.google.com/maps/place/N%C3%BCrnberg/",
  about:
    "Full Stack Developer passionate about creating high-quality and forward-thinking solutions.",
  summary:
    "As a full-stack developer with the ability to successfully implement projects from the conception phase to market launch. " +
    "My strength lies in planning, developing and implementing innovative solutions that are both technically and strategically convincing."+
    "I am enthusiastic about discovering and learning new technologies. "+
    "I take every opportunity to expand my knowledge and apply modern tools and methods to develop efficient and future-proof applications. "+
    "My determination and enjoyment of continuous further training enable me to stay up to date and drive projects forward with fresh, creative approaches.",
  avatarUrl: "https://avatars.githubusercontent.com/u/187202978?v=4",
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
  },
  education: [
    {
      school: "Technical University of Nuremberg",
      degree: "Bachelor's Degree in Computer Scince and Media",
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
      degree: "Bachelor's Degree Computer Technology and Automation (until fourth semester)",
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
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Software Develpoer",
      start: "10/2022",
      end: null,
      description:
        "Responsible for the development of a PIM (Product Information Management) system using technologies such as Mendix, Java and RESTful APIs. " +
        "Leading role in the development of a time slot management system using Mendix, JavaScript and React. " + 
        "In addition, support in the implementation of ETL jobs using technologies such as Python, Apache Airflow and SQL.",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      level: "3/5",
    },
    {
      name: "Python",
      level: "3/5",
    },
    {
      name: "Java",
      level: "3/5",
    },
    {
      name: "PHP",
      level: "2/5",
    },
    {
      name: "React",
      level: "3/5",
    },
    {
      name: "CSS",
      level: "4/5",
    },
    {
      name: "HTML",
      level: "4/5",
    },
    {
      name: "Node.js",
      level: "2/5",
    },
    {
      name: "Postgresql",
      level: "3/5",
    },
    {
      name: "AWS",
      level: "2/5",
    },
    {
      name: "Azure",
      level: "1/5",
    },
    {
      name: "Docker",
      level: "3/5",
    },
    {
      name: "Jenkins",
      level: "3/5",
    },
    {
      name: "Gitlab",
      level: "3/5",
    },
    {
      name: "Debian",
      level: "3/5",
    },
    {
      name: "Git",
      level: "4/5",
    },
    {
      name: "Scrum",
      level: "5/5",
    },
    {
      name: "Spring Boot",
      level: "3/5",
    },
    {
      name: "Kubernetes",
      level: "3/5",
    },
  ],
  projects: [
    {
      title: "Time Slot Mnagement",
      techStack: [
        "JavaScript",
        "React",
        "Mendix",
      ],
      description:
        "A calendar tool for managing resources and time that makes it possible to efficiently coordinate both schedules and available resources.",
    },
    {
      title: "Product Information Management",
      techStack: [
        "Java",
        "Mendix",
        "RESTful APIs"
      ],
      description:
        "Software solution that supports companies in centrally managing, organizing and disseminating all relevant product information",
    },
    {
      title: "ETL Jobs",
      techStack: [
        "Python",
        "Airflow",
      ],
      description:
        "Extract, Transform, Load and refers to the process by which data is extracted from various sources, transformed and loaded into a target system ",
    },
    {
      title: "Wagenhub",
      techStack: [
        "Spring Boot",
        "React",
        "Next.js",
        "GitLab CI/CD",
        "Docker",
      ],
      description:
        "Online store specializing in the sale of cars. "+
        "The platform allows users to browse, compare and directly purchase a wide range of vehicles. ",
    },
  ],
  certificates : [
    {
      title: "AWS",
      image: "/images/AWS.jpg",
    },
    {
      title: "DevOps",
      image: "/images/DevOps.jpg",
    },
    {
      title: "Mendix",
      image: "/images/Mendix.jpg",
    },

  ]
} as const;

export default RESUME_DATA_EN;
