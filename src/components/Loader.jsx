import { useEffect, useState } from "react";
import { FaFish } from "react-icons/fa6";
import bg_secondary from "../assets/bg-secondary.png";

const Loader = ({ onFinish }) => {
  const [animationPhase, setAnimationPhase] = useState("initial");

  useEffect(() => {
    // Start shrink phase
    const shrinkTimer = setTimeout(() => setAnimationPhase("shrink"), 200);

    // Start scale phase after shrink completes
    const scaleTimer = setTimeout(() => setAnimationPhase("scale"), 700);

    // Call parent after scale finishes
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2200);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(scaleTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const getTransform = () => {
    switch (animationPhase) {
      case "shrink":
        return "scale-[0.5]";
      case "scale":
        return "scale-[200]";
      default:
        return "scale-100";
    }
  };
  return (
    <div
      className="flex items-center justify-center h-screen w-full bg-black"
      style={{ backgroundImage: `url(${bg_secondary})` }}
    >
      <FaFish
        className={`text-white transition-transform duration-[1000ms] text-[12rem] ease-in-out ${getTransform()}`}
      />
    </div>
  );
};

export default Loader;
