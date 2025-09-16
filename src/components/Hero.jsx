import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import bg_primary from "../assets/bg-primary.png";
import fish from "../assets/fish.png";
import logo2 from "../assets/logos/brc.png";
import logo4 from "../assets/logos/dolphin safe gg.png";
import logo3 from "../assets/logos/fots.png";
import logo1 from "../assets/logos/haccp.png";
import Loader from "./Loader";
import logo from "/logo.png";

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

const Hero = () => {
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
    <div
      className="relative min-h-screen text-white"
      style={{ backgroundImage: `url(${bg_primary})` }}
    >
      {/* Loader (full screen overlay) */}
      {loading && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-700 ${
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
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center px-16 w-2/3">
          <div className="mb-12">
            {" "}
            {/* Adjust spacing as needed */}
            <img src={logo} alt="fish" className="object-contain w-28" />
          </div>

          <div className="border-l-4 border-secondary pl-4">
            <h1 className="text-6xl font-medium leading-tight font-primary">
              OUR NEXT <span className="text-secondary">EXPEDITION</span>
            </h1>
            <h1 className="text-5xl font-medium whitespace-nowrap font-primary uppercase">
              Brings a{" "}
              <span className="text-bright-ocean-blue">New Website</span> Ashore
            </h1>
            <p className="text-lg font-medium mt-8 font-body tracking-wide">
              We're building a new online home for CeyFish Company.
            </p>
            <p className="text-lg font-medium mb-2 font-body tracking-wide">
              While we build, our lines stay in the water and deliveries on
              course.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-16 ml-14 font-secondary -rotate-4 uppercase">
            <p className="text-bright-ocean-blue font-semibold text-3xl leading-0">
              Questions or orders<span className="text-5xl leading-0">?</span>
            </p>
            <p className="text-2xl">
              Get in touch with us today<span className="text-6xl">!</span>
            </p>
          </div>

          <div className="flex space-x-8 mt-24 ml-5 font-body">
            <div className="btn-hero">
              <span>
                <IoIosCall className="btn-hero-icon" />
              </span>
              <p className="btn-hero-text">Call Our Team</p>
            </div>
            <button className="btn-hero">
              <span>
                <HiOutlineMail className="btn-hero-icon" />
              </span>
              <p className="btn-hero-text">Send an Email</p>
            </button>
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

          <div className="border-t border-secondary w-11/12 my-6"></div>

          <div className="text-sm space-y-4 text-center font-body font-medium">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src={fish} alt="fish" className="object-contain ml-[25%]" />
        </div>

        {/* Copyright */}
        <div className="absolute bottom-4 right-6 text-xs">
          © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
        </div>
      </div>
    </div>
  );
};

export default Hero;
