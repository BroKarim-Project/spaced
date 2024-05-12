import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi penundaan sebelum menampilkan komponen Navigation dan Hero
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000); // Misalnya 10 detik penundaan, sesuaikan dengan kebutuhan kamu

    // Membersihkan timeout saat komponen unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <motion.div>
          <p className="mx-auto mt-64 max-w-2xl text-lg tracking-tight text-slate-700 ">
            <NumberCounter end={100} start={0} delay="10" />
          </p>
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

/*


<AnimateSharedLayout>
        <AnimatePresence>
          {loading ? (
            <motion.div>
              <PreLoader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Navigation />
              <Hero />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
*/
