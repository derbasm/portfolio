import type { Language, LanguageCode } from "@/types/resume";

const LanguageLevel = ({ level }: { level: string }) => {
  const getWidthByLevel = (level: string) => {
    if (level.includes('/')) {
      const parts = level.split('/').map(Number);
      if (parts.length === 2 && parts[0] !== undefined && parts[1] !== undefined) {
        return (parts[0] / parts[1]) * 100;
      }
    }
    
    // Fallback für Textlevel
    switch (level.toLowerCase()) {
      case 'c2':
      case 'native':
      case 'muttersprache':
        return 100;
      case 'c1':
        return 85;
      case 'b2':
        return 70;
      case 'b1':
        return 55;
      case 'a2':
        return 40;
      case 'a1':
        return 25;
      default:
        return 50;
    }
  };

  const width = getWidthByLevel(level);

  return (
    <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-700 bg-[#254e7a]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default function Languages({ languages, currentLanguage }: { languages: Language[]; currentLanguage: LanguageCode }) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        {currentLanguage === "de" ? "Sprachen" : "Languages"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language, index) => (
          <div 
            key={index} 
            className="bg-[#cbe3ef] rounded-lg shadow-lg p-6 border-l-4 border-white hover:shadow-xl transition-shadow"
          >
            {/* Sprache und Level */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-[#254e7a]">
                {language.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#254e7a]">
                  {language.proficiency}
                </span>
                <span className="inline-block bg-[#254e7a] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {language.level}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <LanguageLevel level={language.level} />
            </div>

            {/* Beschreibung */}
            {language.description && (
              <p className="text-sm text-[#254e7a] leading-relaxed">
                {language.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
