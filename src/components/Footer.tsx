import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-charcoal-gray pt-12 pb-6 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
        
        <a href="#" className="flex flex-col items-center md:items-start group cursor-pointer">
          <div className="w-16 h-16 transform transition-transform group-hover:scale-105 flex items-center justify-center relative md:-ml-2">
             <img 
               src={logo} 
               alt="Lumina Birding Logo" 
               className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
             />
          </div>
        </a>

        <div className="flex gap-6 text-sun-cream/50 text-xs font-light uppercase tracking-widest">
          <a href="#" className="hover:text-moss-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-moss-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-moss-gold transition-colors">Journal</a>
        </div>

        <div className="text-sun-cream/30 text-xs font-light">
          © {new Date().getFullYear()} Lumina Birding. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
