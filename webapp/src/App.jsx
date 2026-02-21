import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import introVideo from "./assets/intro.mp4";
import "./App.css";

import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Category from "./pages/Category";
import Painting from "./pages/Painting";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const maxMs = 3000;
    const t = setTimeout(() => startFadeOut(), maxMs);
    return () => clearTimeout(t);
  }, []);

  function startFadeOut() {
    if (fadeOut) return;
    setFadeOut(true);
    setTimeout(() => setShowIntro(false), 300);
  }

  return (
    <div className="appRoot">
      {showIntro ? (
        <div className={`introWrap ${fadeOut ? "fadeOut" : ""}`}>
          <video
            className="introVideo"
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={startFadeOut}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:categoryId" element={<Category />} />
            <Route path="/painting/:paintingId" element={<Painting />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}