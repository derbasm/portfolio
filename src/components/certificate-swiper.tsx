"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface Certificate {
  title: string;
  image: string;
}

export default function CertificateSwiper({ certificates }: { certificates: Certificate[] }) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleClick = (certificate: Certificate) => {
    setSelectedCert(certificate);
  };

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={20}
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
          delay: 8000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleClick(cert)}
              className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
                className="rounded-lg border border-[#5584b0]"
              />
              <h3 className="text-center text-[#254e7a] mt-4 font-semibold">{cert.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCert && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-6 bg-[#f9fcff] rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              className="rounded-lg object-contain max-w-full max-h-[80vh]"
              width={800}
              height={600}
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 bg-[#cbe3ef] text-[#254e7a] rounded-full shadow hover:shadow-lg"
              aria-label="Close popup"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
