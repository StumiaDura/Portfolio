import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "EN" },
  { code: "lt", name: "LT" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
            i18n.language === lng.code
              ? "bg-indigo-600 text-white"
              : "bg-white/20 text-white/80 hover:bg-white/30"
          }`}
        >
          {lng.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;