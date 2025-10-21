import { IoIosCall } from "react-icons/io";
import fish from "/assets/fishLine.png";
import logo2 from "/assets/logos/brc.png";
import logo4 from "/assets/logos/dolphin safe gg.png";
import logo3 from "/assets/logos/fots.png";
import logo1 from "/assets/logos/haccp.png";
import footerLogo from "/assets/logos/UH.png";
import logo from "/logo-full.png";
import { HiOutlineMail } from "react-icons/hi";

const Layout = () => {
  return (
    <div className="relative h-screen w-full min-w-[320px] overflow-hidden">
      {/* Fixed Background Layer - Only background image */}
      <div className="fixed top-0 left-0 -z-20 w-full h-screen bg-[url('/bg-primary.png')] bg-cover bg-center">
        {/* Background Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full md:h-full lg:h-[80%] bg-gradient-to-t from-black/85 via-black/60 to-transparent md:from-black/70 md:via-black/50 lg:from-black/70 lg:via-black/70 xl:from-black/60 xl:via-black/40 transition-all duration-300 ease-in-out" />
      </div>

      {/* Main Container - Fish image moves with content */}
      <div className="relative z-10 h-full w-full min-w-[320px] flex flex-col overflow-hidden">
        {/* Fish Image - Stuck to top, consistent across all screen sizes */}
        <img
          src={fish}
          alt="fish"
          className="absolute top-0 left-0 w-full h-full object-contain object-top
                             scale-130 sm:scale-140 md:scale-150 lg:scale-160 xl:scale-180
                             translate-y-20 sm:translate-y-25 md:translate-y-27 lg:translate-y-33 xl:translate-y-35
                             translate-x-2 sm:translate-x-3 md:translate-x-8 lg:translate-x-16 xl:translate-x-12
                             transition-all duration-300 ease-in-out
                             pointer-events-none"
        />

        {/* Black Tint Overlay - Above fish, below content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-black/85 md:via-black/40 lg:from-black/80 lg:via-black/35 xl:from-black/65 xl:via-black/35 transition-all duration-300 ease-in-out" />

        {/* HEADER */}
        <header className="relative z-10 w-full flex p-4">
          <img src={logo} alt="Logo" className="object-contain w-15 md:w-20 transition-all duration-300 ease-in-out" />
        </header>

        {/* MAIN CONTENT */}
        <main className="relative z-10 flex-grow flex flex-col justify-center px-3 py-2 md:py-4 overflow-hidden min-w-[320px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 md:gap-4 lg:gap-8 text-white w-full space-y-4 md:space-y-6 lg:space-y-8 transition-all duration-300 ease-in-out">
          {/* LEFT Section */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-0 transition-all duration-300 ease-in-out">
            <div className="border-l-4 border-secondary pl-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-primary uppercase transition-all duration-300 ease-in-out">
                Our Next <span className="text-secondary">Expedition</span>
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:whitespace-nowrap font-primary uppercase transition-all duration-300 ease-in-out">
                Brings a{" "}
                <span className="text-bright-ocean-blue">New Website</span>{" "}
                Ashore
              </h1>
              <p className="text-xs md:text-base lg:text-lg font-medium mt-8 font-body md:whitespace-nowrap transition-all duration-300 ease-in-out">
                We're building a new online home for CeyFish Company.
              </p>
              <p className="text-xs md:text-base lg:text-lg font-medium mb-2 font-body md:whitespace-nowrap transition-all duration-300 ease-in-out">
                While we build, our lines stay in the water and deliveries on
                course.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-10 text-center lg:text-start md:ml-14 font-body uppercase font-semibold transition-all duration-300 ease-in-out">
              <p className="text-bright-ocean-blue text-xs md:text-lg lg:text-2xl transition-all duration-300 ease-in-out">
                Questions or orders ?
              </p>
              <p className="text-xs md:text-lg lg:text-2xl whitespace-nowrap transition-all duration-300 ease-in-out">
                Get in touch with us today !
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6 lg:mt-24 md:ml-14 font-body transition-all duration-300 ease-in-out">
              <a
                href="tel:+14378789393"
                aria-label="Call us at +1 437 878 9393"
                className="btn-hero w-20 md:w-30 flex-row items-center justify-center bg-secondary hover:border-btn-dark"
              >
                <IoIosCall className="btn-hero-icon w-5 h-5 md:w-6 md:h-6 shrink-0 text-deep-navy transition-all duration-300 ease-in-out" />
                <p className="btn-hero-text text-deep-navy text-[10px] md:text-xs lg:text-sm ml-2 whitespace-nowrap transition-all duration-300 ease-in-out">
                  Call
                </p>
              </a>
              <a
                href="mailto:contact@ceyfish.com"
                aria-label="Send email to contact@ceyfish.com"
                className="btn-hero w-21 md:w-30 flex-row items-center justify-center bg-secondary hover:border-btn-dark"
              >
                <HiOutlineMail className="btn-hero-icon w-5 h-5 md:w-6 md:h-6 shrink-0 text-deep-navy transition-all duration-300 ease-in-out" />
                <p className="btn-hero-text text-deep-navy text-[10px] md:text-xs lg:text-sm ml-2 whitespace-nowrap transition-all duration-300 ease-in-out">
                  Email
                </p>
              </a>
            </div>
          </div>

          {/* RIGHT Section */}
          <div className="flex flex-col items-center justify-center w-full gap-y-5 sm:gap-y-10 md:gap-y-0 transition-all duration-300 ease-in-out">
            <div className="flex flex-nowrap items-center justify-center gap-4 lg:gap-6 xl:gap-4 2xl:gap-8 w-full transition-all duration-300 ease-in-out">
              {[logo1, logo2, logo3, logo4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`logo${i + 1}`}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 object-contain transition-all duration-300 responsive-logos"
                />
              ))}
            </div>

            <div className="border-t border-secondary w-10/12 my-6" />

            <div className="text-[8px] md:text-xs lg:text-sm space-y-2 md:space-y-4 text-center font-body font-medium max-w-[90%] transition-all duration-300 ease-in-out">
              <p>Licensed under the Safe Food for Canadians Regulations</p>
              <p>Registered with the U.S. Food and Drug Administration</p>
              <p>Approved for exports to the European Union</p>
              <p>
                Registered with the Department of Fisheries & Aquatic Resources
                - Sri Lanka
              </p>
            </div>
          </div>
        </div>
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between p-4 text-white transition-all duration-300 ease-in-out">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="object-contain w-28 md:w-36 mb-2 sm:mb-0 transition-all duration-300 ease-in-out"
          />
          <p className="text-[8px] md:text-xs mt-2 sm:mt-0 sm:text-right text-center transition-all duration-300 ease-in-out">
            © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;