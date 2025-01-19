'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export default function ProjektSwiper({ projects }: { projects: Project[] }) {
  // Funktion zur Bestimmung der maximalen Höhe
  const getMaxHeight = (projects: Project[]) => {
    const maxTitleLength = Math.max(...projects.map(project => project.title.length));
    const maxDescriptionLength = Math.max(...projects.map(project => project.description.length));
    const maxTechStackLength = Math.max(...projects.flatMap(project => project.techStack).map(tech => tech.length));
    return maxTitleLength + maxDescriptionLength + maxTechStackLength + 100;
  };

  const maxHeight = projects.length > 0 ? getMaxHeight(projects) : 0;

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
            <div className="w-full px-4 py-6 bg-[#5584b0] rounded-lg shadow-lg"
              style={{ height: `${maxHeight}px` }} >
              <h3 className="text-xl font-bold border-b pb-2">{project.title}</h3>
              <p className="mt-2 border-b pb-2">{project.description}</p>
              <div className="mt-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-[#81c2e6] text-[#254e7a] text-xs font-medium rounded-full px-2.5 py-0.5 mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
