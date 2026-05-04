import { motion } from 'motion/react';
import { Binoculars, Camera, Shield } from 'lucide-react';

const SERVICES = [
  {
    id: 'dawn',
    title: 'Dawn Premium',
    icon: <Binoculars size={24} />,
    description: 'Nuestra experiencia introductoria de lujo para observadores de aves entusiastas. Ideal para descubrir la diversidad mesoamericana con guías de primer nivel.',
    inclusions: [
      'Equipamiento óptico estándar de alta fidelidad',
      'Transporte 4x4',
      'Desayunos orgánicos de montaña',
      'Guía certificado bilingüe'
    ],
    destinations: 'Antigua | Lago de Atitlán',
    priceUSD: '120.00',
    priceGTQ: '935.00'
  },
  {
    id: 'photography',
    title: 'Photography Masterclass',
    icon: <Camera size={24} />,
    description: 'Diseñada específicamente para fotógrafos de ritmo lento. Maximizamos el tiempo en hides y puntos de alimentación garantizando la luz perfecta.',
    inclusions: [
      'Uso de lentes profesionales y trípodes',
      'Hides privados y camuflaje total',
      'Catering gourmet orgánico on-site',
      'Instructor de fotografía y guía'
    ],
    destinations: 'Las Verapaces | Tikal',
    priceUSD: '250.00',
    priceGTQ: '1,950.00'
  },
  {
    id: 'sanctuary',
    title: 'Private Sanctuary',
    icon: <Shield size={24} />,
    description: 'La cúspide del aviturismo. Acceso exclusivo a reservas privadas a puertas cerradas. Completa privacidad, lujo silencioso y observación VIP.',
    inclusions: [
      'Equipamiento óptico Swarovski/Zeiss',
      'Helicóptero o transporte 4x4 blindado',
      'Chef privado on-location',
      'Guía con certificación en WFR'
    ],
    destinations: 'Todos los destinos',
    priceUSD: '500.00',
    priceGTQ: '3,900.00'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-pine-green text-sun-cream py-32 px-6 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full z-10 leading-none rotate-180">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block origin-bottom -scale-x-100">
          <path fill="#F9F7F2" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Catálogo de Servicios</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sun-cream">Curaduría de Expediciones</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-charcoal-gray/20 border border-sun-cream/10 rounded-[32px] p-8 md:p-10 hover:border-moss-gold/50 transition-colors duration-500 flex flex-col"
            >
              <div className="text-moss-gold mb-6 bg-moss-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-serif">
                  {service.title}
                </h3>
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-sm font-sans tracking-widest text-moss-gold">${service.priceUSD} USD</span>
                  <span className="text-[10px] font-sans tracking-wider text-sun-cream/50">Q{service.priceGTQ} Aprox.</span>
                </div>
              </div>
              <p className="text-sun-cream/60 font-sans text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="mb-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sun-cream/40 mb-4 block">Inclusiones de Lujo</span>
                <ul className="space-y-3">
                  {service.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start text-xs font-sans text-sun-cream/80">
                      <span className="text-moss-gold mr-3 mt-0.5 opacity-70">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-sun-cream/10 mt-auto">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sun-cream/40 mb-2 block">Ruta Primaria</span>
                <p className="text-sm font-serif italic text-moss-gold/90">{service.destinations}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
