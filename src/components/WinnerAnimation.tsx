import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function WinnerAnimation({ fullName, prizeTier, onClose }: { fullName: string, prizeTier: string, onClose: () => void }) {
  
  useEffect(() => {
    // Disable scroll while showing
    document.body.style.overflow = 'hidden';
    
    // Trigger confetti burst
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 }, colors: ['#C5A059', '#1C3120', '#F9F5EC'] });
    }, 250);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, []);

  const getPrizeText = () => {
    if (prizeTier === 'premium') return '¡Expedición 100% Gratuita Todo Incluido!';
    return '¡Cupón de Descuento Especial para su Estadía!';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-pine-green/95 backdrop-blur-sm p-4 text-center font-sans"
    >
      <motion.div 
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
        className="max-w-2xl bg-sun-cream rounded-[32px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Sorteo Exclusivo Lumina</span>
        
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal-gray mb-6">
          ¡Felicidades,<br className="hidden md:block"/> {fullName}!
        </h2>
        
        <p className="text-lg md:text-xl text-charcoal-gray/80 mb-8 font-light">
          Ha sido seleccionado como uno de nuestros 30 ganadores exclusivos.
        </p>

        <div className="bg-moss-gold/10 border border-moss-gold/30 rounded-2xl p-6 mb-10">
          <p className="text-2xl md:text-3xl font-serif text-moss-gold">
            {getPrizeText()}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="px-8 py-4 bg-pine-green text-white rounded-full font-sans uppercase tracking-[0.2em] text-xs font-semibold hover:bg-charcoal-gray transition-colors duration-500"
        >
          Ver Mi Itinerario
        </button>

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-moss-gold/5 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pine-green/5 rounded-tr-full pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
