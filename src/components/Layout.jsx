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
    <div className="relative min-h-screen w-full min-w-[320px] overflow-hidden">
      {/* Fixed Background Layer - Only background image */}
      <div className="fixed top-0 left-0 -z-20 w-full min-h-screen bg-[url('/bg-primary.png')] bg-cover bg-center">
        {/* Background Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full md:h-full lg:h-[80%] bg-gradient-to-t from-black/85 via-black/60 to-transparent md:from-black/70 md:via-black/50 lg:from-black/70 lg:via-black/70 xl:from-black/60 xl:via-black/40 transition-all duration-300 ease-in-out" />
      </div>

      {/* Main Container - Fish image moves with content */}
      <div className="relative z-10 min-h-screen w-full min-w-[320px] flex flex-col overflow-hidden">
        {/* Fish Image - Responsive to orientation */}
        <img
          src={fish}
          alt="fish"
          className="absolute top-0 left-0 w-full h-full object-contain 
          object-top landscape-mobile:object-top
          scale-130 sm:scale-140 md:scale-150 lg:scale-160 xl:scale-170
          landscape-mobile:scale-110
          translate-y-26 sm:translate-y-17 md:translate-y-20 lg:translate-y-25 xl:translate-y-27
          landscape-mobile:translate-y-0
          translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-6 xl:translate-x-12
          landscape-mobile:translate-x-0
          transition-all duration-300 ease-in-out
          pointer-events-none"
        />

        {/* Black Tint Overlay - Above fish, below content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-black/85 md:via-black/40 lg:from-black/80 lg:via-black/35 xl:from-black/65 xl:via-black/35 transition-all duration-300 ease-in-out" />

        {/* HEADER */}
        <header className="relative z-10 w-full flex p-5 landscape-mobile:p-2">
          <img
            src={logo}
            alt="Logo"
            className="object-contain w-20 md:w-20 lg:w-20 landscape-mobile:w-12 transition-all duration-300 ease-in-out"
          />
        </header>

        {/* MAIN CONTENT */}
        <main className="relative z-10 flex-grow flex flex-col justify-center px-3 py-6 md:py-8 lg:py-12 landscape-mobile:py-2 min-w-[320px]">
        <div className="flex flex-col justify-center flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] landscape-mobile:grid-cols-[1.5fr_1fr] gap-9 md:gap-9 lg:gap-8 landscape-mobile:gap-3 text-white w-full transition-all duration-300 ease-in-out">
            {/* LEFT Section */}
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-0 landscape-mobile:space-y-2 transition-all duration-300 ease-in-out">
              <div className="border-l-4 border-secondary pl-4 landscape-mobile:pl-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl landscape-mobile:text-lg font-bold leading-tight font-primary uppercase transition-all duration-300 ease-in-out">
                  Our Next <span className="text-secondary">Expedition</span>
                </h1>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl landscape-mobile:text-lg font-bold md:whitespace-nowrap landscape-mobile:whitespace-normal font-primary uppercase transition-all duration-300 ease-in-out">
                  Brings a{" "}
                  <span className="text-bright-ocean-blue">New Website</span>{" "}
                  Ashore
                </h1>
                <p className="text-xs md:text-sm lg:text-lg landscape-mobile:text-[10px] font-medium mt-8 landscape-mobile:mt-3 font-body md:whitespace-nowrap landscape-mobile:whitespace-normal transition-all duration-300 ease-in-out">
                  We're building a new online home for CeyFish Company.
                </p>
                <p className="text-xs md:text-sm lg:text-lg landscape-mobile:text-[10px] font-medium mb-2 landscape-mobile:mb-1 font-body md:whitespace-nowrap landscape-mobile:whitespace-normal transition-all duration-300 ease-in-out">
                  While we build, our lines stay in the water and deliveries on
                  course.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-10 landscape-mobile:mt-3 text-center lg:text-start landscape-mobile:text-start lg:ml-14 landscape-mobile:ml-2 font-body uppercase font-semibold transition-all duration-300 ease-in-out">
                <p className="text-bright-ocean-blue text-xs md:text-base lg:text-2xl landscape-mobile:text-[11px] transition-all duration-300 ease-in-out">
                  Questions or orders ?
                </p>
                <p className="text-xs md:text-base lg:text-2xl landscape-mobile:text-[11px] whitespace-nowrap landscape-mobile:whitespace-normal transition-all duration-300 ease-in-out">
                  Get in touch with us today !
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex justify-center lg:justify-start landscape-mobile:justify-start gap-4 landscape-mobile:gap-4 mt-4 lg:mt-24 landscape-mobile:mt-2 lg:ml-14 landscape-mobile:ml-2 font-body transition-all duration-300 ease-in-out">
                <a
                  href="tel:+14378789393"
                  aria-label="Call us at +1 437 878 9393"
                  className="btn-hero w-20 md:w-30 landscape-mobile:w-16 flex-row items-center justify-center bg-secondary hover:border-btn-dark"
                >
                  <IoIosCall className="btn-hero-icon w-5 h-5 md:w-6 md:h-6 landscape-mobile:w-4 landscape-mobile:h-4 shrink-0 text-deep-navy transition-all duration-300 ease-in-out" />
                  <p className="btn-hero-text text-deep-navy text-[10px] md:text-xs lg:text-sm landscape-mobile:text-[9px] ml-2 landscape-mobile:ml-1 whitespace-nowrap transition-all duration-300 ease-in-out">
                    Call
                  </p>
                </a>
                <a
                  href="mailto:contact@ceyfish.com"
                  aria-label="Send email to contact@ceyfish.com"
                  className="relative group btn-hero w-21 md:w-30 landscape-mobile:w-16 flex-row items-center justify-center bg-secondary hover:border-btn-dark"
                >
                  <HiOutlineMail className="btn-hero-icon w-5 h-5 md:w-6 md:h-6 landscape-mobile:w-4 landscape-mobile:h-4 shrink-0 text-deep-navy transition-all duration-300 ease-in-out" />
                  <p className="btn-hero-text text-deep-navy text-[10px] md:text-xs lg:text-sm landscape-mobile:text-[9px] ml-2 landscape-mobile:ml-1 whitespace-nowrap transition-all duration-300 ease-in-out">
                    Email
                  </p>
                  <span className="absolute bottom-full left-[62%] -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-[#00b1f5] text-white text-xs px-2 py-1 rounded shadow transition-opacity duration-150 ease-out pointer-events-none whitespace-nowrap hidden md:block">
                  contact@ceyfish.com
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT Section */}
            <div className="flex flex-col items-center justify-center w-full gap-y-1 sm:gap-y-1 md:gap-y-1 landscape-mobile:gap-y-1 transition-all duration-300 ease-in-out">
              <div className="flex flex-nowrap items-center justify-center gap-4 lg:gap-4 xl:gap-6 2xl:gap-8 landscape-mobile:gap-5 landscape-mobile:gap-3 w-full transition-all duration-300 ease-in-out">
                {[logo1, logo2, logo3, logo4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`logo${i + 1}`}
                    className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 landscape-mobile:h-8 object-contain transition-all duration-300 responsive-logos"
                  />
                ))}
              </div>

              <div className="h-0.5 bg-yellow-300 mt-3 mb-6 transition-all duration-300 ease-in-out line-width" style={{ width: 'clamp(60%, 50vw, 90%)'}}/>

              <div className="text-[8px] md:text-[10px] lg:text-sm landscape-mobile:text-[7px] space-y-2 md:space-y-4 landscape-mobile:space-y-1 text-center font-body font-medium max-w-[90%] transition-all duration-300 ease-in-out">
                <p>Licensed under the Safe Food for Canadians Regulations</p>
                <p>Registered with the U.S. Food and Drug Administration</p>
                <p>Approved for exports to the European Union</p>
                <p>
                  Registered with the Department of Fisheries & Aquatic
                  Resources - Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 w-full flex flex-col sm:flex-row landscape-mobile:flex-row items-center justify-between p-4 landscape-mobile:p-2 text-white transition-all duration-300 ease-in-out">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="object-contain w-28 md:w-36 landscape-mobile:w-20 mb-2 sm:mb-0 landscape-mobile:mb-0 transition-all duration-300 ease-in-out"
          />
          <p className="text-[8px] md:text-xs landscape-mobile:text-[7px] mt-2 sm:mt-0 landscape-mobile:mt-0 sm:text-right landscape-mobile:text-right text-center transition-all duration-300 ease-in-out">
            © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
