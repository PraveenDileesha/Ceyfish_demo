import { IoIosCall } from "react-icons/io";
import fish from "../assets/fish.png";
import logo2 from "../assets/logos/brc.png";
import logo4 from "../assets/logos/dolphin safe gg.png";
import logo3 from "../assets/logos/fots.png";
import logo1 from "../assets/logos/haccp.png";
import footerLogo from "../assets/logos/UH.png";
import EmailButton from "./EmailButton";
import logo from "/logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col relative min-h-screen text-white bg-[url('/bg-primary.png')]">
      <header className="fixed top-0 left-0 w-full bg-transparent px-6 sm:px-10 md:px-16 py-4 z-50">
        <img src={logo} alt="fish" className="object-contain w-20 md:w-28" />
      </header>

      <main className="flex flex-col lg:flex-row min-h-screen relative">
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 w-full lg:w-2/3">
          <div className="border-l-4 border-secondary pl-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-primary uppercase">
              Our Next <span className="text-secondary">Expedition</span>
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap font-primary uppercase">
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
          <div className="mt-16 md:ml-14 font-body uppercase font-semibold">
            <p className="text-bright-ocean-blue text-xl md:text-3xl">
              Questions or orders ?
            </p>
            <p className="text-xl">Get in touch with us today !</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-16 lg:mt-24 ml-0 sm:ml-5 font-body gap-6 sm:gap-0">
            <div className="btn-hero bg-secondary hover:border-btn-dark flex items-center justify-center">
              <a
                href="tel:+94752686699"
                className="btn-hero bg-secondary hover:border-btn-dark flex items-center"
              >
                <IoIosCall className="btn-hero-icon text-deep-navy" />
                <p className="btn-hero-text text-deep-navy tracking-wide">
                  Call Us
                </p>
              </a>
            </div>

            {/* Email Button with Dropdown */}
            <EmailButton />
          </div>
        </div>

        {/* Right Section (Logos + Legal Text) */}
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-center sm:px-10 mt-10 lg:mt-0">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img
              src={logo1}
              alt="logo1"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo2}
              alt="logo2"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo3}
              alt="logo3"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo4}
              alt="logo4"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />
          </div>

          <div className="border-t border-secondary w-full md:w-11/12 my-6"></div>

          <div className="text-xs md:text-sm space-y-4 text-center font-body font-medium px-4">
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
        <div className="absolute top-[280px] md:top-1/2 md:left-1/2 transform translate-x-44 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none md:block">
          <img
            src={fish}
            alt="fish"
            className="object-contain md:h-72 lg:h-screen ml-[13%]"
          />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between px-6 text-[10px] sm:text-xs font-body font-medium z-50">
        <div className="flex items-center m-3">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="object-contain w-32 sm:w-36"
          />
        </div>
        <p className="text-right">
          © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
        </p>
      </footer>
    </div>
  );
};

export default Hero;
