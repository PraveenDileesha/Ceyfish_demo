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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader disappears after 5 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative flex min-h-screen bg-[#071739] text-white">
      {/* logo */}
      <div className="absolute top-10 ml-5 w-1/12 inset-0">
        <img
          src={logo}
          alt="fish"
          className="object-contain"
          style={{ left: "13%", position: "relative" }}
        />
      </div>

      {/* Left Section (Text) */}
      <div className="flex flex-col justify-center px-16 w-1/2 space-y-6">
        <div className="border-l-4 border-[#FFFF00] pl-4">
          <h1 className="text-5xl font-semibold leading-tight">
            Our Next <span className="text-[#FFFF00]">Expedition</span>
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
            <span className="w-6 h-6 bg-[#FFFF00] rounded-full flex items-center justify-center text-[#071739] font-bold">
              <IoIosCall size={16} />
            </span>
            <p>Call Our Team</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="w-6 h-6 bg-[#FFFF00] rounded-full flex items-center justify-center text-[#071739] font-bold">
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

        <div className="border-t border-[#FFFF00] w-4/5 my-6"></div>

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

      <div className="absolute inset-0 flex justify-center">
        <img
          src={fish}
          alt="fish"
          className="object-contain"
          style={{ left: "13%", position: "relative" }}
        />
      </div>

      <div className="absolute bottom-4 right-6 text-xs text-gray-200">
        © Ceyfish Co. is a trademark of Union Harvest Inc, Canada.
      </div>
      <img
        src="/src/assets/Tuna_Fish.png"
        alt="Large tuna fish swimming in clear blue water with a calm and optimistic atmosphere. The surrounding environment suggests an ocean setting. No visible text in the image."
        className="flex-1 h-screen w-full object-cover"
      />
    </div>
  );
}

export default App;
