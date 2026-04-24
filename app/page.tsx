import React from 'react';
import { Coffee, Cake, MapPin, Instagram, Clock, ExternalLink } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FDBE73] font-sans">
      
      {/* SECCIÓN HERO: LOGO Y UBICACIÓN PRINCIPAL */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
          <img 
            src="/LogoKhumeia.png" 
            alt="Khumeia Café Logo"
            className="rounded-full shadow-[0_0_60px_rgba(253,190,115,0.2)] border border-[#FDBE73]/10 object-cover"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 uppercase">
          Khumeia Café
        </h1>
        
        <div className="flex items-center gap-2 text-[#F7941D] mb-12">
          <MapPin size={18} />
          <p className="tracking-[0.2em] uppercase text-sm font-bold">
            Galicia Mall Plaza • Pereira
          </p>
        </div>

        <p className="text-[#FDBE73]/70 font-light max-w-xl italic text-lg md:text-xl leading-relaxed mb-10">
          "La transformación del grano en ritual. Café de origen y procesos artesanales en el corazón de Risaralda."
        </p>

        <a 
          href="https://www.instagram.com/khumeiacafe" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#FDBE73] text-[#420B00] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#F7941D] transition-all transform hover:scale-105 shadow-lg shadow-[#FDBE73]/10"
        >
          <Instagram size={22} />
          Sigue el Ritual
        </a>
      </section>

      {/* SECCIÓN PROPUESTA: CAFÉ, MÉTODOS Y REPOSTERÍA */}
      <section className="py-24 bg-[#050505] px-6 border-y border-[#FDBE73]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest mb-4">Nuestra Alquimia</h2>
            <div className="w-20 h-1 bg-[#FDBE73] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Café de Origen */}
            <div className="group text-center p-10 border border-[#FDBE73]/5 hover:bg-[#FDBE73]/5 transition-all">
              <Coffee className="mx-auto mb-6 text-[#F7941D] group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight">Café de Origen</h3>
              <p className="text-[#FDBE73]/60 font-light leading-relaxed">
                Trazabilidad total desde fincas seleccionadas. Perfiles sensoriales únicos resaltados por un tueste artesanal.
              </p>
            </div>

            {/* Métodos */}
            <div className="group text-center p-10 border border-[#FDBE73]/5 hover:bg-[#FDBE73]/5 transition-all">
              <div className="mb-6 h-12 flex items-center justify-center italic font-serif text-4xl text-[#F7941D] group-hover:scale-110 transition-transform">
                V60
              </div>
              <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight">Métodos de Filtrado</h3>
              <p className="text-[#FDBE73]/60 font-light leading-relaxed">
                Extracciones precisas en Chemex, V60 y Sifón para los paladares más exigentes de la región.
              </p>
            </div>

            {/* Pastelería */}
            <div className="group text-center p-10 border border-[#FDBE73]/5 hover:bg-[#FDBE73]/5 transition-all">
              <Cake className="mx-auto mb-6 text-[#F7941D] group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight">Pastelería de Autor</h3>
              <p className="text-[#FDBE73]/60 font-light leading-relaxed">
                Recetas propias que honran la tradición artesanal, diseñadas para elevar cada sorbo de café.
              </p>
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
                <Clock size={20} className="text-[#F7941D]" />
                <span className="uppercase tracking-widest text-sm font-bold">Próxima Apertura 2026</span>
              </div>
              <div className="flex items-center gap-4 text-[#FDBE73]">
                <MapPin size={20} className="text-[#F7941D]" />
                <span className="uppercase tracking-widest text-sm">Vía Cerritos, Pereira - Risaralda</span>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/TwEy1u59OI4Rd__GTU3yBeM" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-[#F7941D] hover:text-[#FDBE73] transition-colors uppercase tracking-[0.2em] text-xs font-bold"
            >
              Abrir en Google Maps <ExternalLink size={14} />
            </a>
          </div>

          <div className="h-[400px] w-full rounded-none overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-[#FDBE73]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.241!2d-75.796803!3d4.8113455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387dee6232014f%3A0x6305f24d4dd2ff77!2sGalicia%20Mall%20Plaza!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#FDBE73]/10 text-center">
        <p className="text-[#FDBE73]/30 text-[10px] tracking-[0.5em] uppercase">
          Khumeia Café © 2026 • La Alquimia del Origen
        </p>
      </footer>
    </div>
  );
}
