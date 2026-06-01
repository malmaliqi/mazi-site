"use client";

import { useEffect, useRef, useState } from "react";

export default function GraffitiMural({ opacity = 'opacity-[0.35]' }: { opacity?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate 0 to 1 position
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      // Maximum movement in pixels (reduced for subtlety)
      const maxMove = 12;
      
      // Move opposite to mouse (parallax)
      setOffset({
        x: -x * maxMove,
        y: -y * maxMove
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
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
    <div 
      ref={containerRef}
      className={`absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden leading-[3] ${opacity}`} 
      aria-hidden="true"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.05)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform'
      }}
    >
      {lines.map((line, i) => (
        <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} tracking-[5px] font-medium lowercase italic`}>
          {line.text}
        </p>
      ))}
    </div>
  );
}
