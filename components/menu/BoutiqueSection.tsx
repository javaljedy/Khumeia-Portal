// components/menu/BoutiqueSection.tsx
import { boutiqueBeans } from '../../data/menuData';

export default function BoutiqueSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {boutiqueBeans.map((bean) => (
        <div key={bean.name} className="border border-[#FDBE73]/20 p-4 rounded-lg hover:bg-[#FDBE73]/5 transition-colors">
          <span className="text-[10px] text-[#F7941D] font-bold uppercase">{bean.process}</span>
          <h3 className="text-xl font-serif text-[#FDBE73]">{bean.name}</h3>
          <p className="text-sm text-[#FDBE73]/60 italic">{bean.notes}</p>
          <p className="mt-4 font-bold text-[#FDBE73]">${bean.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
