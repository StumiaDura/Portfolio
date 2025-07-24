import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// --- Social Media Icon Components ---
// These are simple functional components that return SVG icons.
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.011-4.85-.069c-3.225-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.85s.011-3.584.069-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

// Data for social media links. Using arrays makes the component cleaner and easier to update.
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/klingalu.art/", icon: <FacebookIcon /> /* TODO: Add your Facebook URL */ },
  { name: "Instagram", href: "https://www.instagram.com/kavos.puodelis.art/", icon: <InstagramIcon /> /* TODO: Add your Instagram URL */ },
  { name: "LinkedIn", href: "https://lt.linkedin.com/in/lukas-klinga", icon: <LinkedInIcon /> /* TODO: Add your LinkedIn URL */ },
];

// Data for navigation links, using paths from react-router.

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: t("footer.home"), path: "/" },
    { name: t("passions.photography_title"), path: "/photography" },
    { name: t("passions.artwork_title"), path: "/artwork" },
    { name: t("footer.contact"), path: "/#contact-section" },
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-md p-6 shadow-lg text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center text-sm">
        {/* Logo or name */}
        <p className="text-lg font-semibold">Lukas Klinga</p>

        {/* Social media icons */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name} profile`}
              className="text-white/70 hover:text-white transition-colors"
            >
              {/* Render the icon component from our data array */}
              {link.icon}
            </a>
          ))}
        </div>

        {/* Quick links using React Router's Link component */}
        <nav className="flex gap-4 flex-wrap justify-center">
          {quickLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs opacity-60 mt-4">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;