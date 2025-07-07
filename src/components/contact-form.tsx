"use client";
import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

interface ContactFormProps {
  language: "de" | "en";
}

const ContactForm = ({ language }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const texts = {
    de: {
      title: "Kontakt aufnehmen",
      subtitle: "Lassen Sie uns über Ihr nächstes Projekt sprechen",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      required: "Dieses Feld ist erforderlich"
    },
    en: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      required: "This field is required"
    }
  };

  const t = texts[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log("Form data:", formData);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
        <p className="text-lg opacity-80">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              <FaUser className="inline mr-2" />
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#5584b0] focus:border-transparent transition-colors"
              placeholder={t.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              <FaEnvelope className="inline mr-2" />
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#5584b0] focus:border-transparent transition-colors"
              placeholder={t.email}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            <FaComment className="inline mr-2" />
            {t.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#5584b0] focus:border-transparent transition-colors"
            placeholder={t.subject}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            <FaComment className="inline mr-2" />
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#5584b0] focus:border-transparent transition-colors resize-none"
            placeholder={t.message}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-8 py-4 bg-[#254e7a] hover:bg-[#1e3a5f] disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5584b0] focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t.sending}
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                {t.send}
              </>
            )}
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="text-center p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
            {t.success}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
            {t.error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
