'use client';
import { useState } from 'react';
import { specialtyMethods, boutiqueBeans } from '../../data/menuData';
import MethodsSection from './MethodsSection';
import BoutiqueSection from './BoutiqueSection';

export default function MenuNavigation() {
  const [activeTab, setActiveTab] = useState('especialidad');

  const categories = [
    { id: 'especialidad', name: 'Barra de Especialidad' },
    { id: 'boutique', name: 'Boutique de Grano' },
    { id: 'clasicos', name: 'Cafetería Clásica' },
    { id: 'alquimia', name: 'Alquimia Fría' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Botones del Menú */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-[#FDBE73]/10 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all ${
                activeTab === cat.id 
                ? 'text-[#420B00] bg-[#FDBE73] font-bold' 
                : 'text-[#FDBE73] hover:bg-[#FDBE73]/10'
              } border border-[#FDBE73]/20 rounded-full`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Renderizado Condicional de Secciones */}
        <div className="transition-all duration-500">
          {activeTab === 'especialidad' && <MethodsSection />}
          {activeTab === 'boutique' && <BoutiqueSection />}
          {activeTab === 'clasicos' && (
            <div className="text-center py-20 text-[#FDBE73]/40 italic">
              Sección de Cafés Calientes en desarrollo...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
