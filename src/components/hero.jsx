import { animate, useMotionValue, motion } from 'framer-motion';
import Card from './card';
import useMeasure from 'react-use-measure';
import { useEffect, useRef } from 'react';


export default function Hero() {
  const images = ['/image-1.jpg', '/image-2.jpg', '/image-3.jpg', '/image-4.jpg', '/image-5.jpg', '/image-6.jpg', '/image-7.jpg'];
  const refa = useRef(null);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  useEffect(() => {
    const container = ref.current;

    const handleWheel = (e) => {
      // Prevent scrolling when the mouse is over the carousel
      if (container && container.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.body.style.overflowX = 'hidden'; // Hide horizontal scrollbar on the body

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflowX = ''; // Reset overflow style when component unmounts
    };
  }, []);

  return (
    <>
      <div className="mx-auto relative overflow-hidden h-full px-4 sm:px-6 lg:px-8  text-center md:pt-0 pt-4" style={{ overscrollBehaviorX: 'contain' }} ref={refa}>
        <h1 className="mx-auto max-w-4xl font-display text-3xl sm:text-5xl font-medium tracking-tight text-slate-900 ">Explore and Experience</h1>
        <p className="mx-auto mt-2 max-w-2xl text-xs md:text-lg tracking-tight text-slate-700 sm:mt-6">There is much more to avoid thath the eyes can see. Lets go to the place where gravity doesn't matter.</p>
        <div className="mt-4 flex flex-col justify-center gap-y-5 sm:mt-4 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <a
            className="group inline-flex items-center justify-center  py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#0010ff] text-white hover:bg-white hover:text-black active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
            href="#"
          >
            Start your journey
          </a>
        </div>
        <motion.div className="absolute left-0 overflow-x-hidden flex gap-4 md:mt-6 mt-8" ref={ref} style={{ x: xTranslation }}>
          {[...images, ...images].map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </motion.div>

        <p className="mx-auto mt-64 max-w-2xl text-lg tracking-tight text-slate-700 ">The travel agency that'll show your earth isn't flat</p>
      </div>
    </>
  );
}
