import { useRef, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

// Image imports for preloading
import fish from "./assets/fish.png";
import logo2 from "./assets/logos/brc.png";
import logo4 from "./assets/logos/dolphin safe gg.png";
import logo3 from "./assets/logos/fots.png";
import logo1 from "./assets/logos/haccp.png";
import logo from "/logo.png";

// helper to preload images
const preloadImages = (srcArray) => {
  const promises = srcArray.map(
    (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      })
  );
  return Promise.all(promises);
};

const App = () => {
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let delayDone = false;
    let imagesDone = false;

    // 3s minimum delay
    const delayTimer = setTimeout(() => {
      delayDone = true;
      if (imagesDone) setFadeOut(true);
    }, 3000);

    preloadImages([fish, logo1, logo2, logo3, logo4, logo])
      .then(() => {
        imagesDone = true;
        if (delayDone) setFadeOut(true);
      })
      .catch(() => {
        imagesDone = true;
        if (delayDone) setFadeOut(true);
      });

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => setLoading(false), 700); // match transition
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  return (
    <div className="relative">
      {/* Full-page loader */}
      {loading && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      {/* Page content (hidden behind loader initially) */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero
          onEmailClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default App;
