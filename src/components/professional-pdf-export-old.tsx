"use client";
import React from "react";
import jsPDF from "jspdf";

interface ResumeData {
  header: {
    name: string;
    location: string;
    about: string;
    summary: string;
    contact: {
      email: string;
      tel: string;
      social?: ReadonlyArray<{
        name: string;
        url: string;
        icon?: unknown;
      }>;
    };
  };
  education: ReadonlyArray<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  work: ReadonlyArray<{
    company: string;
    title: string;
    start: string;
    end: string;
    description: string;
  }>;
  skills: ReadonlyArray<{
    name: string;
    level: string;
  }>;
  projects: ReadonlyArray<{
    title: string;
    organization: string;
    description: string;
    techStack: readonly string[];
  }>;
  certificates: ReadonlyArray<{
    title: string;
    image: string;
  }>;
}

interface ProfessionalPDFExportProps {
  resumeData: ResumeData;
  language: "de" | "en";
}

const ProfessionalPDFExport = ({ resumeData, language }: ProfessionalPDFExportProps) => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Farben definieren
    const primaryColor: [number, number, number] = [37, 78, 122]; // #254e7a
    const margin = 20;
    let yPosition = 20;

    // Header-Bereich mit Hintergrund
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, 210, 50, "F");
    
    // Name
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.setTextColor(255, 255, 255);
    pdf.text(resumeData.header.name, margin, 25);
    
    // Kontaktinformationen
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    const contactY = 35;
    pdf.text(`📧 ${resumeData.header.contact.email}`, margin, contactY);
    pdf.text(`📱 ${resumeData.header.contact.tel}`, margin + 80, contactY);
    pdf.text(`📍 ${resumeData.header.location}`, margin, contactY + 5);
    
    // Social Links
    if (resumeData.header.contact.social && resumeData.header.contact.social.length > 0) {
      pdf.text(`🔗 ${resumeData.header.contact.social[0].url}`, margin + 80, contactY + 5);
    }

    yPosition = 65;

    // About/Summary
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    const aboutTitle = language === "de" ? "Über mich" : "About me";
    pdf.text(aboutTitle, margin, yPosition);
    yPosition += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    const aboutText = resumeData.header.about;
    const aboutLines = pdf.splitTextToSize(aboutText, 170);
    pdf.text(aboutLines, margin, yPosition);
    yPosition += aboutLines.length * 4 + 10;

    // Berufserfahrung
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    const workTitle = language === "de" ? "Berufserfahrung" : "Work Experience";
    pdf.text(workTitle, margin, yPosition);
    yPosition += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);

    resumeData.work.forEach((job) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }

      // Firmenname und Zeitraum
      pdf.setFont("helvetica", "bold");
      pdf.text(`${job.company} | ${job.start} - ${job.end}`, margin, yPosition);
      yPosition += 5;

      // Position
      pdf.setFont("helvetica", "italic");
      pdf.text(job.title, margin, yPosition);
      yPosition += 5;

      // Beschreibung
      pdf.setFont("helvetica", "normal");
      const descLines = pdf.splitTextToSize(job.description, 170);
      pdf.text(descLines, margin, yPosition);
      yPosition += descLines.length * 4 + 8;
    });

    // Neue Seite für Ausbildung
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 20;
    }

    // Ausbildung
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    const eduTitle = language === "de" ? "Ausbildung" : "Education";
    pdf.text(eduTitle, margin, yPosition);
    yPosition += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);

    resumeData.education.slice(0, 4).forEach((edu) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFont("helvetica", "bold");
      pdf.text(`${edu.school} | ${edu.start} - ${edu.end}`, margin, yPosition);
      yPosition += 5;

      pdf.setFont("helvetica", "normal");
      pdf.text(edu.degree, margin, yPosition);
      yPosition += 8;
    });

    // Skills
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    const skillsTitle = language === "de" ? "Fähigkeiten" : "Skills";
    pdf.text(skillsTitle, margin, yPosition);
    yPosition += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);

    // Skills in Kategorien gruppieren
    const programmingSkills = resumeData.skills.filter((skill) => 
      ["JavaScript", "Python", "Java", "C++", "PHP", "React", "Node.js", "Spring"].includes(skill.name)
    );
    
    const toolsSkills = resumeData.skills.filter((skill) => 
      ["Docker", "Kubernetes", "Jenkins", "Git", "Gitlab", "AWS", "Azure"].includes(skill.name)
    );
    
    const otherSkills = resumeData.skills.filter((skill) => 
      !["JavaScript", "Python", "Java", "C++", "PHP", "React", "Node.js", "Spring", 
        "Docker", "Kubernetes", "Jenkins", "Git", "Gitlab", "AWS", "Azure"].includes(skill.name)
    );

    // Programmiersprachen
    if (programmingSkills.length > 0) {
      pdf.setFont("helvetica", "bold");
      const progTitle = language === "de" ? "Programmierung:" : "Programming:";
      pdf.text(progTitle, margin, yPosition);
      yPosition += 5;
      
      pdf.setFont("helvetica", "normal");
      const progSkillsText = programmingSkills.map((skill) => 
        `${skill.name} (${skill.level})`
      ).join(", ");
      const progLines = pdf.splitTextToSize(progSkillsText, 170);
      pdf.text(progLines, margin, yPosition);
      yPosition += progLines.length * 4 + 5;
    }

    // Tools & Technologien
    if (toolsSkills.length > 0) {
      pdf.setFont("helvetica", "bold");
      const toolsTitle = language === "de" ? "Tools & Technologien:" : "Tools & Technologies:";
      pdf.text(toolsTitle, margin, yPosition);
      yPosition += 5;
      
      pdf.setFont("helvetica", "normal");
      const toolsSkillsText = toolsSkills.map((skill) => 
        `${skill.name} (${skill.level})`
      ).join(", ");
      const toolsLines = pdf.splitTextToSize(toolsSkillsText, 170);
      pdf.text(toolsLines, margin, yPosition);
      yPosition += toolsLines.length * 4 + 5;
    }

    // Weitere Skills
    if (otherSkills.length > 0) {
      pdf.setFont("helvetica", "bold");
      const otherTitle = language === "de" ? "Weitere Fähigkeiten:" : "Other Skills:";
      pdf.text(otherTitle, margin, yPosition);
      yPosition += 5;
      
      pdf.setFont("helvetica", "normal");
      const otherSkillsText = otherSkills.map((skill) => 
        `${skill.name} (${skill.level})`
      ).join(", ");
      const otherLines = pdf.splitTextToSize(otherSkillsText, 170);
      pdf.text(otherLines, margin, yPosition);
      yPosition += otherLines.length * 4 + 10;
    }

    // Projekte (falls Platz vorhanden)
    if (yPosition < 230 && resumeData.projects && resumeData.projects.length > 0) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(...primaryColor);
      const projectsTitle = language === "de" ? "Projekte" : "Projects";
      pdf.text(projectsTitle, margin, yPosition);
      yPosition += 8;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);

      resumeData.projects.slice(0, 2).forEach((project) => {
        if (yPosition > 250) return;

        pdf.setFont("helvetica", "bold");
        pdf.text(`${project.title} (${project.organization})`, margin, yPosition);
        yPosition += 5;

        pdf.setFont("helvetica", "normal");
        const projectDesc = pdf.splitTextToSize(project.description, 170);
        pdf.text(projectDesc, margin, yPosition);
        yPosition += projectDesc.length * 4;

        if (project.techStack && project.techStack.length > 0) {
          const techText = `Tech: ${project.techStack.join(", ")}`;
          pdf.setFont("helvetica", "italic");
          pdf.text(techText, margin, yPosition);
          yPosition += 8;
        }
      });
    }

    // PDF speichern
    const fileName = `${resumeData.header.name.replace(/\s+/g, "_")}_CV_${language.toUpperCase()}.pdf`;
    pdf.save(fileName);
  };

  const buttonText = language === "de" ? "CV als PDF herunterladen" : "Download CV as PDF";

  return (
    <button
      onClick={generatePDF}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#254e7a] to-[#5584b0] hover:from-[#1e3a5f] hover:to-[#4a7399] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {buttonText}
    </button>
  );
};

export default ProfessionalPDFExport;
