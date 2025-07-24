import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-128px)]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg font-space-grotesk">
          {t("blog.comingSoon")}
        </h1>
      </div>
    </div>
  );
}

export default Blog;