import { useParams } from "react-router-dom";
import artworkData from "../data/artworkData";

export function useAlbumData(albumType) {
  const { albumId } = useParams();

  const isArtwork = albumType === "artwork";

  const albums = isArtwork ? artworkData.artworkAlbums : artworkData.photoAlbums;
  const album = albumId ? albums.find((a) => a.id === albumId) : null;
  const otherAlbums = albumId ? albums.filter((a) => a.id !== albumId) : albums;

  const backPath = isArtwork ? "/artwork" : "/photography";

  const backLinkTextKey = isArtwork
    ? "album_page.back_to_artwork_gallery"
    : "album_page.back_to_photography_gallery";

  const exploreTitleKey = isArtwork
    ? "explore.artwork_title"
    : "explore.photography_title";

  const galleryPageData = isArtwork
    ? {
        titleKey: "gallery.artwork_title",
        descriptionKey: "gallery.artwork_desc",
        cta: {
          titleKey: "cta.photography_title",
          textKey: "cta.photography_text",
          link: "/photography",
          buttonTextKey: "cta.photography_button",
        },
      }
    : {
        titleKey: "gallery.photography_title",
        descriptionKey: "gallery.photography_desc",
        cta: {
          titleKey: "cta.artwork_title",
          textKey: "cta.artwork_text",
          link: "/artwork",
          buttonTextKey: "cta.artwork_button",
        },
      };

  return {
    album,
    albums,
    otherAlbums,
    backPath,
    backLinkTextKey,
    exploreTitleKey,
    galleryPageData,
  };
}
