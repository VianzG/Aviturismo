import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 100], [0, 1]);
  
  const [scrolled, setScrolled] = useState(false);

  yRange.on("change", (v) => {
    if (v > 0.5 && !scrolled) setScrolled(true);
    if (v <= 0.5 && scrolled) setScrolled(false);
  });

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 font-sans ${
          scrolled 
            ? 'bg-sun-cream/95 backdrop-blur-md py-4 shadow-sm translate-y-0 opacity-100 pointer-events-auto' 
            : 'bg-transparent py-6 md:py-10 md:-translate-y-full md:opacity-0 md:pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          
          {/* Links Left */}
          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-gray/60">
            <a href="#expediciones" className="hover:text-pine-green transition-colors">Expediciones</a>
            <a href="#galeria" className="hover:text-pine-green transition-colors">Galería</a>
          </nav>

          {/* Logo (Centered) */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group z-50">
            <div className="w-16 h-16 transform transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
               <img 
                 src={logo} 
                 alt="Lumina Birding Logo" 
                 className={`w-full h-full object-contain transition-all duration-500 ${scrolled ? 'saturate-[1.2] brightness-[0.8]' : 'saturate-[1.2] brightness-[0.8] md:brightness-[100] md:invert'}`} 
               />
            </div>
          </a>

          {/* Links Right */}
          <nav className="hidden md:flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-gray/60">
            <a href="#nosotros" className="hover:text-pine-green transition-colors">Nosotros</a>
            <a href="#booking" className="px-6 py-2 border border-charcoal-gray/20 text-charcoal-gray rounded-full hover:bg-pine-green hover:text-white hover:border-transparent transition-all">
              Reservar
            </a>
          </nav>

          {/* Mobile Menu Toggle (Always visible on mobile) */}
          <button 
            className={`md:hidden z-50 relative transition-colors duration-300 ${scrolled ? 'text-charcoal-gray' : 'text-sun-cream'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          clipPath: isOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)' 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-charcoal-gray z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {['Expediciones', 'Galería', 'Nosotros', 'Booking'].map((item, i) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="text-3xl font-serif text-sun-cream hover:text-moss-gold transition-colors"
          >
            {item === 'Booking' ? 'Reservar' : item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
