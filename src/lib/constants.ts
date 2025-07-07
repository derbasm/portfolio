/**
 * Constants for consistent styling across the application
 */

export const SECTION_CLASSES = {
  LIGHT: "section-padding shadow-lg text-[#254e7a] dark:text-gray-100 dark:bg-gray-900",
  DARK: "section-padding shadow-lg bg-[#254e7a] dark:bg-gray-800 text-[#cbe3ef] dark:text-gray-100",
  FOOTER: "px-6 py-4 shadow-lg bg-[#254e7a] dark:bg-gray-900 text-[#cbe3ef] dark:text-gray-100",
} as const;

export const ANIMATION_CLASSES = {
  FADE_IN: "transition-all duration-300",
  HOVER_SCALE: "transition-transform duration-200 hover:scale-105",
  HOVER_SHADOW: "transition-shadow duration-200 hover:shadow-lg",
} as const;

export const COLOR_SCHEME = {
  PRIMARY: "#254e7a",
  SECONDARY: "#5584b0", 
  LIGHT: "#cbe3ef",
  ACCENT: "#81c2e6",
} as const;
