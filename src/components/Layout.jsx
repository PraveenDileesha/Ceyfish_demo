import { IoIosCall } from "react-icons/io";
import fish from "../assets/fish.png";
import logo2 from "../assets/logos/brc.png";
import logo4 from "../assets/logos/dolphin safe gg.png";
import logo3 from "../assets/logos/fots.png";
import logo1 from "../assets/logos/haccp.png";
import footerLogo from "../assets/logos/UH.png";
import logo from "/logo.png";
import { HiOutlineMail } from "react-icons/hi";

export default function Layout() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background layer */}
      <div className="fixed inset-0 -z-20 w-full h-full min-h-screen bg-[url('/bg-primary.png')] bg-cover bg-center" />

      <div className="fixed inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent md:from-black/10" />

      {/* Fish layer */}
      <img
        src={fish}
        alt="fish"
        className="absolute md:fixed inset-0 md:left-28 md:w-full h-screen md:object-contain -z-10 pointer-events-none object-cover
      sm:object-contain"
      />

      {/* Header */}
      <header className="text-white p-4 text-center text-xl font-bold">
        <img src={logo} alt="fish" className="object-contain w-15 md:w-20" />
      </header>

      {/* Body */}
      <main className="flex-1 px-4 grid lg:grid-cols-3 gap-4 relative z-10 items-center">
        {/* Left Section */}
        <div className="text-white relative z-20 lg:col-span-2">
          <div className="border-l-4 border-secondary pl-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-primary uppercase">
              Our Next <span className="text-secondary">Expedition</span>
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:whitespace-nowrap font-primary uppercase">
              Brings a{" "}
              <span className="text-bright-ocean-blue">New Website</span> Ashore
            </h1>
            <p className="text-xs md:text-lg font-medium mt-8 font-body md:whitespace-nowrap">
              We're building a new online home for CeyFish Company.
            </p>
            <p className="text-xs md:text-lg font-medium mb-2 font-body md:whitespace-nowrap">
              While we build, our lines stay in the water and deliveries on
              course.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-10 text-center md:text-start md:ml-14 font-body uppercase font-semibold">
            <p className="text-bright-ocean-blue text-xs md:text-2xl">
              Questions or orders ?
            </p>
            <p className="text-xs md:text-2xl">Get in touch with us today !</p>
          </div>

          <div className="flex justify-center md:justify-start md:ml-14 sm:space-x-8 mt-10 sm:mt-16 lg:mt-24 ml-0 sm:ml-5 font-body gap-6 sm:gap-0">
            <a
              href="tel:+94722904343"
              className="btn-hero w-28 md:w-52 justify-center bg-secondary hover:border-btn-dark text-[10px] md:text-sm"
            >
              <IoIosCall className="text-base md:text-2xl mb-1 text-deep-navy" />
              <p className="btn-hero-text text-deep-navy">Call Us</p>
            </a>
            <a
              href="mailto:info@ceyfish.com?subject=Inquiry&body=Hello%20CeyFish%20Team,"
              className="btn-hero w-28 md:w-52 justify-center bg-secondary hover:border-btn-dark text-[10px] md:text-sm"
            >
              <span>
                <HiOutlineMail className="text-base md:text-2xl mb-1 text-deep-navy" />
              </span>
              <p className="btn-hero-text text-deep-navy whitespace-nowrap">
                Send Email
              </p>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        {/* <div /> */}

        {/* Right Section */}
        <div className="text-white flex flex-col lg:col-span-1">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img
              src={logo1}
              alt="logo1"
              className="h-8 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo2}
              alt="logo2"
              className="h-8 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo3}
              alt="logo3"
              className="h-8 sm:h-14 md:h-16 object-contain"
            />
            <img
              src={logo4}
              alt="logo4"
              className="h-8 sm:h-14 md:h-16 object-contain"
            />
          </div>

          <div className="border-t border-secondary w-full md:w-11/12 my-6"></div>

          <div className="text-[8px] md:text-sm space-y-2 md:space-y-4 text-center font-body font-medium px-4">
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
      <footer className="flex flex-col sm:flex-row justify-between items-center text-white p-4 text-center z-10">
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
