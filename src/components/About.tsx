import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="bg-sun-cream py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[3/4] overflow-hidden bg-pine-green rounded-[24px]">
            <img 
              src="https://images.unsplash.com/photo-1590402241513-ee4e7ce21c27?q=80&w=2574&auto=format&fit=crop" 
              alt="Guía avistando aves" 
              className="w-full h-full object-cover filter grayscale-[30%] opacity-90 transition-transform duration-[2s] hover:scale-105"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-moss-gold/30 flex items-center justify-center p-2 bg-sun-cream">
             <div className="w-full h-full border border-pine-green/10 flex items-center justify-center text-center">
                 <span className="font-serif italic text-charcoal-gray text-sm leading-tight">Desde<br/>2010</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Nuestra Filosofía</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-gray mb-8">Más allá del Avistamiento</h2>
          <div className="space-y-6 text-charcoal-gray/70 font-sans font-light leading-relaxed">
            <p>
              Lumina Birding nace de la convicción de que la observación de aves no es solo un conteo de especies, sino un acto de profunda conexión y respeto por los ecosistemas más frágiles de Mesoamérica.
            </p>
            <p>
              Nuestra base en Guatemala nos permite acceder a un nivel de endemismo único. Mantenemos relaciones estrechas con investigadores locales y comunidades indígenas, asegurando que cada expedición no solo enriquezca al viajero, sino que contribuya directamente a la conservación del hábitat.
            </p>
            <p className="border-l-2 border-moss-gold pl-6 py-2 italic text-charcoal-gray">
              "Silencio, paciencia y reverencia. El bosque se revela solo ante aquellos que saben esperar."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
