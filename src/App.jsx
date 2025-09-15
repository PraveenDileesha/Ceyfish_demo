import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import fish from "./assets/fish.png";
import logo1 from "./assets/logos/haccp.png";
import logo2 from "./assets/logos/brc.png";
import logo3 from "./assets/logos/fots.png";
import logo4 from "./assets/logos/dolphin safe gg.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "../public/logo.png";

// helper
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

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let delayDone = false;
    let imagesDone = false;

    // minimum 3s delay
    const delayTimer = setTimeout(() => {
      delayDone = true;
      if (imagesDone) setFadeOut(true);
    }, 3000);

    // preload images
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

  // after fadeOut triggers, wait for transition then hide loader
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => setLoading(false), 700); // match transition
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  return (
    <div className="relative min-h-screen bg-background text-white overflow-hidden">
      {/* Loader (full screen overlay) */}
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      {/* Main site content with fade-in */}
      <div
        className={`flex min-h-screen relative transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* logo */}
        <div className="absolute top-10 ml-5 w-1/12">
          <img
            src={logo}
            alt="fish"
            className="object-contain relative left-[13%]"
          />
        </div>

        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center px-16 w-1/2 space-y-6">
          <div className="border-l-4 border-secondary pl-4">
            <h1 className="text-5xl font-semibold leading-tight">
              Our Next <span className="text-secondary">Expedition</span>
            </h1>
            <h1 className="text-5xl font-semibold whitespace-nowrap">
              Brings a <span className="text-sky-400">New Website</span> Ashore
            </h1>
            <div className="tracking-wider">
              <p className="text-lg text-gray-100 mt-8">
                We're building a new online home for CeyFish Company.
              </p>
              <p className="text-lg text-gray-100 mb-2">
                While we build, our lines stay in the water and deliveries on
                course.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-6 ml-14">
            <p className="text-sky-400 font-semibold text-lg">
              Questions or orders?
            </p>
            <p className="text-gray-100 tracking-wider">
              Get in touch with us today!
            </p>
          </div>

          <div className="flex space-x-8 mt-8 ml-5">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-[#071739] font-bold">
                <IoIosCall size={16} />
              </span>
              <p>Call Our Team</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-[#071739] font-bold">
                <MdEmail size={16} />
              </span>
              <p>Send an Email</p>
            </div>
          </div>
        </div>

        {/* Right Section (Logos + Legal Text) */}
        <div className="flex flex-col w-1/3 justify-center items-center px-10 ml-auto">
          <div className="flex items-center justify-center space-x-6">
            <img src={logo1} alt="logo1" className="h-16 object-contain" />
            <img src={logo2} alt="logo2" className="h-16 object-contain" />
            <img src={logo3} alt="logo3" className="h-16 object-contain" />
            <img src={logo4} alt="logo4" className="h-16 object-contain" />
          </div>

          <div className="border-t border-secondary w-4/5 my-6"></div>

          <div className="text-sm text-gray-100 space-y-2 text-center">
            <p>Licensed under the Safe Food for Canadians Regulations</p>
            <p>Registered with the U.S. Food and Drug Administration</p>
            <p>Approved for exports to the European Union</p>
            <p>
              Registered with the Department of Fisheries & Aquatic Resources -
              Sri Lanka
            </p>
          </div>
        </div>

        {/* Middle Fish */}
        <div className="absolute inset-0 flex justify-center">
          <img
            src={fish}
            alt="fish"
            className="object-contain relative left-[13%]"
          />
        </div>

        {/* Copyright */}
        <div className="absolute bottom-4 right-6 text-xs text-gray-200">
          © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
        </div>
      </div>
    </div>
  );
}

export default App;
