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
        opacity: 0,
        transition: { duration: 1, ease: "easeIn" },
      });

      controls.set({ scale: 70, opacity: 0 });
      setTimeout(() => onFinish(), 100);
    };

    runAnimation();
  }, [controls, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-cover bg-[url('/bg-primary.png')]">
      <motion.div
        className="flex items-center justify-center w-full h-full"
        animate={controls}
        initial={{ scale: 1 }}
      >
        <motion.img
          src="/logo.png"
          alt="logo"
          className="w-[12rem] h-[12rem]"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
