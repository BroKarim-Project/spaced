import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Card({ image }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <motion.div className="relative overflow-hidden h-[200px] w-64 bg-slate-400 rounded-md flex justify-center items-center " onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
        <AnimatePresence>
          {showOverlay && (
            <motion.div className="absolute inset-0 z-10 flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full " />
              <motion.h1 className="bg-white font-semibold text-sm z-10 py-2 px-3 rounded-full flex item-center justify-center" initial={{ y: 10 }} animate={{ t: 0 }} exit={{ y: 10 }}>
                <span>Explore now</span>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <img src={image} className="object-cover h-full w-full" alt="" />
      </motion.div>
    </>
  );
}
