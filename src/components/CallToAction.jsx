import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function CallToAction({ titleKey, textKey, link, buttonTextKey }) {
  const { t } = useTranslation();

  if (!titleKey) {
    return null;
  }

  return (
    <div className="my-16 md:my-24 text-center">
      <div className="bg-white/10 p-8 rounded-lg max-w-4xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">{t(titleKey)}</h2>
        <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">{t(textKey)}</p>
        <Link
          to={link}
          className="inline-block bg-indigo-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
        >
          {t(buttonTextKey)}
        </Link>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  titleKey: PropTypes.string,
  textKey: PropTypes.string,
  link: PropTypes.string,
  buttonTextKey: PropTypes.string,
};

export default CallToAction;