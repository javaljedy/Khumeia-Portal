'use client';

import { Coffee, Cake, MapPin, Instagram, Clock, ExternalLink, Box } from 'lucide-react';
import MenuNavigation from '../components/menu/MenuNavigation';

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
      
      <div id="carta-completa">
        <MenuNavigation />
      </div>
      {/* SECCIÓN TIENDA */}
     
     
      {/* SECCIÓN MAPA OPTIMIZADA */}
      <section className="py-12 px-6 bg-[#000000]"> {/* Reducido de py-24 a py-12 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center"> {/* gap reducido de 12 a 8 */}
          
          <div className="flex-1 text-left space-y-4"> {/* space-y reducido de 6 a 4 */}
            <h2 className="text-4xl font-serif uppercase tracking-tighter text-[#FDBE73]">Visítanos</h2>
            <p className="text-[#FDBE73]/70 leading-relaxed font-light text-sm">
              Te esperamos en el corazón de Galicia Mall Plaza.  <br />
              Local 220, Segundo Piso. Pereira, Risaralda. 
            </p>
          </div>
          
          {/* Contenedor del Mapa con Bordes Redondos */}
          <div className="flex-1 w-full h-[350px] rounded-3xl overflow-hidden border border-[#FDBE73]/20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 shadow-[0_0_30px_rgba(253,190,115,0.05)]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.946... (tu link completo)" 
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
