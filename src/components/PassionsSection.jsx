import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Data for the navigation links is now self-contained within this component.
const passionLinks = [
  {
    path: "/photography",
    key: "photography",
    imageSrc: "/assets/waterfall-cyprus.jpg",
  },
  {
    path: "/artwork",
    key: "artwork",
    imageSrc: "/assets/oil-pastel-drawing.jpg",
  },
];

function PassionsSection() {
    const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg mb-12">
        {t("passions.title")}
      </h2>
      <div className="flex h-[70vh] min-h-[500px] flex-col gap-3 md:flex-row md:h-[60vh]">
        {passionLinks.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            className="relative flex-1 cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={link.imageSrc}
              alt={t(`passions.${link.key}_title`)}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white">
              <h2 className="text-3xl font-bold tracking-wide font-space-grotesk">
                {t(`passions.${link.key}_title`)}
              </h2>
              <p className="mt-2 max-w-xs text-base leading-relaxed">
                {t(`passions.${link.key}_desc`)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PassionsSection;