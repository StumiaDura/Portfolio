import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazily load page components for code-splitting.
// This means the code for each page will only be downloaded when the user navigates to it.
const Home = lazy(() => import("./pages/Home"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Note: Global styles like index.css are correctly imported once in src/index.js
function App() {
  return (
    // This is the main application wrapper. We are now using Tailwind utilities
    // generated from our tailwind.config.js file to create the animated background.
    <div className="flex flex-col min-h-screen bg-gradient-animated bg-400% animate-gradient">
      <Navbar />
      {/* This wrapper for the routes will grow to fill available space,
            pushing the footer down. */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/photography"
            element={<GalleryPage albumType="photography" />}
          />
          <Route
            path="/artwork"
            element={<GalleryPage albumType="artwork" />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/photography/:albumId"
            element={<AlbumPage albumType="photography" />}
          />
          <Route
            path="/artwork/:albumId"
            element={<AlbumPage albumType="artwork" />}
          />
          {/* Catch-all route for 404 Not Found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;