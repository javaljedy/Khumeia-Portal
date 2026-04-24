'use client';

import { Coffee, Cake, MapPin, Instagram, Clock, ExternalLink, Box } from 'lucide-react';
import BoutiqueSection from '../components/menu/BoutiqueSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FDBE73] font-sans selection:bg-[#F7941D] selection:text-[#420B00]">
      
      {/* SECCIÓN HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
          <img 
            src="/LogoKhumeia.png" 
            alt="Khumeia Café Logo"
            className="rounded-full shadow-[0_0_70px_rgba(253,190,115,0.15)] object-cover border border-[#FDBE73]/10"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 uppercase">
          Khumeia Café
        </h1>
        
        <div className="flex flex-col items-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-[#F7941D]">
            <MapPin size={18} />
            <p className="tracking-[0.2em] uppercase text-sm font-bold">
              Galicia Mall Plaza • Local 220
            </p>
          </div>
          <span className="text-[10px] px-3 py-1 border border-[#F7941D]/40 rounded-full uppercase tracking-widest text-[#F7941D]">
            Abierto • El Ritual de la Alquimia
          </span>
        </div>

        <a 
          href="https://www.instagram.com/khumeiacafe" 
          target="_blank"
          className="flex items-center gap-3 bg-[#FDBE73] text-[#420B00] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          <Instagram size={20} />
          Instagram
        </a>
      </section>

      {/* SECCIÓN TIENDA */}
      <section id="boutique">
        <BoutiqueSection />
      </section>

      {/* SECCIÓN CARTA (BASADA EN TU DOCUMENTO) */}

      <section className="py-24 bg-[#050505] px-6 border-y border-[#FDBE73]/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif uppercase text-[#F7941D] border-b border-[#F7941D]/20 pb-2">Orígenes</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><span className="block font-bold">SUDÁN RUMÉ</span> Arándano, regaliz y miel de maple.</li>
              <li><span className="block font-bold">GESHA</span> Notas de jazmín, lima y té verde.</li>
              <li><span className="block font-bold">TANGERINE</span> Flor de azahar, mandarina y canela.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif uppercase text-[#F7941D] border-b border-[#F7941D]/20 pb-2">Métodos</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex justify-between"><span>V60</span></li>
              <li className="flex justify-between"><span>Chemex</span></li>
              <li className="flex justify-between"><span>Sifón Japonés</span></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif uppercase text-[#F7941D] border-b border-[#F7941D]/20 pb-2">Pastelería</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>Cheesecake Tiramisú</li>
              <li>Torta de Almojábana</li>
              <li>Torta Chocomaracuyá</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECCIÓN MAPA DIAGRAMADO */}
      <section className="py-24 px-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-5xl font-serif uppercase tracking-tighter">Visítanos</h2>
            <p className="text-[#FDBE73]/70 leading-relaxed font-light">
              Te esperamos en el corazón de Galicia Mall Plaza. <br />
              Local 220, Segundo Piso. Pereira, Risaralda.
            </p>
          </div>
          
          <div className="flex-1 w-full h-[400px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border border-[#FDBE73]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0123!2d-75.796803!3d4.8113455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNDAuOCJOIDc1wrA0Nyc0OC41Ilc!5e0!3m2!1ses!2sco!4v1710000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[#FDBE73]/10 text-center text-[10px] tracking-[0.4em] uppercase opacity-40">
        Khumeia Café • Alquimia y Origen • 2026
      </footer>
    </div>
  );
}
