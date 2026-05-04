import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import logo from '../images/logo.png';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full overflow-hidden bg-sun-cream flex flex-col md:flex-row font-sans text-charcoal-gray"
    >
      {/* PANEL VISUAL (Izquierda) - Ocupa 50% en desktop mediante el S-Curve */}
      <div className="relative w-full h-[60vh] md:h-full md:w-[60vw] md:absolute md:left-0 md:top-0 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle Parallax Overlay */}
          <div className="absolute inset-0 bg-pine-green/20 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?q=80&w=2670&auto=format&fit=crop" 
            alt="Quetzal en el bosque nuboso de Guatemala" 
            className="w-full h-full object-cover scale-110 object-[center_30%]"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* ONDA ORGÁNICA (S-Curve) SVG - Desktop Only */}
      {/* Rellena la parte derecha con el color crema (sun-cream) creando una máscara suave sobre la imagen */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* S-curve logic: Starts at x=50, curves right to 60, curves left to 40, ends at 50 */}
          <path d="M 50,0 C 60,30 40,70 50,100 L 100,100 L 100,0 Z" className="fill-sun-cream" />
        </svg>
      </div>

      {/* PANEL DE CONTENIDO (Derecha) - Apilado abajo en mobile, absolute a la derecha en desktop */}
      <div className="relative z-20 w-full md:w-[50vw] md:absolute md:right-0 md:top-0 md:h-full flex flex-col justify-center px-8 py-20 md:px-12 lg:px-20 xl:px-24 bg-sun-cream md:bg-transparent">
        
        {/* Menú de Navegación dedicado para el Hero (Desktop) */}
        <div className="hidden md:flex absolute top-10 right-10 lg:right-16 gap-8 items-center text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold text-charcoal-gray/50 z-30">
          <a href="#expediciones" className="hover:text-pine-green transition-colors">Expediciones</a>
          <a href="#galeria" className="hover:text-pine-green transition-colors">Galería</a>
          <a href="#booking" className="px-6 py-3 bg-moss-gold/90 text-white rounded-full hover:bg-pine-green transition-all shadow-md">
            Reservar Ahora
          </a>
        </div>

        {/* Cita rápida mobile (menú global maneja mobile) */}
        <div className="md:hidden flex justify-center mb-12">
          <a href="#booking" className="px-6 py-3 bg-moss-gold/90 text-[10px] uppercase tracking-[0.2em] font-semibold text-white rounded-full shadow-md">
            Reservar Ahora
          </a>
        </div>

        {/* Bloque de Texto Central */}
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-lg mx-auto md:mx-0 md:ml-[5%] lg:ml-[10%]"
        >
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.08em] leading-[1.1] text-charcoal-gray mb-6 font-sans uppercase"
          >
            Aviturismo <br className="hidden md:block" /> Guatemala
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-charcoal-gray/70 text-base md:text-lg lg:text-xl font-serif italic mb-10 leading-relaxed max-w-sm"
          >
            Una inmersión profunda en la riqueza biológica de Mesoamérica, tejida con elegancia y precisión.
          </motion.p>

          {/* Ancla de Marca (Logo) */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="w-56 md:w-72 lg:w-80 xl:w-[350px] mt-4"
          >
             <img 
               src={logo} 
               alt="Lumina Birding Anchor Logo" 
               className="w-full h-auto object-contain saturate-[1.2] brightness-[0.4] opacity-90 transition-transform duration-700 hover:scale-[1.02]"
             />
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract SVG Forest Layer (The Wave Divider) at bottom matching overall theme - Moved forward to overmount S-Curve if needed, but not necessary here as it's separate sections */}
    </section>
  );
}
