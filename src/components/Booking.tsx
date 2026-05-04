import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Booking() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !destination) return;
    setIsSubmitting(true);

    try {
      // Sorteo Logic: 30 winners total (15 premium, 15 discount)
      // For demo purposes, we will make it random with a chance.
      // In a real app we would track exactly 30, but here we can just use probabilities.
      // Let's give a 30% chance to win something.
      const rand = Math.random();
      let prizeTier: string | null = null;
      if (rand < 0.15) {
        prizeTier = 'premium'; // 100% free
      } else if (rand < 0.3) {
        prizeTier = '70_discount'; // 70% or 90%
      }

      const bookingRef = doc(collection(db, 'bookings'));
      const bookingData = {
        fullName,
        email,
        destination,
        prizeTier,
        createdAt: serverTimestamp()
      };

      await setDoc(bookingRef, bookingData);
      
      // Navigate to itinerary
      navigate(`/itinerary/${bookingRef.id}`, { state: { prizeTier, fullName, email, destination } });
    } catch (error) {
      setIsSubmitting(false);
      handleFirestoreError(error, OperationType.CREATE, 'bookings');
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nombre Completo" 
                className="w-full bg-transparent border-b border-sun-cream/20 py-4 text-sun-cream placeholder:text-sun-cream/30 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm"
              />
            </div>
            <div>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo Electrónico" 
                className="w-full bg-transparent border-b border-sun-cream/20 py-4 text-sun-cream placeholder:text-sun-cream/30 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm"
              />
            </div>
            <div>
              <select 
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={`w-full bg-transparent border-b border-sun-cream/20 py-4 focus:outline-none focus:border-moss-gold transition-colors font-sans font-light text-sm appearance-none cursor-pointer ${destination ? 'text-sun-cream' : 'text-sun-cream/30'}`}
              >
                <option value="" disabled className="text-charcoal-gray">Destino de Interés</option>
                <option value="peten" className="text-charcoal-gray">Reserva de la Biosfera Maya (Petén)</option>
                <option value="atitlan" className="text-charcoal-gray">Tierras Altas (Atitlán)</option>
                <option value="tarrales" className="text-charcoal-gray">Reserva Los Tarrales</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center gap-3 w-full bg-moss-gold text-white py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-charcoal-gray transition-colors duration-500 mt-8 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Procesando...' : 'Solicitar Itinerario'}</span>
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
