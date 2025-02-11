import { FaGithub, FaLinkedin } from "react-icons/fa";

export const RESUME_DATA_DE = {
  header: {
    name: "Mouhanad Derbas",
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
  },
  education: [
    {
      school: "LinkedIn Learning",
      degree: "Derzeitige Teilnahme an Online-Kursen in verschiedenen Fachbereichen",
      start: "03/2024",
      end: "Aktuell"
    },
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
      degree: "Sprachkurs C1-Niveau",
      start: "01.2017",
      end: "04.2017",
    },
    {
      school: "Bildungszentrum Nürnberg",
      degree: "Sprachkurs B2-Niveau",
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
      company: "Ibtikar",
      link: "",
      title: "Software Developer",
      start: "11/2024",
      end: "Aktuell",
      description:
        "Freiwillige Teilnahme an der Entwicklung mehrere Online-Plattformen. " +
        "Unterstützung bei der Backend-Entwicklung mit Spring Boot und Java sowie der Erstellung einer CI/CD-Pipeline mit GitLab. " +
        "Zusätzlich Entwicklung und Integration mit Docker. " +
        "Mitarbeit an der Frontend-Implementierung mit React und Next.js zur Erstellung einer benutzerfreundlichen Benutzeroberfläche."
    },
    {
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Softwareentwickler",
      start: "10/2022",
      end: "Aktuell",
      description:
        "Arbeiten und Unterstützung an mehreren Projekten als Fullstack-Entwickler in verschiedenen Bereichen und Technologien wie Mendix, Python, React sowie auch im Projektmanagement und UI/UX-Design." +
        "Führende Rolle im Projekte PIM, SOAP-Nextcloud-Bridge, Unterstützung bei der Entwicklung der Erstellung des Time-Slot-Tools und der Entwicklung von ETL-Jobs."
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
      name: "C++",
      level: "2/5",
    },
    {
      name: "Tailwind",
      level: "2/5",
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
      name: "Flutter",
      level: "1/5",
    },
    {
      name: "Mendix",
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
      name: "Linux",
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
      title: "Adam",
      organization : "Selbstentwickelt",
      techStack: [
        "React",
        "Next.js",
        "Tailwind",
        "HTML"
      ],
      description: "Eine Webseite, die Informationen über eine Umzugsfirma anzeigt, einschließlich Dienstleistungen, Bilder und Kontaktformular.",
      link: "https://adam-umzug.de"
    },
    {
      title: "Wagenhub",
      organization : "Ibtikar",
      techStack: [
        "Spring Boot",
        "React",
        "Next.js",
        "GitLab CI/CD",
        "Docker",
      ],
      description:
        "Online-Shop spezialisiert auf den Verkauf von Fahrzeugen. " +
        "Die Plattform ermöglicht es Nutzern, eine Vielzahl von Fahrzeugen zu durchsuchen, zu vergleichen und direkt zu kaufen.",
      link: ""
    },
    {
      title: "AndakGo",
      organization : "Ibtikar",
      techStack: [
        "Spring Boot",
        "Flutter",
        "GitLab CI/CD",
        "Docker",
      ],
      description:
        "AndakGo ist eine Plattform, auf der kleine Unternehmen ihre Produkte bewerben können.  " +
        "Nutzer suchen lokal, bestellen, und ein Drittanbieter liefert.",
      link: ""
    },
    {
      title: "Zeitslot",
      organization : "Ancud IT",
      techStack: [
        "JavaScript",
        "React",
        "Mendix",
        "SASS",
        "Kubernetes"
      ],
      description:
        "Ein Kalenderwerkzeug zur Verwaltung von Ressourcen und Zeit, das eine effiziente Koordination sowohl von Zeitplänen als auch verfügbaren Ressourcen ermöglicht.",
      link: ""
    },
    {
      title: "PIM",
      organization : "Ancud IT",
      techStack: [
        "Java",
        "Mendix",
        "RESTful APIs",
        "SASS",
        "Kubernetes"
      ],
      description:
        "Produktinformationsmanagement, eine Softwarelösung, die Unternehmen dabei unterstützt, zentrale Verwaltung, Organisation und Verbreitung aller relevanten Produktinformationen zu übernehmen.",
      link: ""
    },
    {
      title: "ETL-Jobs",
      organization : "Ancud IT",
      techStack: [
        "Python",
        "Airflow",
      ],
      description:
        "Extraktion, Transformation und Laden bezieht sich auf den Prozess, bei dem Daten aus verschiedenen Quellen extrahiert, transformiert und in ein Zielsystem geladen werden.",
      link: ""
    },
    {
      title: "SOAP-Nextcloud",
      organization : "Ancud IT",
      techStack: [
        "Python",
        "SOAP",
      ],
      description:
        "Daten werden über eine SOAP-API abgerufen, in einer Word-Datei strukturiert aufbereitet, in ein PDF umgewandelt und in Nextcloud in eine Ordnerstruktur übertragen.",
      link: ""
    },

  ],
  certificates: [
    {
      title: "Full Stack Webentwickler",
      image: "/images/FullStackWebentwickler.webp"
    },
    {
      title: "Softwareentwickler",
      image: "/images/Softwareentwickler.webp"
    },
    {
      title: "Software Ingenieur",
      image: "/images/SoftwareIngenieur.webp"
    },
    {
      title: "Git Expert",
      image: "/images/GitExpert.webp"
    },
    {
      title: "Linux-Administrator",
      image: "/images/LinuxAdministrator.webp"
    },
    {
      title: "AWS-Spezialist",
      image: "/images/AWS.webp"
    },
    {
      title: "DevOps-Ingenieur",
      image: "/images/DevOps.webp"
    },
    {
      title: "Mendix-Entwickler",
      image: "/images/Mendix.webp"
    }
  ],
} as const;

export default RESUME_DATA_DE;
