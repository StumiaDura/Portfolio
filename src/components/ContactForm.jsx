import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to your Formspree endpoint
    try {
      const response = await fetch("https://formspree.io/f/meozevoy", { // <-- TODO: Replace with your Formspree URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If Formspree received it, show the success message
        setIsSubmitted(true);
      } else {
        alert(t("contactForm.error_alert"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(t("contactForm.error_alert"));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white/10 rounded-lg">
        <h3 className="text-2xl font-bold text-white">{t("contactForm.success_title")}</h3>
        <p className="mt-2 text-white/80">{t("contactForm.success_message")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-left text-white/90">{t("contactForm.label_name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all text-white placeholder:text-white/70"
          placeholder={t("contactForm.placeholder_name")}
          required
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-left text-white/90">{t("contactForm.label_email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all text-white placeholder:text-white/70"
          placeholder={t("contactForm.placeholder_email")}
          required
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-left text-white/90">{t("contactForm.label_message")}</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all text-white placeholder:text-white/70"
          placeholder={t("contactForm.placeholder_message")}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
        >
          {t("contactForm.button_send")}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;