import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center text-center px-4">
      
      {/* Contenedor del Logo */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
        {/* Aquí puedes colocar la imagen una vez la subas a GitHub */}
        <img 
          src="./public/LogoKhumeia.png" 
          alt="Khumeia Café Logo"
          className="rounded-full shadow-[0_0_50px_rgba(253,190,115,0.2)]"
        />
      </div>

      {/* Título con fuente Cinzel (muy similar a Cincoyo para web) */}
      <h1 className="text-[#FDBE73] text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
        Khumeia Café
      </h1>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#420B00] to-transparent mb-6"></div>
      
      <p className="text-[#F7941D] font-light tracking-[0.4em] uppercase text-sm mb-12">
        La Alquimia del Origen
      </p>

      <p className="text-[#FDBE73]/70 font-light max-w-lg italic leading-relaxed text-lg">
        "Estamos calibrando los métodos y seleccionando los mejores granos. 
        El ritual de la especialidad está por comenzar."
      </p>

      <div className="mt-20 flex gap-8 text-[#420B00] bg-[#FDBE73] px-6 py-2 rounded-full text-[10px] tracking-widest uppercase font-bold">
        <span>Próximamente 2026</span>
        <span>•</span>
        <span>Café de Especialidad</span>
      </div>
    </div>
  );
}
