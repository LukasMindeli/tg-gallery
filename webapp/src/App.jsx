import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import introVideo from "./assets/intro.mp4";
import "./App.css";

import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const maxMs = 6000;
    const t = setTimeout(() => startFadeOut(), maxMs);
    return () => clearTimeout(t);
  }, []);

  function startFadeOut() {
    if (fadeOut) return;
    setFadeOut(true);
    setTimeout(() => setShowIntro(false), 650);
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
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}