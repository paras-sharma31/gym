import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    id: 1,
    content: `Sweat, Strength, Success – `,
  },
  {
    id: 2,
    content: `All in One Place!`,
  },
  {
    id: 3,
    content: `Strength Starts Here!`,
  },
  {
    id: 4,
    content: `Train Hard, Feel Amazing! `,
  },
];
const Banner = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative  flex items-center justify-center ">
      <img
        src="/images/fitness.jpg"
        alt="banner"
        className="w-full h-[600px] object-cover"
      />
      <div className="absolute bottom-[50px] w-full flex items-center justify-center flex-col">
        <AnimatePresence>
          <motion.div
            key={items[index].id}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <h2 className="text-4xl font-bold text-start font-sans">
              {items[index].content}
            </h2>
          </motion.div>
        </AnimatePresence>
        <p className="text-gray-500 pt-4 ">
          Get access to workout videos, fitness plans, and progress tracking
          tools
        </p>
      </div>
    </div>
  );
};

export default Banner;
