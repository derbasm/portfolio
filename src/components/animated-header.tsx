import React from "react";
import { motion } from "framer-motion";
import ContactButtons from "@/components/contactbuttons";
import Image from "next/image";
import type { Header } from "@/types/resume";

interface AnimatedHeaderProps {
  header: Header;
}

const AnimatedHeader = ({ header }: AnimatedHeaderProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  return (
    <motion.header 
      className="text-[#cbe3ef] dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section: Name and Description */}
        <div className="flex-1 space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left bg-gradient-to-r from-[#cbe3ef] to-[#81c2e6] bg-clip-text text-transparent">
              {header.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-lg text-[#81c2e6] dark:text-gray-300 text-center lg:text-left">
              {header.about}
            </p>
            <p className="text-sm text-[#81c2e6] dark:text-gray-400 cursor-pointer text-center lg:text-left hover:text-[#cbe3ef] transition-colors">
              <a
                href={header.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Location: ${header.location}`}
                className="inline-flex items-center space-x-1 hover:underline"
              >
                <span>{header.location}</span>
              </a>
            </p>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <ContactButtons
              email={header.contact.email}
              tel={header.contact.tel}
              social={header.contact.social.map((item) => ({
                name: item.name,
                url: item.url,
                icon: item.icon,
              }))}
            />
          </motion.div>

          {/* PDF Export
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <PDFExport language={language} />
          </motion.div> */}
        </div>

        {/* Right Section: Avatar */}
        <motion.div 
          className="flex-shrink-0"
          variants={avatarVariants}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5584b0] to-[#81c2e6] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-[#5584b0] shadow-2xl">
              <Image
                alt={header.name}
                src={header.avatar}
                width={224}
                height={224}
                className="object-cover w-full h-full transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary */}
      {header.summary && (
        <motion.div 
          variants={itemVariants}
          className="mt-8"
        >
          <div className="glass p-6 rounded-xl shadow-xl">
            <p className="text-sm lg:text-base text-[#cbe3ef] dark:text-gray-100 leading-relaxed">
              {header.summary}
            </p>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default AnimatedHeader;
