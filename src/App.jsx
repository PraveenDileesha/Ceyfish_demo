import { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => {
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
        {/* <Hero /> */}
        <Layout />
      </div>
    </div>
  );
};

export default App;
