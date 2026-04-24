// components/menu/MethodsSection.tsx
import { specialtyMethods } from '../../data/menuData';

export default function MethodsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {specialtyMethods.map((method) => (
        <div key={method.name} className="group p-6 border border-[#FDBE73]/10 bg-[#050505] hover:border-[#F7941D]/40 transition-all">
          <h3 className="text-2xl font-serif text-[#F7941D] mb-2 uppercase tracking-tighter">
            {method.name}
          </h3>
          <p className="text-[#FDBE73] text-sm mb-4 leading-relaxed">
            {method.resalta}
          </p>
          <div className="pt-4 border-t border-[#FDBE73]/5">
            <span className="text-[10px] text-[#FDBE73]/40 uppercase tracking-[0.2em]">
              Recomendado:
            </span>
            <p className="text-[11px] text-[#FDBE73]/80 uppercase mt-1">
              {method.recomendado}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
