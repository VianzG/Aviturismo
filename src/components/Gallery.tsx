import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1606907568152-cb4dc11926c4?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549471013-3364d73206fb?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1444464666168-49b626d49c61?q=80&w=2669&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518992028580-14d528dc282c?q=80&w=2692&auto=format&fit=crop'
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="galeria" className="bg-pine-green py-32 overflow-hidden relative" ref={targetRef}>
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">El Lente</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sun-cream">Belleza en Detalle</h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 relative z-10 pl-6 md:pl-0">
        <motion.div style={{ x: x1 }} className="flex gap-8 w-[200vw] md:w-[150vw]">
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <div key={i} className="w-[60vw] md:w-[30vw] h-[40vh] md:h-[50vh] shrink-0 overflow-hidden rounded-[24px]">
              <img src={src} alt="Rare bird sighting" className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-crosshair" />
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2, marginLeft: "-20%" }} className="flex gap-8 w-[200vw] md:w-[150vw]">
          {[...IMAGES, ...IMAGES].reverse().map((src, i) => (
            <div key={i} className="w-[50vw] md:w-[25vw] h-[30vh] md:h-[40vh] shrink-0 overflow-hidden rounded-[24px]">
              <img src={src} alt="Rare bird sighting" className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-crosshair" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
        <h2 className="text-[20vw] font-serif text-sun-cream uppercase tracking-tighter whitespace-nowrap">
          Rareza
        </h2>
      </div>

      {/* Wave Transition Top (from previous section, logically goes here if needed, but we used color block for now). Let's keep it minimal without wave here but add wave at bottom */}
      <div className="absolute bottom-0 w-full z-30 leading-none">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block transform origin-bottom fill-charcoal-gray">
          <path d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
