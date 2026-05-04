import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, MapPin, Backpack, ChevronDown } from 'lucide-react';
import WinnerAnimation from './WinnerAnimation';

export default function ItineraryPage() {
  const location = useLocation();
  const state = location.state as { prizeTier?: string | null, fullName: string, email: string, destination: string } | null;
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // If they won a prize, show animation after a tiny delay
    if (state?.prizeTier) {
      setTimeout(() => setShowWinner(true), 500);
    }
  }, [state]);

  if (!state) {
    return (
      <div className="min-h-screen bg-sun-cream flex items-center justify-center">
        <p>No se encontró información de reserva.</p>
        <Link to="/" className="ml-4 underline text-moss-gold">Volver</Link>
      </div>
    );
  }

  const destinationNames: Record<string, string> = {
    peten: 'Reserva de la Biosfera Maya (Petén)',
    atitlan: 'Tierras Altas (Atitlán)',
    tarrales: 'Reserva Los Tarrales'
  };

  return (
    <main className="bg-sun-cream min-h-screen text-charcoal-gray font-sans selection:bg-moss-gold selection:text-sun-cream">
      <AnimatePresence>
        {showWinner && (
          <WinnerAnimation 
            fullName={state.fullName} 
            prizeTier={state.prizeTier!} 
            onClose={() => setShowWinner(false)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-moss-gold hover:text-pine-green transition-colors mb-12 uppercase tracking-[0.1em] text-xs font-semibold">
          <ArrowLeft size={14} />
          <span>Volver al Inicio</span>
        </Link>
        
        {/* Not a winner? Show Marketing Banner */}
        {!state.prizeTier && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-charcoal-gray p-8 rounded-[24px] text-center border border-moss-gold/30 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-sun-cream font-serif text-2xl mb-2">Descubra Nuestra Promoción Especial</h3>
              <p className="text-sun-cream/70 font-light max-w-lg mx-auto mb-6">
                Aunque no fue seleccionado en este sorteo, disfrute de un paquete extendido para su próxima visita a Lumina.
              </p>
              <button className="px-6 py-3 bg-moss-gold text-white rounded-full font-sans uppercase tracking-[0.1em] text-xs font-semibold hover:bg-white hover:text-charcoal-gray transition-colors">
                Reclamar mi Beneficio
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-moss-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Confirmación de Reserva</span>
          <h1 className="text-4xl md:text-6xl font-serif text-pine-green mb-6 leading-tight">
            Su Itinerario<br/>Preparado
          </h1>
          <p className="text-lg md:text-xl text-charcoal-gray/70 font-light mb-16 max-w-2xl">
            {state.fullName}, hemos registrado su solicitud para <strong>{destinationNames[state.destination]}</strong>. 
            Nuestro equipo de guías está diseñando una ruta exclusiva. A continuación, el esquema preliminar.
          </p>

          <div className="space-y-8">
            
            {/* Itinerary Item 1 */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-charcoal-gray/5 hover:border-moss-gold/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/4">
                  <span className="text-moss-gold font-sans uppercase tracking-widest text-xs font-semibold">Día 1</span>
                  <h3 className="text-xl font-serif text-pine-green mt-2">Llegada y Aclimatación</h3>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <div className="flex gap-4 items-start">
                    <Clock size={18} className="text-moss-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">14:00 - Check In</p>
                      <p className="text-charcoal-gray/70 text-sm font-light mt-1">Recepción en el eco-lodge. Briefing inicial de especies objetivo.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <MapPin size={18} className="text-moss-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Punto de Encuentro</p>
                      <p className="text-charcoal-gray/70 text-sm font-light mt-1">Lobby principal con el equipo de biólogos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary Item 2 */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-charcoal-gray/5 hover:border-moss-gold/30 transition-colors relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-2 bg-moss-gold"></div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/4">
                  <span className="text-moss-gold font-sans uppercase tracking-widest text-xs font-semibold">Día 2</span>
                  <h3 className="text-xl font-serif text-pine-green mt-2">La Expedición al Amanecer</h3>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <div className="flex gap-4 items-start">
                    <Clock size={18} className="text-moss-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">04:30 - Salida al bosque</p>
                      <p className="text-charcoal-gray/70 text-sm font-light mt-1">El mejor horario para la actividad de aves endémicas en el dosel.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Backpack size={18} className="text-moss-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Equipo Recomendado</p>
                      <p className="text-charcoal-gray/70 text-sm font-light mt-1">Capa de lluvia ligera, binoculares (si los tiene, o le proveemos), botas de senderismo y cámara.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-charcoal-gray/60 italic font-serif text-lg">
              Pronto recibirá los detalles confirmados en su correo ({state.email}).
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
