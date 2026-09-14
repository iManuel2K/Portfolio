import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] selection:bg-[#E5484D] selection:text-white relative">
      {/* Background Grid & Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Global Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Content Layout strictly following: Hero -> Marquee -> About -> Services -> Projects */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Marquee />
        <About />
        <Services onOpenContact={() => setContactOpen(true)} />
        <Projects />
      </main>

      {/* Global Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Contact Modal Dialog */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
