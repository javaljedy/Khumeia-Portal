interface ItemProps {
  name: string;
  price?: number;
  description?: string;
  tag?: string;
}

export default function SectionGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> {/* gap-3 es más compacto */}
      {items.map((item, index) => (
        <div key={index} className="p-4 border border-[#FDBE73]/5 bg-[#050505]"> 
          {/* p-4 en lugar de p-6 ahorra mucho espacio visual */}
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-sm font-serif text-[#FDBE73] uppercase">{item.name}</h4>
            <span className="text-[#F7941D] text-xs">${item.price?.toLocaleString()}</span>
          </div>
          {item.description && <p className="text-xs text-[#FDBE73]/50 italic">{item.description}</p>}
          {item.tag && <span className="inline-block mt-4 text-[10px] text-[#F7941D] border border-[#F7941D]/30 px-2 py-0.5 rounded-full">{item.tag}</span>}
        </div>
      ))}
    </div>
  );
}
