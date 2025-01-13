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
    avatar: "/Avatar.jpg",
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
      company: "Ibtikar (Virtuelle Gruppe)",
      link: "",
      title: "Software Developer",
      start: "11/2024",
      end: "Aktuell",
      description: 
        "Freiwillige Teilnahme an der Entwicklung einer Online-Plattform für den Verkauf von Autos namens Wagenhub. " +
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
      title: "Adam-Umzüge",
      techStack: [
        "React",
        "Next.js",
        "Tailwind"
      ],
      description: "Eine Webseite, die Informationen über eine Umzugsfirma anzeigt, einschließlich Dienstleistungen, Bilder und Kontaktformular.",
      link: "https://adam-umzug.de"
    },
    {
      title: "Zeitslot-Management",
      techStack: [
        "JavaScript",
        "React",
        "Mendix",
      ],
      description:
        "Ein Kalenderwerkzeug zur Verwaltung von Ressourcen und Zeit, das eine effiziente Koordination sowohl von Zeitplänen als auch verfügbaren Ressourcen ermöglicht.",
      link:""
    },
    {
      title: "PIM",
      techStack: [
        "Java",
        "Mendix",
        "RESTful APIs"
      ],
      description:
        "Produktinformationsmanagement, eine Softwarelösung, die Unternehmen dabei unterstützt, zentrale Verwaltung, Organisation und Verbreitung aller relevanten Produktinformationen zu übernehmen.",
      link:""
    },
    {
      title: "ETL-Jobs",
      techStack: [
        "Python",
        "Airflow",
      ],
      description:
        "Extraktion, Transformation und Laden bezieht sich auf den Prozess, bei dem Daten aus verschiedenen Quellen extrahiert, transformiert und in ein Zielsystem geladen werden.",
      link:""
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
        "Online-Shop spezialisiert auf den Verkauf von Fahrzeugen. "+
        "Die Plattform ermöglicht es Nutzern, eine Vielzahl von Fahrzeugen zu durchsuchen, zu vergleichen und direkt zu kaufen.",
      link:""
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
