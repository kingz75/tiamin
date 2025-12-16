import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images from src
import Bg1 from "../../assets/images/aboutbg1.jpg";
import Bg2 from "../../assets/images/aboutbg2.jpg";

export default function Home() {
  const [activeBg, setActiveBg] = useState(1);

  const backgrounds = {
    1: Bg1,
    2: Bg2,
  };

  // Auto switch background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-130px)]  overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${backgrounds[activeBg]})`,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      </AnimatePresence>

      {/* Content at Bottom */}
      <div className="absolute bottom-14 left-0 w-full   z-10 text-white ">
        <h1 className="text-[50px] font-extrabold leading-[60px]  max-w-[1370px] mx-auto flex px-[100px]  ">
          Provides integrated EPC <br />
          capabilities across the <br />
          oil & gas project lifecycle
        </h1>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />
    </div>
  );
}
