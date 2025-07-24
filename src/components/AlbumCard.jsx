import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function AlbumCard({ album, albumType }) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/${albumType}/${album.id}`}
      className="block group"
    >
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <img
          src={album.cover}
          alt={album.coverAlt || t(album.titleKey)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h3
            className={`text-4xl font-bold text-white text-center drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${album.fontClass}`}
          >
            {t(album.titleKey)}
          </h3>
        </div>
      </div>
    </Link>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.object.isRequired,
  albumType: PropTypes.oneOf(["artwork", "photography"]).isRequired,
};

export default AlbumCard;