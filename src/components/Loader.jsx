import { useEffect, useState } from "react";
import { GiFishingBoat, GiFishingHook } from "react-icons/gi";
import { LuFish } from "react-icons/lu";
import bg_secondary from "../assets/bg-secondary.png";

const icons = [LuFish, GiFishingBoat, GiFishingHook];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 600); // change icon every 1s
    return () => clearInterval(interval);
  }, []);

  const Icon = icons[index];

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full"
      style={{ backgroundImage: `url(${bg_secondary})` }}
    >
      {/* Cycling Icons */}
      <div className="mt-6 text-500 transition-all duration-500 ease-in-out">
        <Icon className="size-28 text-bright-ocean-blue" />
      </div>
    </div>
  );
};

export default Loader;
