'use client';

import { motion } from "framer-motion";

const animation = {
  hide: { x: 0, opacity: 0 },
  show: { x: 20, opacity: 1 },
};

export default function AllFavTechs() {
  return (
    <>
      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        <p className="text-base text-center lg:text-start mb-2.5 text-gray-400">
          Your content goes here
        </p>
      </motion.div>
    </>
  );
}
