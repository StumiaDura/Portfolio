import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 py-16 text-center text-white">
      <h1 className="text-8xl font-bold drop-shadow-lg font-syncopate">404</h1>
      <h2 className="text-4xl font-bold mt-4 mb-6 drop-shadow-md">
        {t("notFound.title")}
      </h2>
      <p className="text-lg mb-8 max-w-md mx-auto">
        {t("notFound.message")}
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
      >
        {t("notFound.button_home")}
      </Link>
    </div>
  );
}

export default NotFound;