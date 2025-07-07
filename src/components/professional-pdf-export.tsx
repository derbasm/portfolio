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

    // Modern Color Palette (Professional Blue Theme)
    const colors = {
      primary: [25, 79, 132] as [number, number, number], // Professional Blue #194f84
      secondary: [52, 87, 118] as [number, number, number], // Darker Blue #345776  
      accent: [72, 151, 190] as [number, number, number], // Light Blue #4897be
      gray: [107, 114, 128] as [number, number, number], // Gray #6b7280
      lightGray: [243, 244, 246] as [number, number, number], // Light Gray #f3f4f6
      text: [31, 41, 55] as [number, number, number], // Dark Gray #1f2937
      white: [255, 255, 255] as [number, number, number]
    };

    // Layout Configuration
    const layout = {
      pageWidth: 210,
      pageHeight: 297,
      margin: 15,
      sidebarWidth: 65,
      mainWidth: 130,
      lineHeight: 4.5,
      sectionSpacing: 8
    };

    let currentY = 0;

    // Helper Functions
    const addSectionHeader = (title: string, y: number, isMainColumn = true) => {
      const x = isMainColumn ? layout.margin + layout.sidebarWidth : layout.margin;
      
      pdf.setFillColor(...colors.primary);
      pdf.rect(x, y - 2, isMainColumn ? layout.mainWidth : layout.sidebarWidth, 8, "F");
      
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.setTextColor(...colors.white);
      pdf.text(title.toUpperCase(), x + 3, y + 3);
      
      return y + 12;
    };

    const addText = (text: string, x: number, y: number, options: {
      fontSize?: number,
      fontStyle?: "normal" | "bold" | "italic",
      color?: [number, number, number],
      maxWidth?: number
    } = {}) => {
      const { fontSize = 9, fontStyle = "normal", color = colors.text, maxWidth = 50 } = options;
      
      pdf.setFont("helvetica", fontStyle);
      pdf.setFontSize(fontSize);
      pdf.setTextColor(...color);
      
      if (maxWidth && text.length > 0) {
        const lines = pdf.splitTextToSize(text, maxWidth);
        pdf.text(lines, x, y);
        return y + (lines.length * layout.lineHeight);
      } else {
        pdf.text(text, x, y);
        return y + layout.lineHeight;
      }
    };

    const addSkillBar = (skillName: string, level: string, x: number, y: number) => {
      // Skill name
      addText(skillName, x, y, { fontSize: 8, color: colors.text });
      
      // Skill bar background
      pdf.setFillColor(...colors.lightGray);
      pdf.rect(x, y + 2, 45, 3, "F");
      
      // Skill level parsing (x/10 format)
      const levelMatch = level.match(/(\d+)\/10/);
      const skillLevel = levelMatch ? parseInt(levelMatch[1]) : 5;
      const barWidth = (skillLevel / 10) * 45;
      
      // Skill bar fill
      pdf.setFillColor(...colors.accent);
      pdf.rect(x, y + 2, barWidth, 3, "F");
      
      return y + 8;
    };

    // PAGE HEADER - Full Width with Professional Design
    pdf.setFillColor(...colors.primary);
    pdf.rect(0, 0, layout.pageWidth, 45, "F");

    // Name
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.setTextColor(...colors.white);
    pdf.text(resumeData.header.name, layout.margin, 20);

    // Contact Info - Elegant Layout
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    const contactY = 30;
    
    pdf.text(`${resumeData.header.contact.email}`, layout.margin, contactY);
    pdf.text(`${resumeData.header.contact.tel}`, layout.margin, contactY + 4);
    pdf.text(`${resumeData.header.location}`, layout.margin + 70, contactY);
    
    if (resumeData.header.contact.social?.[0]?.url) {
      pdf.text(resumeData.header.contact.social[0].url.replace('https://', ''), layout.margin + 70, contactY + 4);
    }

    currentY = 55;

    // LEFT SIDEBAR DESIGN
    pdf.setFillColor(...colors.lightGray);
    pdf.rect(layout.margin, currentY, layout.sidebarWidth, layout.pageHeight - currentY - layout.margin, "F");

    let sidebarY = currentY + 10;

    // SKILLS SECTION (Sidebar)
    const skillsTitle = language === "de" ? "Fähigkeiten" : "Skills";
    sidebarY = addSectionHeader(skillsTitle, sidebarY, false);
    
    resumeData.skills.forEach((skill) => {
      if (sidebarY > 250) {
        pdf.addPage();
        // Recreate sidebar on new page
        pdf.setFillColor(...colors.lightGray);
        pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
        sidebarY = layout.margin + 10;
      }
      sidebarY = addSkillBar(skill.name, skill.level, layout.margin + 3, sidebarY);
    });

    // EDUCATION SECTION (Sidebar)
    sidebarY += 10;
    const educationTitle = language === "de" ? "Ausbildung" : "Education";
    sidebarY = addSectionHeader(educationTitle, sidebarY, false);

    resumeData.education.forEach((edu) => {
      if (sidebarY > 250) {
        pdf.addPage();
        pdf.setFillColor(...colors.lightGray);
        pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
        sidebarY = layout.margin + 10;
      }
      
      sidebarY = addText(`${edu.start} - ${edu.end}`, layout.margin + 3, sidebarY, { 
        fontSize: 8, 
        fontStyle: "bold", 
        color: colors.primary,
        maxWidth: layout.sidebarWidth - 6 
      });
      
      sidebarY = addText(edu.degree, layout.margin + 3, sidebarY, { 
        fontSize: 8, 
        fontStyle: "bold",
        maxWidth: layout.sidebarWidth - 6 
      });
      
      sidebarY = addText(edu.school, layout.margin + 3, sidebarY, { 
        fontSize: 7,
        color: colors.gray,
        maxWidth: layout.sidebarWidth - 6 
      });
      
      sidebarY += 3;
    });

    // CERTIFICATES SECTION (Sidebar)
    if (resumeData.certificates.length > 0) {
      sidebarY += 5;
      const certTitle = language === "de" ? "Zertifikate" : "Certificates";
      sidebarY = addSectionHeader(certTitle, sidebarY, false);

      resumeData.certificates.forEach((cert) => {
        if (sidebarY > 270) {
          pdf.addPage();
          pdf.setFillColor(...colors.lightGray);
          pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
          sidebarY = layout.margin + 10;
        }
        
        sidebarY = addText(cert.title, layout.margin + 3, sidebarY, { 
          fontSize: 8,
          maxWidth: layout.sidebarWidth - 6 
        });
        sidebarY += 2;
      });
    }

    // MAIN CONTENT AREA
    let mainY = currentY + 10;
    const mainX = layout.margin + layout.sidebarWidth + 5;

    // PROFESSIONAL SUMMARY
    const summaryTitle = language === "de" ? "Profil" : "Professional Summary";
    mainY = addSectionHeader(summaryTitle, mainY, true);
    
    mainY = addText(resumeData.header.about, mainX + 3, mainY, { 
      fontSize: 9,
      maxWidth: layout.mainWidth - 6,
      color: colors.text 
    });

    mainY += layout.sectionSpacing;

    // WORK EXPERIENCE
    const workTitle = language === "de" ? "Berufserfahrung" : "Professional Experience";
    mainY = addSectionHeader(workTitle, mainY, true);

    resumeData.work.forEach((job) => {
      if (mainY > 250) {
        pdf.addPage();
        // Recreate sidebar on new page
        pdf.setFillColor(...colors.lightGray);
        pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
        mainY = layout.margin + 10;
      }

      // Job Title and Company
      mainY = addText(job.title, mainX + 3, mainY, { 
        fontSize: 11, 
        fontStyle: "bold",
        color: colors.primary,
        maxWidth: layout.mainWidth - 6 
      });
      
      mainY = addText(`${job.company} | ${job.start} - ${job.end}`, mainX + 3, mainY, { 
        fontSize: 9, 
        fontStyle: "italic",
        color: colors.secondary,
        maxWidth: layout.mainWidth - 6 
      });

      // Job Description
      mainY = addText(job.description, mainX + 3, mainY + 2, { 
        fontSize: 9,
        maxWidth: layout.mainWidth - 6 
      });

      mainY += 5;
    });

    // PROJECTS SECTION
    if (resumeData.projects.length > 0) {
      if (mainY > 220) {
        pdf.addPage();
        pdf.setFillColor(...colors.lightGray);
        pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
        mainY = layout.margin + 10;
      }

      const projectsTitle = language === "de" ? "Projekte" : "Projects";
      mainY = addSectionHeader(projectsTitle, mainY, true);

      resumeData.projects.forEach((project) => {
        if (mainY > 250) {
          pdf.addPage();
          pdf.setFillColor(...colors.lightGray);
          pdf.rect(layout.margin, layout.margin, layout.sidebarWidth, layout.pageHeight - 2 * layout.margin, "F");
          mainY = layout.margin + 10;
        }

        mainY = addText(project.title, mainX + 3, mainY, { 
          fontSize: 10, 
          fontStyle: "bold",
          color: colors.primary,
          maxWidth: layout.mainWidth - 6 
        });
        
        if (project.organization) {
          mainY = addText(project.organization, mainX + 3, mainY, { 
            fontSize: 9, 
            fontStyle: "italic",
            color: colors.secondary,
            maxWidth: layout.mainWidth - 6 
          });
        }

        mainY = addText(project.description, mainX + 3, mainY, { 
          fontSize: 9,
          maxWidth: layout.mainWidth - 6 
        });

        if (project.techStack.length > 0) {
          const techStackText = `${language === "de" ? "Technologien" : "Technologies"}: ${project.techStack.join(", ")}`;
          mainY = addText(techStackText, mainX + 3, mainY, { 
            fontSize: 8,
            color: colors.gray,
            maxWidth: layout.mainWidth - 6 
          });
        }

        mainY += 5;
      });
    }

    // Footer with professional touch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pageCount = (pdf as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(...colors.gray);
      pdf.text(`${resumeData.header.name} - ${language === "de" ? "Seite" : "Page"} ${i}/${pageCount}`, 
        layout.pageWidth - layout.margin - 30, layout.pageHeight - 10);
    }

    // Save the PDF
    const fileName = `${resumeData.header.name.replace(/\s+/g, "_")}_CV_${language.toUpperCase()}.pdf`;
    pdf.save(fileName);
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      <span>{language === "de" ? "Professionellen CV herunterladen" : "Download Professional CV"}</span>
    </button>
  );
};

export default ProfessionalPDFExport;
