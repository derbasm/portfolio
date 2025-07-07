"use client";
import React, { useState } from "react";
import { FaDownload, FaSpinner } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface PDFExportProps {
  language: "de" | "en";
}

const PDFExport = ({ language }: PDFExportProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const texts = {
    de: {
      download: "CV als PDF herunterladen",
      generating: "PDF wird generiert...",
      error: "Fehler beim Erstellen des PDFs"
    },
    en: {
      download: "Download CV as PDF",
      generating: "Generating PDF...",
      error: "Error generating PDF"
    }
  };

  const t = texts[language];

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Hide interactive elements before capture
      const elementsToHide = document.querySelectorAll([
        '[data-pdf-exclude]',
        'button:not([data-pdf-include])',
        '.fixed',
        'nav'
      ].join(','));
      
      elementsToHide.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      // Get the main content
      const element = document.body;
      
      // Configure html2canvas
      const canvas = await html2canvas(element, {
        height: element.scrollHeight,
        width: element.scrollWidth,
        useCORS: true,
        allowTaint: true,
        scale: 1,
        backgroundColor: '#ffffff',
        ignoreElements: (element) => {
          return element.classList.contains('pdf-exclude') ||
                 element.tagName === 'BUTTON' ||
                 element.classList.contains('fixed');
        }
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      // Save the PDF
      const fileName = `Mouhanad_Derbas_CV_${language.toUpperCase()}.pdf`;
      pdf.save(fileName);

      // Restore hidden elements
      elementsToHide.forEach(el => {
        (el as HTMLElement).style.display = '';
      });

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(t.error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        data-pdf-exclude
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#254e7a] to-[#5584b0] hover:from-[#1e3a5f] hover:to-[#4a7195] disabled:from-gray-400 disabled:to-gray-500 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5584b0] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
      >
        {isGenerating ? (
          <>
            <FaSpinner className="animate-spin mr-2" />
            {t.generating}
          </>
        ) : (
          <>
            <FaDownload className="mr-2" />
            {t.download}
          </>
        )}
      </button>
    </div>
  );
};

export default PDFExport;
