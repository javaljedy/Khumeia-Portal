'use client'; // Añadimos esto para asegurar compatibilidad con componentes interactivos

import { Coffee, Cake, MapPin, Instagram, Clock, ExternalLink, Box } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FDBE73] font-sans selection:bg-[#F7941D] selection:text-[#420B00]">
      
      {/* SECCIÓN HERO: LOGO Y ESTADO ACTUAL */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 transition-transform hover:scale-105 duration-700">
          <img 
            src="/LogoKhumeia.png" 
            alt="Khumeia Café Logo"
            className="rounded-full shadow-[0_0_70px_rgba(253,190,115,0.15)] object-cover"
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
          <span className="bg-[#F7941D]/10 text-[#F7941D] text-[10px] px-3 py-1 rounded-full border border-[#F7941D]/20 uppercase tracking-[0.3em] font-bold mt-2">
            ¡Ya estamos abiertos!
          </span>
        </div>

        <p className="text-[#FDBE73]/70 font-light max-w-xl italic text-lg md:text-xl leading-relaxed mb-10">
          "El mejor café del campo en tu taza[cite: 2]. Una experiencia de alquimia sensorial en el corazón de Pereira."
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.instagram.com/khumeiacafe" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FDBE73] text-[#420B00] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#F7941D] transition-all shadow-lg"
          >
            <Instagram size={20} />
            Instagram
          </a>
        </div>
      </section>

      {/* SECCIÓN MÉTODOS Y CAFÉS (Datos de la Carta) */}
      <section className="py-24 bg-[#050505] px-6 border-y border-[#FDBE73]/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <h3 className="text-xl font-serif uppercase mb-6 text-[#F7941D]">Métodos</h3>
              <ul className="space-y-3 text-sm font-light">
                <li>V60: Acidez brillante [cite: 12]</li>
                <li>Chemex: Claridad y notas florales [cite: 12]</li>
                <li>Sifón Japonés: Perfil delicado [cite: 12]</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <h3 className="text-xl font-serif uppercase mb-6 text-[#F7941D]">Orígenes</h3>
              <ul className="space-y-3 text-sm font-light">
                <li>Gesha: Jazmín y lima [cite: 15]</li>
                <li>Sudán Rumé: Arándano y miel de maple [cite: 15]</li>
                <li>Tangerine: Mandarina y canela [cite: 15]</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <h3 className="text-xl font-serif uppercase mb-6 text-[#F7941D]">Acompañantes</h3>
              <ul className="space-y-3 text-sm font-light">
                <li>Cheesecake Tiramisú [cite: 38]</li>
                <li>Torta de Almojábana [cite: 44]</li>
                <li>Brownie con helado [cite: 35]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MAPA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-[400px] w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-[#FDBE73]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2443!2d-75.7968!3d4.8113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387df2d636013f%3A0x2305f24d4dc6ff77!2sGalicia%20Mall%20Plaza!5e0!3m2!1ses!2sco!4v1714000000000!5m2!1ses!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center opacity-40 text-[9px] tracking-[0.6em] uppercase">
        Khumeia Café • Galicia Mall Plaza Local 220 
      </footer>
    </div>
  );
}
