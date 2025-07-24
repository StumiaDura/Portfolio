import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

// --- Social Media Icon Components ---
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.534.011-4.774.069-2.83.129-4.004 1.3-4.133 4.133-.058 1.24-.069 1.602-.069 4.774s.011 3.534.069 4.774c.129 2.83 1.304 4.004 4.133 4.133 1.24.058 1.603.069 4.774.069s3.534-.011 4.774-.069c2.83-.129 4.004-1.3 4.133-4.133.058-1.24.069-1.602.069-4.774s-.011-3.534-.069-4.774c-.129-2.83-1.304-4.004-4.133-4.133-1.24-.058-1.603-.069-4.774-.069zm0 2.882c-2.401 0-4.35 1.95-4.35 4.35s1.95 4.35 4.35 4.35 4.35-1.95 4.35-4.35-1.95-4.35-4.35-4.35zm0 7.162c-1.553 0-2.812-1.26-2.812-2.812s1.26-2.812 2.812-2.812 2.812 1.26 2.812 2.812-1.259 2.812-2.812 2.812zm4.965-7.828c-.78 0-1.414.634-1.414 1.414s.634 1.414 1.414 1.414 1.414-.634 1.414-1.414-.634-1.414-1.414-1.414z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- Social Media Data ---
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/klingalu.art/", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/kavos.puodelis.art/", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://lt.linkedin.com/in/lukas-klinga", icon: LinkedInIcon },
];

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("footer.home"), path: "/" },
    { name: t("passions.photography_title"), path: "/photography" },
    { name: t("passions.artwork_title"), path: "/artwork" },
  ];

  // NavLink `active` class styling
  const activeLinkClass = "text-white bg-white/20";
  const inactiveLinkClass = "text-white/70 hover:text-white hover:bg-white/10";

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white font-syncopate">
              Lukas Klinga
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${ isActive ? activeLinkClass : inactiveLinkClass }`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-3 border-t border-white/20">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
