import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA_DE: ResumeData = {
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
      detailedDescription: "Webportal zur Abwicklung von Finanzierungsanträgen, Kommunikation mit Banken, Dokumentenmanagement und Bearbeitung von Kundenanliegen.",
      myRole: "Konzeption und Umsetzung responsiver Frontend-Komponenten; Implementierung von Formularen, Validierung, UI-Logik und Design mit React, Bootstrap und CSS; Integration in bestehendes Backend",
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
      detailedDescription: "Mobile Anwendung zur Erstellung, Verwaltung und Suche von Inseraten in verschiedenen Kategorien (z. B. Elektronik, Möbel, Fahrzeuge). Funktionen umfassen Inserate mit Bildern, Filter- und Suchfunktionen, Favoritenlisten, Nutzerprofile, Chatfunktion zur Kommunikation zwischen Nutzern, Registrierung und Login sowie ein Bewertungssystem.",
      myRole: "Full-Stack-Entwicklung: Backend mit Spring Boot und PostgreSQL, API-Dokumentation mit OpenAPI, Speicherung und Bereitstellung von Bildern über MinIO, Implementierung einer leistungsfähigen Suchfunktion mit Elasticsearch, Einrichtung von Unit- und Integrationstests. Frontend-Entwicklung mit Flutter und Dart, UI-Komponenten, Formularvalidierungen und API-Anbindung. DevOps: Aufbau und Wartung der CI/CD-Pipeline mit GitLab, Containerisierung mit Docker und Deployment in Testumgebungen",
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
      detailedDescription: "Kalenderwerkzeug zur Verwaltung von Ressourcen und Zeit, das eine effiziente Koordination sowohl von Zeitplänen als auch verfügbaren Ressourcen ermöglicht.",
      myRole: "Frontend-Entwicklung, Komponentenlogik in React, Datenmodellierung in Mendix, Business-Logik implementieren, Deployment und Styling, Einbindung in Kubernetes-Umgebung",
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
      myRole: "Frontend-Entwicklung, Schnittstellenentwicklung mit REST, Datenmodellierung in Mendix, Business-Logik implementieren, Styling und CI/CD und Deployment",
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
      myRole: "Entwicklung der ETL-Pipeline mit Python und Airflow, Automatisierung täglicher Datenverarbeitung, Anbindung an Datenbank",
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
      myRole: "Entwicklung der SOAP-Schnittstelle, PDF-Konvertierung, automatisierter Upload in Nextcloud",
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
