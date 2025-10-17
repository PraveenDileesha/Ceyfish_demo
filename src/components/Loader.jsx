import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFish } from "react-icons/fa";

const Loader = ({ onFinish }) => {
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      // Step 1: Shrink smoothly
      await controls.start({
        scale: 0.5,
        transition: { duration: 0.6, ease: "easeIn" },
      });

      // Step 2: Zoom in large with spring
      await controls.start({
        scale: 50, // covers the screen nicely
        transition: { duration: 0.6, ease: "easeIn" },
      });

      onFinish();
    };

    runAnimation();
  }, [controls, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-accent/70 bg-cover bg-[url('/bg-secondary.png')]">
      <motion.div
        className="flex items-center justify-center w-full h-full"
        animate={controls}
        initial={{ scale: 1 }}
      >
        <FaFish className="text-white text-[12rem]" />
      </motion.div>
    </div>
  );
};

export default Loader;
