import React from "react";
import ContactButtons from "@/components/contactbuttons";
import Image from "next/image";

interface Header {
  name: string;
  about: string;
  location: string;
  locationLink: string;
  contact: {
    email: string;
    tel: string;
    social: ReadonlyArray<{
      name: string;
      url: string;
      icon: React.ElementType;
    }>;
  };
  avatar: string;
  summary: string;
}

const Header = ({ header }: { header: Header }) => {
  return (
    <header className="text-[#cbe3ef]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Linker Bereich: Name und Beschreibung */}
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{header.name}</h1>
          <p className="text-sm text-[#81c2e6]">{header.about}</p>
          <p className="text-sm text-[#81c2e6] cursor-pointer">
            <a
              href={header.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Location: ${header.location}`}
            >
              {header.location}
            </a>
          </p>

          {/* Kontakt-Buttons */}
          <ContactButtons
            email={header.contact.email}
            tel={header.contact.tel}
            social={header.contact.social.map((item) => ({
              name: item.name,
              url: item.url,
              icon: item.icon,
            }))}
          />
        </div>

        {/* Rechter Bereich: Avatar */}
        <div className="flex-shrink-0">
          <div className="relative group w-40 h-40 rounded-full overflow-hidden bg-[#5584b0] shadow-md">
            <Image
              alt={header.name}
              src={header.avatar}
              width={168} // 28 * 4 = 112px
              height={168} // 28 * 4 = 112px
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Zusammenfassung */}
      {header.summary && (
        <div className="mt-6 text-sm text-[#cbe3ef] bg-[#5584b0] p-4 rounded-md shadow">
          <p>{header.summary}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
