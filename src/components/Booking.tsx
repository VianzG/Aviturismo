import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="bg-charcoal-gray py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Aventura Personalizada</span>
            <h2 className="text-4xl md:text-5xl font-serif text-sun-cream mb-6">Diseñe su Expedición</h2>
            <p className="text-sun-cream/70 font-sans font-light mb-8 leading-relaxed text-sm md:text-base">
              Colabore con nuestros guías expertos para crear un itinerario a medida. 
              Garantizamos exclusividad y acceso a las reservas biológicas más restringidas de Guatemala.
            </p>
            
            <div className="space-y-6 text-sun-cream/80 font-sans text-sm font-light">
              <div className="flex items-center gap-4 border-b border-sun-cream/10 pb-4">
                <span className="text-moss-gold uppercase tracking-widest text-xs min-w-[80px]">Email</span>
                <span className="opacity-80">concierge@luminabirding.gt</span>
              </div>
              <div className="flex items-center gap-4 border-b border-sun-cream/10 pb-4">
                <span className="text-moss-gold uppercase tracking-widest text-xs min-w-[80px]">Teléfono</span>
                <span className="opacity-80">+502 5555 0100</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className="w-full bg-transparent border-b border-sun-cream/20 py-4 text-sun-cream placeholder:text-sun-cream/30 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="w-full bg-transparent border-b border-sun-cream/20 py-4 text-sun-cream placeholder:text-sun-cream/30 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm"
              />
            </div>
            <div>
              <select defaultValue="" className="w-full bg-transparent border-b border-sun-cream/20 py-4 text-sun-cream/80 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm appearance-none cursor-pointer">
                <option value="" disabled className="text-charcoal-gray">Destino de Interés</option>
                <option value="peten" className="text-charcoal-gray">Reserva de la Biosfera Maya (Petén)</option>
                <option value="atitlan" className="text-charcoal-gray">Tierras Altas (Atitlán)</option>
                <option value="tarrales" className="text-charcoal-gray">Reserva Los Tarrales</option>
              </select>
            </div>
            <button className="flex items-center justify-center gap-3 w-full bg-moss-gold text-white py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-charcoal-gray transition-colors duration-500 mt-8">
              <span>Solicitar Itinerario</span>
              <Send size={14} />
            </button>
          </motion.form>

        </div>
      </div>
      
      {/* Decorative large circle in background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sun-cream/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    </section>
  );
}
