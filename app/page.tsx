import React from 'react';
import { Coffee, Cake, MapPin, Instagram } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FDBE73] font-sans">
      
      {/* SECCIÓN HERO: LOGO Y UBICACIÓN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
          <img 
            src="/LogoKhumeia.png" 
            alt="Khumeia Café Logo"
            className="rounded-full shadow-[0_0_60px_rgba(253,190,115,0.2)] border border-[#FDBE73]/10"
          />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4 uppercase">
          Khumeia Café
        </h1>
        
        <div className="flex items-center gap-2 text-[#F7941D] mb-12">
          <MapPin size={18} />
          <p className="tracking-[0.2em] uppercase text-sm font-bold">
            Galicia Mall Plaza • Pereira
          </p>
        </div>

        <p className="text-[#FDBE73]/70 font-light max-w-xl italic text-lg leading-relaxed mb-8">
          "La transformación del grano en ritual. Café de origen y procesos artesanales en el corazón de Risaralda."
        </p>

        <a 
          href="https://instagram.com/TU_USUARIO" // CAMBIA ESTO
          className="flex items-center gap-3 bg-[#FDBE73] text-[#420B00] px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          <Instagram size={20} />
          Sigue el Ritual
        </a>
      </section>

      {/* SECCIÓN PREVIEW: LOS TRES PILARES */}
      <section className="py-24 bg-[#0A0A0A] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Pilar 1: Café de Origen */}
          <div className="text-center p-8 border border-[#FDBE73]/10 hover:border-[#FDBE73]/40 transition-colors">
            <Coffee className="mx-auto mb-6 text-[#F7941D]" size={40} />
            <h3 className="text-2xl font-serif mb-4 uppercase">Café de Origen</h3>
            <p className="text-[#FDBE73]/60 font-light text-sm leading-relaxed">
              Granos seleccionados de las mejores fincas colombianas, respetando su trazabilidad y perfil sensorial único.
            </p>
          </div>

          {/* Pilar 2: Métodos de Filtrado */}
          <div className="text-center p-8 border border-[#FDBE73]/10 hover:border-[#FDBE73]/40 transition-colors">
            <div className="mb-6 flex justify-center italic font-serif text-3xl text-[#F7941D]">V60</div>
            <h3 className="text-2xl font-serif mb-4 uppercase">Métodos Manuales</h3>
            <p className="text-[#FDBE73]/60 font-light text-sm leading-relaxed">
              La precisión del Chemex, la claridad del V60 y la fuerza del Sifón Japonés en manos de baristas expertos.
            </p>
          </div>

          {/* Pilar 3: Pastelería */}
          <div className="text-center p-8 border border-[#FDBE73]/10 hover:border-[#FDBE73]/40 transition-colors">
            <Cake className="mx-auto mb-6 text-[#F7941D]" size={40} />
            <h3 className="text-2xl font-serif mb-4 uppercase">Pastelería de Autor</h3>
            <p className="text-[#FDBE73]/60 font-light text-sm leading-relaxed">
              Recetas artesanales horneadas diariamente, diseñadas para el maridaje perfecto con cada taza.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-12 border-t border-[#FDBE73]/5 text-center text-[#FDBE73]/30 text-[10px] tracking-[0.4em] uppercase">
        © 2026 Khumeia Café • Alquimia en Galicia Mall Plaza
      </footer>
    </div>
  );
}

