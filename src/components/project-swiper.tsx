'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import type { Project } from '@/types/resume';

type ProjectSwiperProps = {
  projects: Project[];
  language: 'de' | 'en';
};

export default function ProjektSwiper({ projects, language }: ProjectSwiperProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          896: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full px-4 py-6 bg-[#5584b0] rounded-lg shadow-lg h-full min-h-[320px] md:min-h-[350px] flex flex-col cursor-pointer transition-all hover:bg-[#4a7fa0] hover:-translate-y-1 text-[#cbe3ef] border-b-4"
              style={{ borderBottomColor: '#254e7a' }}
              onClick={() => handleProjectClick(project)}
            >
              <div className='border-b border-[#cbe3ef] pb-2 flex justify-between items-center'>
                <h3 className="text-xl font-bold text-[#cbe3ef]">
                  {project.link && !project.detailedDescription ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#cbe3ef]" onClick={(e) => e.stopPropagation()}>
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.organization && <span className="text-sm text-[#f0f6ff]">{project.organization}</span>}
              </div>

              {project.period && (
                <p className="text-sm text-[#cbe3ef] mt-1">{project.period}</p>
              )}

              <p className="mt-2 flex-grow text-[#cbe3ef]">{project.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.techStack.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#254e7a] text-[#cbe3ef] text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="inline-block bg-[#1e3f5f] text-[#cbe3ef] text-xs font-medium px-2.5 py-0.5 rounded">
                      +{project.techStack.length - 6} {language === 'de' ? 'mehr' : 'more'}
                    </span>
                  )}
                </div>
                {(project.link || project.detailedDescription) && (
                  <p className="text-xs text-[#f0f6ff]">
                    {language === 'de' ? 'Klicken für Details' : 'Click for details'}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal für Projektdetails */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#5584b0] text-white p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {selectedProject.organization && (
                      <span className="bg-[#254e7a] px-3 py-1 rounded-full">
                        {selectedProject.organization}
                      </span>
                    )}
                    {selectedProject.period && (
                      <span className="bg-[#254e7a] px-3 py-1 rounded-full">
                        {selectedProject.period}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-[#254e7a] text-white rounded-full shadow hover:bg-[#1e3f5f] transition-colors"
                  aria-label="Schließen"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Beschreibung */}
              <div>
                <h3 className="text-lg font-semibold text-[#254e7a] mb-3">
                  {language === 'de' ? 'Projektbeschreibung' : 'Project overview'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              {/* Meine Rolle */}
              {selectedProject.myRole && (
                <div>
                  <h3 className="text-lg font-semibold text-[#254e7a] mb-3">
                    {language === 'de' ? 'Meine Rolle & Aufgaben' : 'My role & responsibilities'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.myRole}</p>
                </div>
              )}

              {/* Technologien */}
              <div>
                <h3 className="text-lg font-semibold text-[#254e7a] mb-3">
                  {language === 'de' ? 'Verwendete Technologien' : 'Technologies used'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#81c2e6] text-[#254e7a] text-sm font-medium px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {selectedProject.link && (
                <div>
                  <h3 className="text-lg font-semibold text-[#254e7a] mb-3">
                    {language === 'de' ? 'Projekt Link' : 'Project link'}
                  </h3>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#5584b0] text-white rounded-lg hover:bg-[#254e7a] transition-colors"
                  >
                    {language === 'de' ? 'Projekt besuchen' : 'Visit project'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
