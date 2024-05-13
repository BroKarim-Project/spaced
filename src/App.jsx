import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <motion.div className="h-screen w-full bg-black flex items-center gap-2 justify-center">
          <p className="pb-4 text-xs tracking-tight text-white ">
            <NumberCounter end={100} start={0} delay="2" />
          </p>
          <h2 className=" text-lg tracking-tight text-white ">Spaced</h2>
        </motion.div>
      ) : (
        <>
          <Navigation />
          <Hero />
        </>
      )}
    </>
  );
}

export default App;
