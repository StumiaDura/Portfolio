import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import PassionsSection from "../components/PassionsSection";

// TODO: Consider creating an `src/assets` folder for your images
// and import your picture like this:
// import profilePic from '../assets/your-photo.jpg';

function Home() {
  const location = useLocation();
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Listen for scroll events for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // This effect handles scrolling to a section when the page loads with a hash in the URL,
    // for example, when navigating from another page like /artwork to /#contact-section.
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        // The element should be available after the component renders, so we can scroll to it.
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  // --- Animation Calculations ---
  // Adjust these values to change the speed and intensity of the effects

  // The image and text will fade out over the first 400px of scrolling
  const fadeOutOpacity = Math.max(0, 1 - scrollY / 400);
  // The image will scale down from 100% to 80%
  const scaleDown = Math.max(0.8, 1 - scrollY / 1000);
  // The image will move up the screen for a parallax effect
  const parallaxTranslateY = -scrollY / 4;

  return (
    // Using a React Fragment <> to avoid an unnecessary wrapper div.
    <>
      {/* Hero Section */}
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20 -mt-14 text-center text-white">
        {/* Container for the upward-pointing triangular image */}
        <div
          className="h-80 w-80 sm:h-[480px] sm:w-[480px] [clip-path:polygon(50%_100%,_0_0,_100%_0)] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
          style={{
            opacity: fadeOutOpacity,
            transform: `scale(${scaleDown}) translateY(${parallaxTranslateY}px)`,
          }}
        >
          {/* The Image */}
          <img
            src="/assets/lukas_picture.jpg"
            alt="A portrait of Lukas Klinga"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          className="relative -mt-24 max-w-4xl" // Use negative margin to pull text up over the image
          style={{
            opacity: fadeOutOpacity,
            // Apply the same transform to keep it locked with the image during scroll
            transform: `scale(${scaleDown}) translateY(${parallaxTranslateY}px)`,
          }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg sm:text-6xl">
            Lukas <br />
            Klinga
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Interactive Navigation Links Section */}
      <PassionsSection />

      {/* Contact Form Section */}
      <div
        id="contact-section"
        className="container mx-auto px-4 py-16 md:py-24 text-white scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg md:text-xl mb-12 drop-shadow-md">
            {t("contact.subtitle")}
          </p>
        </div>

        <ContactForm />
      </div>
    </>
  );
}

export default Home;