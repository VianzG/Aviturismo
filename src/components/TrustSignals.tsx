import { motion } from 'motion/react';
import { Satellite, GraduationCap, HeartHandshake, Shield } from 'lucide-react';

const PROTOCOLS = [
  {
    icon: <Satellite size={20} strokeWidth={1.5} />,
    title: 'Comunicación Satelital',
    description: 'Conectividad global asegurada 24/7 en las reservas más remotas del bosque nuboso guatemalteco.'
  },
  {
    icon: <HeartHandshake size={20} strokeWidth={1.5} />,
    title: 'Seguros Internacionales',
    description: 'Pólizas completas de evacuación y asistencia médica de élite para tranquilidad absoluta.'
  },
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: 'Certificación WFR',
    description: 'Nuestro equipo de guías cuenta con estricta certificación Wilderness First Responder.'
  }
];

export default function TrustSignals() {
  return (
    <section className="bg-sun-cream text-charcoal-gray py-24 md:py-32 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Safety & Protocols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Protocolos de Élite</span>
            <h2 className="text-4xl md:text-5xl font-serif text-pine-green mb-8 leading-tight">Seguridad Inquebrantable en Tiempos de Exploración.</h2>
            <p className="text-charcoal-gray/70 font-sans text-base leading-relaxed max-w-lg mb-10">
              Nuestra prioridad absoluta es resguardar la majestuosidad de la experiencia. Con logística de grado militar fusionada con servicio boutique, garantizamos expediciones perfectamente orquestadas.
            </p>
          </motion.div>

          <div className="space-y-6">
            {PROTOCOLS.map((protocol, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6 p-6 md:p-8 bg-white border border-charcoal-gray/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="text-pine-green bg-pine-green/5 p-4 rounded-full flex-shrink-0">
                  {protocol.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal-gray mb-2">{protocol.title}</h3>
                  <p className="text-sm font-sans text-charcoal-gray/60 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-t border-charcoal-gray/10 pt-20"
        >
          <div className="text-center mb-16">
            <span className="text-charcoal-gray/40 font-sans uppercase tracking-[0.2em] text-[10px] font-bold">Nuestros Aliados y Patrocinadores Estratégicos</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 items-center justify-items-center opacity-70 grayscale">
             {/* Placeholder Logos substituting real partners */}
             <div className="flex items-center gap-2 font-serif text-lg md:text-xl font-bold tracking-tight text-pine-green hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                <Shield size={24} /> <span>GLOBAL TRAVEL</span>
             </div>
             <div className="flex items-center gap-2 font-sans font-black italic text-xl md:text-2xl tracking-tighter text-charcoal-gray hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                NATURE OPTICS
             </div>
             <div className="flex items-center gap-2 font-serif font-light text-xl md:text-2xl text-moss-gold hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                CONSERVA
             </div>
             <div className="flex items-center gap-2 font-mono uppercase tracking-widest text-sm md:text-base font-semibold text-charcoal-gray hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                <GraduationCap size={20} /> WFR INSTITUT
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
