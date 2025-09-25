import { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoaderFinish = () => {
    setFadeOut(true); // start fading loader
    setTimeout(() => setLoading(false), 500); // remove loader after fade
  };

  return (
    <div className="relative">
      {/* Full-page loader */}
      {loading && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader onFinish={handleLoaderFinish} />
        </div>
      )}

      {/* Page content (hidden behind loader initially) */}
      <div
        className={`transition-opacity duration-500 h-screen ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
      </div>
    </div>
  );
};

export default App;
