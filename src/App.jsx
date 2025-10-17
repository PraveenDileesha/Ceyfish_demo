import { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoaderFinish = () => {
    setFadeOut(true); // start fading loader
    setTimeout(() => setLoading(false), 300); // remove loader after fade
  };

  return (
    <div className="relative">
      {/* Full-page loader */}
      {loading && (
        <div
          className={`fixed inset-0 bg-[url('/bg-primary.png')] z-50 flex items-center justify-center transition-opacity duration-700`}
        >
          <Loader onFinish={handleLoaderFinish} />
        </div>
      )}

      {/* Page content (hidden behind loader initially) */}
      <div className={`transition-opacity duration-500 h-screen`}>
        <Hero />
      </div>
    </div>
  );
};

export default App;
