interface ItemProps {
  name: string;
  price?: number;
  description?: string;
  tag?: string;
}

export default function SectionGrid({ items }: { items: ItemProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="group border border-[#FDBE73]/5 p-6 hover:border-[#FDBE73]/30 transition-all bg-[#050505]">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-serif text-[#FDBE73] uppercase">{item.name}</h4>
            {item.price && <span className="text-[#F7941D] font-mono">${item.price.toLocaleString()}</span>}
          </div>
          {item.description && <p className="text-xs text-[#FDBE73]/50 italic">{item.description}</p>}
          {item.tag && <span className="inline-block mt-4 text-[10px] text-[#F7941D] border border-[#F7941D]/30 px-2 py-0.5 rounded-full">{item.tag}</span>}
        </div>
      ))}
    </div>
  );
}
