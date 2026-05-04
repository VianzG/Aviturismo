/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expeditions from './components/Expeditions';
import About from './components/About';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-sun-cream min-h-screen text-charcoal-gray selection:bg-moss-gold selection:text-sun-cream font-sans">
      <Navbar />
      <Hero />
      <Expeditions />
      <Gallery />
      <About />
      <Booking />
      <Footer />
    </main>
  );
}
