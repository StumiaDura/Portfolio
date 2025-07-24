import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import AlbumCard from "./AlbumCard";

function ExploreOtherAlbums({ albumType, otherAlbums, exploreTitleKey }) {
  const { t } = useTranslation();

  if (otherAlbums.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-10 border-t border-white/20">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        {t(exploreTitleKey)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {otherAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} albumType={albumType} />
        ))}
      </div>
    </div>
  );
}

ExploreOtherAlbums.propTypes = {
  albumType: PropTypes.oneOf(["artwork", "photography"]).isRequired,
  otherAlbums: PropTypes.array.isRequired,
  exploreTitleKey: PropTypes.string.isRequired,
};

export default ExploreOtherAlbums;