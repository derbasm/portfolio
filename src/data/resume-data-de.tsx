import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA_DE: ResumeData = {
  header: {
    name: "Mouhanad Derbas",
    location: "Nürnberg, Deutschland",
    locationLink: "https://www.google.com/maps/place/N%C3%BCrnberg/",
    about:
      "Full Stack Developer mit Fokus auf robuste Webanwendungen von der Idee bis zum produktiven Betrieb.",
    summary:
      "Ich realisiere Full-Stack-Lösungen mit React/Next.js und Java/Spring Boot, von der Anforderung bis zum Deployment. " +
      "Dabei lege ich Wert auf saubere Architektur, wartbaren Code und eine klare Nutzerführung. " +
      "Ich übernehme Verantwortung für Features Ende-zu-Ende und arbeite eng mit Produkt, Design und Entwicklung zusammen.",
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
      degree: "Bachelor in Informatik und Medien (B. Sc.)",
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
        "Mitarbeit an mehreren Produkt-Features im Backend und Frontend. " +
        "Implementierung von Services mit Spring Boot und Java, Unterstützung von CI/CD-Prozessen mit GitLab sowie Integration containerbasierter Auslieferung mit Docker. " +
        "Weiterentwicklung nutzerorientierter Funktionen mit React und Next.js."
    },
    {
      company: "Ancud IT Beratung",
      link: "https://www.ancud.de/",
      title: "Softwareentwickler",
      start: "10/2022",
      end: "Aktuell",
      description:
        "Full-Stack-Umsetzung in mehreren Kundenprojekten mit React, Mendix und Python. " +
        "Verantwortung für zentrale Teile von PIM und der SOAP-Nextcloud-Bridge sowie Beiträge zu Time-Slot und ETL-Pipelines. " +
        "Zusätzlich Mitarbeit an UI/UX-Umsetzung und Projektkoordination."
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
      name: "Deutsch",
      level: "C1",
      proficiency: "Fließend",
      description: "Sehr gute Kenntnisse in Wort und Schrift, beruflich tätig seit 2022"
    },
    {
      name: "Englisch", 
      level: "B2",
      proficiency: "Konversationsfähig",
      description: "Gute Kenntnisse für internationale Projekte und technische Dokumentation"
    },
    {
      name: "Arabisch",
      level: "C2", 
      proficiency: "Muttersprache",
      description: "Verhandlungssicher, Muttersprache"
    }
  ],
  projects: [
    {
      title: "Multi-Agent-System",
      organization: "Ancud IT",
      period: "Seit Januar 2025",
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
      description: "Entwicklung eines Multi-Agent-Systems zur Umsetzung mehrerer Anwendungsfälle mit koordinierter Aufgabenverteilung, Datenanbindung über MCP-Server und semantischer Verarbeitung über Embeddings.",
      detailedDescription: "Konzeption und Entwicklung eines Multi-Agent-Systems, in dem mehrere spezialisierte Agenten zusammenarbeiten, Aufgaben planen, Informationen austauschen und verschiedene Use Cases innerhalb einer gemeinsamen Architektur bearbeiten. Dazu gehören MCP-Server zur strukturierten Anbindung externer Datenquellen sowie Embedding- und Vektor-Suchprozesse für semantischen Datenzugriff.",
      myRole: "Entwicklung der Agentenlogik mit Python, LangChain und LangGraph, Aufbau von MCP-Servern zum Abruf externer Daten, Integration von Embedding-Workflows für semantische Suche sowie Orchestrierung wiederverwendbarer Agenten- und Tooling-Komponenten.",
      link: ""
    },
    {
      title: "Finanzierungsportal",
      organization: "Ancud IT",
      period: "Seit April 2025",
      techStack: [
        "JavaScript",
        "React",
        "Bootstrap",
        "CSS"
      ],
      description: "Webportal zur Abwicklung von Finanzierungsanträgen, Kommunikation mit Banken, Dokumentenmanagement und Bearbeitung von Kundenanliegen.",
      detailedDescription: "Webportal für Berater zur Bearbeitung von Finanzierungsanträgen, Dokumentenmanagement und strukturierter Kommunikation mit Banken.",
      myRole: "Konzeption und Umsetzung responsiver Frontend-Komponenten, Formularstrecken und Validierungslogik mit React, Bootstrap und CSS sowie Integration in bestehende Backend-APIs.",
      link: ""
    },
    {
      title: "Manshoor",
      organization: "Ibtikar",
      period: "Seit August 2024",
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
      description: "Mobile Anwendung zur Erstellung, Verwaltung und Suche von Inseraten in verschiedenen Kategorien.",
      detailedDescription: "Marktplatz-App zur Erstellung und Suche von Inseraten in Kategorien wie Elektronik, Möbel und Fahrzeuge. Enthält Medien-Uploads, Nutzerprofile, Chat, Favoriten, Authentifizierung und Bewertungssystem.",
      myRole: "Umsetzung von Full-Stack-Funktionen im Spring-Boot/PostgreSQL-Backend und Flutter-Frontend. API-Dokumentation mit OpenAPI, Bildverarbeitung über MinIO, Suchfunktionen mit Elasticsearch, Testaufbau sowie CI/CD mit GitLab und Docker.",
      link: ""
    },
    {
      title: "Adam",
      organization: "Selbstentwickelt",
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
      title: "Zeitslot",
      organization: "Ancud IT",
      period: "Seit Februar 2023",
      techStack: [
        "JavaScript",
        "React",
        "Mendix",
        "SASS",
        "Kubernetes"
      ],
      description: "Ein Kalenderwerkzeug zur Verwaltung von Ressourcen und Zeit, das eine effiziente Koordination sowohl von Zeitplänen als auch verfügbaren Ressourcen ermöglicht.",
      detailedDescription: "Kalender- und Ressourcenplanungstool zur zentralen Koordination von Zeitfenstern und verfügbaren Kapazitäten.",
      myRole: "Frontend-Entwicklung und Interaktionslogik in React, Unterstützung bei Datenmodellierung in Mendix sowie Beiträge zu Deployment, Styling und Kubernetes-Integration.",
      link: ""
    },
    {
      title: "PIM",
      organization: "Ancud IT",
      period: "Seit Februar 2023",
      techStack: [
        "Java",
        "Mendix",
        "RESTful APIs",
        "SASS",
        "Kubernetes"
      ],
      description: "Produktinformationsmanagement, eine Softwarelösung, die Unternehmen dabei unterstützt, zentrale Verwaltung, Organisation und Verbreitung aller relevanten Produktinformationen zu übernehmen.",
      detailedDescription: "Software zur zentralen Verwaltung, Organisation und Verbreitung aller relevanten Produktinformationen.",
      myRole: "Entwicklung von Frontend-Funktionen, REST-Schnittstellen und Mendix-Datenmodellen; Umsetzung von Business-Logik sowie Unterstützung bei Styling, CI/CD und Deployment.",
      link: ""
    },
    {
      title: "ETL-Jobs",
      organization: "Ancud IT",
      period: "Oktober 2024 - Dezember 2024",
      techStack: [
        "Python",
        "Airflow",
      ],
      description: "Extraktion, Transformation und Laden bezieht sich auf den Prozess, bei dem Daten aus verschiedenen Quellen extrahiert, transformiert und in ein Zielsystem geladen werden.",
      detailedDescription: "Extraktion, Transformation und Laden (ETL) von Daten aus Excel-Dateien mittels Airflow-Workflows in eine zentrale Datenbank.",
      myRole: "Entwicklung von Python/Airflow-Pipelines, Automatisierung wiederkehrender Datenverarbeitung und stabile Anbindung an die Zieldatenbank.",
      link: ""
    },
    {
      title: "SOAP-Nextcloud",
      organization: "Ancud IT",
      period: "Oktober 2024 - Dezember 2024",
      techStack: [
        "Python",
        "SOAP",
      ],
      description: "Daten werden über eine SOAP-API abgerufen, in einer Word-Datei strukturiert aufbereitet, in ein PDF umgewandelt und in Nextcloud in eine Ordnerstruktur übertragen.",
      detailedDescription: "Automatisierter Abruf von Daten via SOAP-API, Erstellung strukturierter Word-Dokumente, Konvertierung in PDF, Übertragung in Nextcloud-Ordner.",
      myRole: "Implementierung der SOAP-Schnittstelle, automatisierte Dokumentenerzeugung mit PDF-Konvertierung und zuverlässiger Upload in strukturierte Nextcloud-Ordner.",
      link: ""
    }, {
      title: "NVE-Scanner",
      organization: "Ancud IT",
      techStack: [
        "Node.js",
        "Express.js",
        "React",
        "Electron"
      ],
      description: "System zur automatischen Erfassung von NVE-Nummern auf einem Förderband mit Datenübertragung an ein ERP-System und Steuerung der Anlage.",
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
