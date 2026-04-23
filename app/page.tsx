import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center text-center px-4">
      {/* Círculo decorativo tipo Alquimia */}
      <div className="w-32 h-32 border border-[#C5A059] rounded-full flex items-center justify-center mb-8 animate-pulse">
        <span className="text-[#C5A059] text-5xl font-serif">K</span>
      </div>

      <h1 className="text-[#F4F1EA] text-4xl md:text-6xl font-serif tracking-widest mb-4 uppercase">
        Khumeia Café
      </h1>
      
      <div className="w-16 h-px bg-[#C5A059] mb-6"></div>
      
      <p className="text-[#C5A059] font-light tracking-[0.3em] uppercase text-sm mb-12">
        La Alquimia del Origen
      </p>

      <p className="text-[#F4F1EA]/60 font-light max-w-md italic leading-relaxed">
        "Estamos calibrando los métodos y seleccionando los mejores granos. 
        Muy pronto, el ritual de la especialidad llegará a tu pantalla."
      </p>

      <div className="mt-16 flex gap-6 text-[#C5A059]/40 text-[10px] tracking-widest uppercase font-sans">
        <span>Est. 2026</span>
        <span>•</span>
        <span>Tostaduría de Especialidad</span>
      </div>
    </div>
  );
}
