import { Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ExploreOtherAlbums from "../components/ExploreOtherAlbums";
import { useAlbumData } from "../hooks/useAlbumData";

function AlbumPage({ albumType }) {
  const { t } = useTranslation();
  const { album, otherAlbums, backPath, backLinkTextKey, exploreTitleKey } =
    useAlbumData(albumType);

  // If the album doesn't exist (e.g., invalid URL), redirect to the main gallery page.
  if (!album) {
    return <Navigate to={backPath} replace />;
  }

  return (
    <div className="container mx-auto p-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <Link
          to={backPath}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-8"
        >
          &larr; {t(backLinkTextKey, { defaultValue: "Back to Gallery" })}
        </Link>
        <h1
          className={`text-5xl font-bold text-white drop-shadow-lg ${album.fontClass}`}
        >
          {t(album.titleKey)}
        </h1>
        <p className="text-lg mt-2 text-white drop-shadow-md">
          {t(album.descriptionKey)}
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {album.images.map((image) => (
          <div key={image.src} className="break-inside-avoid">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <ExploreOtherAlbums
        albumType={albumType}
        otherAlbums={otherAlbums}
        exploreTitleKey={exploreTitleKey}
      />
    </div>
  );
}

AlbumPage.propTypes = {
  albumType: PropTypes.oneOf(["artwork", "photography"]).isRequired,
};

export default AlbumPage;