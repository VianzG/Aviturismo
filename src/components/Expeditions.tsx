import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import imgGuacamalla from '../images/Expediciones/guacamalla.jpg';
import imgAtitlan from '../images/Expediciones/Atitlan.jpg';
import imgQuetzal from '../images/Expediciones/Quetzal.jpg';

const EXPEDITIONS = [
  {
    id: 'peten',
    title: 'Reserva de la Biosfera Maya',
    subtitle: 'El Dominio del Jaguar y el Tucán',
    image: imgGuacamalla,
    description: 'Adéntrate en las profundidades de Petén. Observación en el dosel forestal junto a antiguos templos mayas.',
    days: '5 Días',
    birds: '350+ Especies'
  },
  {
    id: 'atitlan',
    title: 'Tierras Altas y Atitlán',
    subtitle: 'Endemismo en Cumbres Volcánicas',
    image: imgAtitlan,
    description: 'En busca del Pavo de Cacho y coloridos colibríes endémicos en los mágicos bosques nubosos del lago más hermoso del mundo.',
    days: '4 Días',
    birds: '200+ Especies'
  },
  {
    id: 'bocas',
    title: 'Reserva Los Tarrales',
    subtitle: 'El Corredor del Quetzal',
    image: imgQuetzal,
    description: 'Una inmersión exclusiva en la vertiente del Pacífico para observar al escurridizo Quetzal resplandeciente.',
    days: '3 Días',
    birds: '280+ Especies'
  }
];

export default function Expeditions() {
  return (
    <section id="expediciones" className="bg-sun-cream py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Nuestras Rutas</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-gray">Expediciones Icónicas</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPEDITIONS.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer rounded-[32px]"
            >
              {/* Background Image with Hover Scale */}
              <motion.div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-pine-green/90 via-pine-green/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-moss-gold font-sans text-xs tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {exp.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif text-sun-cream mb-4">{exp.title}</h3>
                  <p className="text-sun-cream/70 font-sans text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <div className="flex gap-4">
                      <span className="text-sun-cream/90 font-sans text-xs uppercase tracking-wider">{exp.days}</span>
                      <span className="text-sun-cream/50 font-sans text-xs">|</span>
                      <span className="text-sun-cream/90 font-sans text-xs uppercase tracking-wider">{exp.birds}</span>
                    </div>
                    <ArrowRight className="text-moss-gold" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
