import { IoIosCall } from "react-icons/io";
import fish from "/assets/fish.png";
import logo2 from "/assets/logos/brc.png";
import logo4 from "/assets/logos/dolphin safe gg.png";
import logo3 from "/assets/logos/fots.png";
import logo1 from "/assets/logos/haccp.png";
import footerLogo from "/assets/logos/UH.png";
import logo from "/logo-full.png";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center">
      {/* Background layer */}
      <div className="fixed inset-0 -z-20 w-full h-full min-h-screen bg-[url('/bg-primary.png')] bg-cover bg-center" />

      <div className="fixed inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-black/50 md:via-black/20" />

      {/* Fish layer */}
      <img
        src={fish}
        alt="fish"
        className="absolute md:fixed top-0 left-0 w-full h-screen 
             object-contain object-top 
             md:left-28 -z-10 pointer-events-none"
      />

      {/* Header */}
      <header className="fixed top-0 text-white p-4 text-center text-xl font-bold">
        <img src={logo} alt="fish" className="object-contain w-15 md:w-20" />
      </header>

      {/* Body */}
      <main className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto px-4 gap-10 mt-24 flex-grow z-10">
        {/* Left Section */}
        <div className="text-white lg:w-2/3">
          <div className="border-l-4 border-secondary pl-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight font-primary uppercase">
              Our Next <span className="text-secondary">Expedition</span>
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold md:whitespace-nowrap font-primary uppercase">
              Brings a{" "}
              <span className="text-bright-ocean-blue">New Website</span> Ashore
            </h1>
            <p className="text-xs md:text-base lg:text-lg font-medium mt-8 font-body md:whitespace-nowrap">
              We're building a new online home for CeyFish Company.
            </p>
            <p className="text-xs md:text-base lg:text-lg font-medium mb-2 font-body md:whitespace-nowrap">
              While we build, our lines stay in the water and deliveries on
              course.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-10 text-center lg:text-start md:ml-14 font-body uppercase font-semibold">
            <p className="text-bright-ocean-blue text-xs md:text-lg lg:text-2xl">
              Questions or orders ?
            </p>
            <p className="text-xs md:text-lg lg:text-2xl">
              Get in touch with us today !
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex justify-center lg:justify-start md:ml-14 sm:space-x-8 mt-6 lg:mt-24 ml-0 sm:ml-5 font-body gap-6 sm:gap-0">
            <a
              href="tel:+14378789393"
              className="btn-hero w-28 md:w-36 justify-center bg-secondary hover:border-btn-dark text-[10px]"
            >
              <IoIosCall className="text-base md:text-xl lg:text-2xl mb-1 text-deep-navy" />
              <p className="btn-hero-text text-deep-navy md:text-xs lg:text-sm">
                Call Us
              </p>
            </a>
            <a
              href="mailto:contact@ceyfish.com?subject=Inquiry&body=Hello%20CeyFish%20Team,"
              className="btn-hero w-28 md:w-36 justify-center bg-secondary hover:border-btn-dark text-[10px]"
            >
              <span>
                <HiOutlineMail className="text-base md:text-xl lg:text-2xl mb-1 text-deep-navy" />
              </span>
              <p className="btn-hero-text text-deep-navy md:text-xs lg:text-sm whitespace-nowrap">
                Send Email
              </p>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-white flex flex-col items-center lg:w-1/3">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {[logo1, logo2, logo3, logo4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`logo${i + 1}`}
                className="h-8 sm:h-10 md:h-12 lg:h-16 object-contain"
              />
            ))}
          </div>

          <div className="border-t border-secondary w-full md:w-10/12 my-6"></div>

          <div className="text-[8px] md:text-xs lg:text-sm space-y-2 md:space-y-4 text-center font-body font-medium px-4">
            <p>Licensed under the Safe Food for Canadians Regulations</p>
            <p>Registered with the U.S. Food and Drug Administration</p>
            <p>Approved for exports to the European Union</p>
            <p>
              Registered with the Department of Fisheries & Aquatic Resources -
              Sri Lanka
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col w-full sm:flex-row justify-between items-center text-white p-4 text-center z-10">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="object-contain w-28 md:w-36"
        />

        <p className="text-[8px] md:text-xs mt-2 sm:mt-0 sm:text-right">
          © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
        </p>
      </footer>
    </div>
  );
}
