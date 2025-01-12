"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/card";
import Image from "next/image";
import React, { useState } from "react";

interface Certificate {
  title: string;
  image: string;
  onClick?: () => void;
}

export function Certificate({ certificate }: { certificate: Certificate[] }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const togglePopup = (cert: Certificate) => {
    setIsPopupOpen((prev) => !prev);
    setSelectedCertificate(cert);
  };

  return (
    <>
      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificate.map((cert, index) => (
          <Card
            key={index}
            onClick={() => togglePopup(cert)}
            className="flex flex-col overflow-hidden border border-[#81c2e6] bg-[#81c2e6] p-4 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-transform"
          >
            <CardHeader>
              <CardTitle className="text-base text-center text-[#254e7a] mb-4">
                {cert.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image
                src={cert.image}
                alt={cert.title}
                className="rounded-lg border border-[#5584b0]"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && selectedCertificate && (
        <Popup
          popupProps={{
            image: selectedCertificate.image,
            title: selectedCertificate.title,
            onClose: () => setIsPopupOpen(false),
          }}
        />
      )}
    </>
  );
}

// Popup Component
interface PopupProps {
  image: string;
  title: string;
  onClose: () => void;
}

const Popup = ({ popupProps }: { popupProps: PopupProps }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      onClick={popupProps.onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] p-6 bg-[#f9fcff] rounded-xl shadow-xl border border-[#81c2e6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Popup Image */}
        <Image
          src={popupProps.image}
          alt={popupProps.title}
          className="rounded-lg object-contain max-w-full max-h-[80vh] border border-[#5584b0]"
          width={800}
          height={600}
        />

        {/* Close Button */}
        <button
          onClick={popupProps.onClose}
          className="absolute top-4 right-4 p-2 bg-[#cbe3ef] text-[#254e7a] rounded-full shadow hover:shadow-lg transition-shadow"
          aria-label="Close popup"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Certificate;
