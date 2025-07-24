import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import CallToAction from "../components/CallToAction";
import { useAlbumData } from "../hooks/useAlbumData";
import AlbumCard from "../components/AlbumCard";

function GalleryPage({ albumType }) {
  const { t } = useTranslation();
  const { albums, galleryPageData } = useAlbumData(albumType);

  const { titleKey, descriptionKey, cta } = galleryPageData;

  return (
    <div className="container mx-auto p-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-4 text-white text-center drop-shadow-lg">
        {t(titleKey)}
      </h1>
      <p className="text-lg mb-8 text-white text-center drop-shadow-md max-w-3xl mx-auto">
        {t(descriptionKey)}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} albumType={albumType} />
        ))}
      </div>
      <CallToAction {...cta} />
    </div>
  );
}

GalleryPage.propTypes = {
  albumType: PropTypes.oneOf(["artwork", "photography"]).isRequired,
};

export default GalleryPage;