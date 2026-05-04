import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="bg-charcoal-gray py-24 md:py-32 px-6 relative border-t border-sun-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 text-sun-cream"
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Centro de Operaciones</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Coordinación de Base y Logística</h2>
          <p className="text-sun-cream/60 font-sans text-sm leading-relaxed mb-6">
            Nuestras expediciones se articulan desde un hub central de planificación en las inmediaciones de Antigua Guatemala, facilitando un acceso rápido y seguro hacia las diferentes regiones biogeográficas del país.
          </p>
          <div className="flex flex-col gap-2 border-l border-moss-gold/30 pl-4 mt-8">
            <span className="font-mono text-xs text-sun-cream/40 uppercase">HQ L.B.</span>
            <span className="font-sans text-sm font-semibold">UMG Jocotenango Area</span>
            <span className="font-sans text-xs text-sun-cream/60">Sacatepéquez, Guatemala</span>
          </div>
        </motion.div>

        {/* Map Side */}
        <div className="w-full md:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#212121] border border-white/5 relative">
          <iframe 
            src="https://maps.google.com/maps?q=14.5823,-90.7486&hl=es&z=15&output=embed"
            className="w-full h-full grayscale-[50%] contrast-[1.1] opacity-80"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none mix-blend-color bg-pine-green opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
