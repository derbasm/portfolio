import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

interface Contact {
  email?: string;
  tel?: string;
  social: { name: string; url: string; icon: React.ElementType }[];
}

const ContactButtons = ({ email, tel, social }: Contact) => {
  return (
    <div className="flex gap-x-2 pt-2 font-mono text-sm text-muted-foreground print:hidden">
      {/* E-Mail Icon */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-[#254e7a]"
          aria-label="Email"
        >
          <MdEmail className="w-4 h-4" />
        </a>
      )}

      {/* Telefon Icon */}
      {tel && (
        <a
          href={`tel:${tel}`}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-[#254e7a]"
          aria-label="Telefon"
        >
          <FaPhone className="w-4 h-4" />
        </a>
      )}

      {/* Soziale Medien Icons */}
      {social.map((socialItem, index) => (
        <a
          key={index}
          href={socialItem.url}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-[#254e7a]"
          aria-label={socialItem.name}
        >
          <socialItem.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default ContactButtons;
