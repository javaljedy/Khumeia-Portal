import React from 'react';
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
          "El mejor café del campo en tu taza. Una experiencia de alquimia sensorial en el corazón de Pereira."
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
          <button className="flex items-center gap-3 border border-[#FDBE73]/30 text-[#FDBE73] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#FDBE73]/5 transition-all">
            Ver Carta Completa
          </button>
        </div>
      </section>

      {/* SECCIÓN NUESTRA CARTA (MÉTODOS Y CAFÉS) */}
      <section className="py-24 bg-[#050505] px-6 border-y border-[#FDBE73]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.2em] mb-4">Nuestra Selección</h2>
            <p className="text-[#F7941D] text-xs uppercase tracking-widest italic">Explora los perfiles de nuestra alquimia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Métodos de Filtrado  */}
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <div className="flex items-center gap-3 mb-6 text-[#F7941D]">
                <Box size={24} />
                <h3 className="text-xl font-serif uppercase">Métodos</h3>
              </div>
              <ul className="space-y-3 text-sm font-light text-[#FDBE73]/80">
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Chemex (Claridad)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>V60 (Complejidad)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Sifón Japonés (Delicado)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Prensa Francesa (Cuerpo)</span></li>
              </ul>
            </div>

            {/* Cafés de Origen  */}
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <div className="flex items-center gap-3 mb-6 text-[#F7941D]">
                <Coffee size={24} />
                <h3 className="text-xl font-serif uppercase">Orígenes</h3>
              </div>
              <ul className="space-y-3 text-sm font-light text-[#FDBE73]/80">
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Gesha (Jazmín/Lima)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Sudán Rumé (Miel de Maple)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Tangerine (Mandarina)</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Catipoe (Vino/Frutos Rojos)</span></li>
              </ul>
            </div>

            {/* Pastelería Artesanal [cite: 33, 41, 47] */}
            <div className="p-8 border border-[#FDBE73]/10 bg-black/40">
              <div className="flex items-center gap-3 mb-6 text-[#F7941D]">
                <Cake size={24} />
                <h3 className="text-xl font-serif uppercase">Pastelería</h3>
              </div>
              <ul className="space-y-3 text-sm font-light text-[#FDBE73]/80">
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Cheesecake Tiramisú</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Torta de Almojábana</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Torta Chocomaracuyá</span></li>
                <li className="flex justify-between border-b border-[#FDBE73]/5 pb-1"><span>Brownie con Helado</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MAPA Y UBICACIÓN */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter">Encuéntranos</h2>
            <p className="text-[#FDBE73]/70 text-lg font-light leading-relaxed">
              Estamos ubicados en la zona de mayor crecimiento de Pereira, dentro de <strong>Galicia Mall Plaza</strong>. Un espacio diseñado para disfrutar de la calma y la excelencia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#FDBE73]">
                <MapPin size={20} className="text-[#F7941D]" />
                <span className="uppercase tracking-widest text-sm">Vía Cerritos, Pereira - Risaralda</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-none overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-[#FDBE73]/20">
            <iframe 
              src="https://maps.app.goo.gl/XTxZGDsbDzGv72UW6" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[#FDBE73]/10 text-center opacity-40">
        <p className="text-[9px] tracking-[0.6em] uppercase">Khumeia Café • Pereira • 2026</p>
      </footer>
    </div>
  );
}
