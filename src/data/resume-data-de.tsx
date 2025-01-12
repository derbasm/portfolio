import { FaGithub, FaLinkedin } from "react-icons/fa";

export const RESUME_DATA_DE = {
  name: "Mouhanad Derbas",
  initials: "MD",
  location: "Nürnberg, Deutschland",
  locationLink: "https://www.google.com/maps/place/N%C3%BCrnberg/",
  about:
    "Full Stack Developer, der leidenschaftlich hochwertige und zukunftsorientierte Lösungen erstellt.",
  summary:
    "Als Full-Stack-Entwickler bin ich in der Lage, Projekte erfolgreich von der Konzeptionsphase bis zur Markteinführung umzusetzen. " +
    "Meine Stärke liegt in der Planung, Entwicklung und Implementierung innovativer Lösungen, die sowohl technisch als auch strategisch überzeugen." +
    "Ich begeistere mich für das Entdecken und Erlernen neuer Technologien. " +
    "Ich nutze jede Gelegenheit, mein Wissen zu erweitern und moderne Tools und Methoden anzuwenden, um effiziente und zukunftssichere Anwendungen zu entwickeln. " +
    "Mein Ehrgeiz und meine Freude an kontinuierlicher Weiterbildung ermöglichen es mir, stets auf dem neuesten Stand zu bleiben und Projekte mit frischen, kreativen Ansätzen voranzutreiben.",
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
      school: "Technische Hochschule Nürnberg",
      degree: "Bachelor in Informatik und Medien",
      start: "10.2019",
      end: "04.2024",
    },
    {
      school: "Technische Hochschule Nürnberg",
      degree: "Bachelor in Informatik (bis zum zweiten Semester)",
      start: "10.2017",
      end: "09.2019",
    },
    {
      school: "Bildungszentrum Nürnberg",
      degree: "Sprachkurs C1 Niveau",
      start: "01.2017",
      end: "04.2017",
    },
    {
      school: "Bildungszentrum Nürnberg",
      degree: "Sprachkurs B2 Niveau",
      start: "06.2016",
      end: "10.2016",
    },
    {
      school: "Bildungszentrum Nürnberg",
      degree: "Sprachkurs B1 Niveau",
      start: "07.2015",
      end: "04.2016",
    },
    {
      school: "Universität Damaskus",
      degree: "Bachelor in Computertechnik (bis zum vierten Semester)",
      start: "09.2012",
      end: "09.2014",
    },
    {
      school: "Gymnasium Syrien",
      degree: "Abitur",
      start: "09.2000",
      end: "07.2012",
    },
  ],
  work: [
    {
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Softwareentwickler",
      start: "10/2022",
      end: null,
      description:
        "Verantwortlich für die Entwicklung eines PIM-Systems (Product Information Management) unter Verwendung von Technologien wie Mendix, Java und RESTful APIs. " +
        "Führende Rolle bei der Entwicklung eines Zeitfenstermanagement-Systems unter Verwendung von Mendix, JavaScript und React. " +
        "Zusätzlich Unterstützung bei der Implementierung von ETL-Jobs mit Technologien wie Python, Apache Airflow und SQL.",
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
      title: "Zeitfenstermanagement",
      techStack: [
        "Full Stack Entwickler",
        "JavaScript",
        "React",
        "Mendix",
      ],
      description:
        "Das agile Meeting-Co-Pilot-Tool, das bessere Meetings mit weniger Aufwand ermöglicht.",
    },
    {
      title: "Produktinformationsmanagement",
      techStack: [
        "Full Stack Entwickler",
        "Java",
        "Mendix",
        "RESTful APIs"
      ],
      description:
        "Das agile Meeting-Co-Pilot-Tool, das bessere Meetings mit weniger Aufwand ermöglicht.",
    },
    {
      title: "ETL-Jobs",
      techStack: [
        "Full Stack Entwickler",
        "Python",
        "Airflow",
      ],
      description:
        "Das agile Meeting-Co-Pilot-Tool, das bessere Meetings mit weniger Aufwand ermöglicht.",
    },
    {
      title: "Wagenhub",
      techStack: [
        "Full Stack Entwickler",
        "Spring Boot",
        "React",
        "Next.js",
        "Typescript",
        "GitLab CI/CD",
        "Docker",
      ],
      description:
        "Das agile Meeting-Co-Pilot-Tool, das bessere Meetings mit weniger Aufwand ermöglicht.",
    },
  ],
  certificates: [
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
  ],
} as const;

export default RESUME_DATA_DE;
