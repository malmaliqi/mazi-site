export default function GraffitiMural({ opacity = 'opacity-[0.35]' }: { opacity?: string }) {
  const lines = [
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[10px]', color: 'text-[#6b1515]', offset: 'translate-x-4' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[14px]', color: 'text-[#7a1a1a]', offset: '-translate-x-8' },
    { text: "zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#666]', offset: 'translate-x-12' },
    { text: "ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[16px]', color: 'text-[#8a1e1e]', offset: '-translate-x-3' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[11px]', color: 'text-[#555]', offset: 'translate-x-20' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[13px]', color: 'text-[#8a0303]', offset: '-translate-x-14' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[8px]', color: 'text-[#5a5a5a]', offset: 'translate-x-6' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[15px]', color: 'text-[#701818]', offset: '-translate-x-10' },
    { text: "ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi", size: 'text-[10px]', color: 'text-[#555]', offset: 'translate-x-16' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[18px]', color: 'text-[#922020]', offset: '-translate-x-5' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#4a4a4a]', offset: 'translate-x-9' },
    { text: "ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[12px]', color: 'text-[#7a1515]', offset: '-translate-x-18' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[11px]', color: 'text-[#5a5a5a]', offset: 'translate-x-3' },
    { text: "zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi", size: 'text-[14px]', color: 'text-[#8a2020]', offset: '-translate-x-7' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[10px]', color: 'text-[#555]', offset: 'translate-x-14' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[15px]', color: 'text-[#751818]', offset: '-translate-x-12' },
    { text: "ma'zi, zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[8px]', color: 'text-[#5a5a5a]', offset: 'translate-x-8' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[16px]', color: 'text-[#922020]', offset: '-translate-x-4' },
    { text: "veq zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[11px]', color: 'text-[#4a4a4a]', offset: 'translate-x-11' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#7a1a1a]', offset: '-translate-x-9' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[13px]', color: 'text-[#6b1515]', offset: 'translate-x-7' },
    { text: "ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[10px]', color: 'text-[#666]', offset: '-translate-x-16' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[12px]', color: 'text-[#8a1e1e]', offset: 'translate-x-5' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[15px]', color: 'text-[#701818]', offset: '-translate-x-11' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#555]', offset: 'translate-x-18' },
    { text: "ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[11px]', color: 'text-[#922020]', offset: '-translate-x-6' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[14px]', color: 'text-[#5a5a5a]', offset: 'translate-x-13' },
    { text: "zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[8px]', color: 'text-[#7a1a1a]', offset: '-translate-x-15' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[16px]', color: 'text-[#6b1515]', offset: 'translate-x-2' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi", size: 'text-[10px]', color: 'text-[#5a5a5a]', offset: '-translate-x-8' },
  ];

  return (
    <div className={`absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden leading-[3] ${opacity}`} aria-hidden="true">
      {lines.map((line, i) => (
        <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} tracking-[5px] font-medium lowercase italic`}>
          {line.text}
        </p>
      ))}
    </div>
  );
}
