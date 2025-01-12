import React from "react";
import { ContactButtons } from "@/components/contactbuttons";

interface ResumeData {
  name: string;
  about: string;
  contact: {
    email: string;
    tel: string;
    social: { platform: string; url: string }[];
  };
  avatarUrl: string;
  initials: string;
  summary: string;
}

const Header = ({ resumeData }: { resumeData: ResumeData }) => {
    return (
      <header className="bg-[#254e7a] text-[#cbe3ef] p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Linker Bereich: Name und Beschreibung */}
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold">{resumeData.name}</h1>
            <p className="text-sm text-[#81c2e6]">{resumeData.about}</p>
            {/* Kontakt-Buttons */}
            <ContactButtons
              email={resumeData.contact.email}
              tel={resumeData.contact.tel}
              social={resumeData.contact.social.map(item => ({
                name: item.platform,
                url: item.url,
                icon: item.icon 
              }))}
            />
          </div>
  
          {/* Rechter Bereich: Avatar */}
          <div className="flex-shrink-0">
            <div className="relative group w-28 h-28 rounded-full overflow-hidden bg-[#5584b0] shadow-md">
              <img
                alt={resumeData.name}
                src={resumeData.avatarUrl}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 opacity-0 group-hover:opacity-75 transition-opacity">
                <span className="text-lg font-semibold text-[#254e7a]">
                  {resumeData.initials}
                </span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Zusammenfassung */}
        {resumeData.summary && (
          <div className="mt-6 text-sm text-[#cbe3ef] bg-[#5584b0] p-4 rounded-md shadow">
            <p>{resumeData.summary}</p>
          </div>
        )}
      </header>
    );
  };
  

export default Header;
