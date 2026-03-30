import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  /* Graffiti mural lines — varying sizes, colors, opacities to create a full-wall painted texture */
  const muralLines = [
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[10px]', color: 'text-[#2a0a0a]', offset: 'translate-x-4', opacity: 'opacity-60' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[14px]', color: 'text-[#3a0c0c]', offset: '-translate-x-8', opacity: 'opacity-50' },
    { text: "zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#444]', offset: 'translate-x-12', opacity: 'opacity-40' },
    { text: "ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[16px]', color: 'text-[#4a0e0e]', offset: '-translate-x-3', opacity: 'opacity-35' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[11px]', color: 'text-[#333]', offset: 'translate-x-20', opacity: 'opacity-55' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[13px]', color: 'text-[#450d0d]', offset: '-translate-x-14', opacity: 'opacity-30' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[8px]', color: 'text-[#3c3c3c]', offset: 'translate-x-6', opacity: 'opacity-65' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[15px]', color: 'text-[#380b0b]', offset: '-translate-x-10', opacity: 'opacity-40' },
    { text: "ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi", size: 'text-[10px]', color: 'text-[#3a3a3a]', offset: 'translate-x-16', opacity: 'opacity-50' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[18px]', color: 'text-[#500f0f]', offset: '-translate-x-5', opacity: 'opacity-25' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#2e2e2e]', offset: 'translate-x-9', opacity: 'opacity-60' },
    { text: "ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[12px]', color: 'text-[#400d0d]', offset: '-translate-x-18', opacity: 'opacity-40' },
    { text: "veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[11px]', color: 'text-[#383838]', offset: 'translate-x-3', opacity: 'opacity-50' },
    { text: "zi e ma'zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi", size: 'text-[14px]', color: 'text-[#4a0f0f]', offset: '-translate-x-7', opacity: 'opacity-30' },
    { text: "zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[10px]', color: 'text-[#333]', offset: 'translate-x-14', opacity: 'opacity-55' },
    { text: "veq zi e ma'zi e ma'zi e ma'zi e ma'zi, zi e ma'zi e ma'zi", size: 'text-[15px]', color: 'text-[#3d0b0b]', offset: '-translate-x-12', opacity: 'opacity-35' },
    { text: "ma'zi, zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[8px]', color: 'text-[#3a3a3a]', offset: 'translate-x-8', opacity: 'opacity-60' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[16px]', color: 'text-[#520f0f]', offset: '-translate-x-4', opacity: 'opacity-25' },
    { text: "veq zi e ma'zi, zi e ma'zi e ma'zi e ma'zi, zi e ma'zi", size: 'text-[11px]', color: 'text-[#2f2f2f]', offset: 'translate-x-11', opacity: 'opacity-50' },
    { text: "zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi", size: 'text-[9px]', color: 'text-[#430e0e]', offset: '-translate-x-9', opacity: 'opacity-45' },
  ];

  return (
    <>
      {/* ══════ HERO SECTION ══════ */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center bg-[var(--color-bg-black)] bg-[radial-gradient(circle_at_center,_#150505_0%,_var(--color-bg-black)_60%)] px-5 -mt-[80px] overflow-hidden">
        {/* Graffiti mural background — covers the entire hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden leading-[2.8] md:leading-[2.5]" aria-hidden="true">
          {muralLines.map((line, i) => (
            <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} ${line.opacity} tracking-[4px] md:tracking-[6px] font-medium lowercase italic`}>
              {line.text}
            </p>
          ))}
        </div>

        {/* Main title — EXACT original Montserrat font-black */}
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[12rem] font-black leading-none tracking-[-2px] md:tracking-[-6px] uppercase m-0 text-[var(--color-text-white)] pt-20 z-10 animate-flicker">
          MA&apos;ZI
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl my-5 font-normal tracking-[8px] sm:tracking-[10px] md:tracking-[15px] lowercase text-[var(--color-blood-red)] z-10">
          collective
        </h2>
        <p className="text-lg md:text-xl text-[#888] mb-8 uppercase tracking-[3px] z-10">
          Mal Maliqi | Grey Lenses | Yoda
        </p>

        {/* Bottom drift indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-drift z-10">
          <span className="text-[#333] text-2xl">&#8595;</span>
        </div>
      </section>

      {/* ══════ MANIFESTO / ABOUT TEASER ══════ */}
      <section className="relative py-12 md:py-24 px-6 md:px-20 bg-[var(--color-bg-black)] overflow-hidden" id="about">
        {/* Graffiti continues behind content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden leading-[3.5] opacity-[0.22]" aria-hidden="true">
          {muralLines.slice(5, 15).map((line, i) => (
            <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} tracking-[5px] font-medium lowercase italic`}>
              {line.text}
            </p>
          ))}
        </div>
        <div className="max-w-[900px] mx-auto animate-fade-in relative z-10 text-center">
          <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-10 font-bold">WELCOME TO THE DARK ENTRIES</p>
          <p className="text-sm md:text-2xl text-[#aaa] leading-[2.5] md:leading-[2.2] font-light tracking-widest uppercase italic shadow-sm">
          </p>
        </div>
      </section>

      {/* ══════ MA'ZI MUSIC ══════ */}
      <section className="relative py-16 px-6 md:px-20 bg-[var(--color-bg-black)] border-t border-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-end items-center pointer-events-none select-none overflow-hidden leading-[3] opacity-[0.15]" aria-hidden="true">
          {muralLines.slice(0, 8).map((line, i) => (
            <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} tracking-[5px] font-medium lowercase italic`}>
              {line.text}
            </p>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-16 font-bold">MA&apos;ZI Music</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 items-center">
            <Link href="/music" className="block aspect-square relative overflow-hidden group transition-transform duration-500 hover:scale-[1.01] md:hover:scale-[1.03]">
              <Image src="/MAZI_logo.png" alt="MA&apos;ZI" fill className="object-cover" />
            </Link>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-[var(--color-text-white)] mb-6 tracking-wide uppercase">MA&apos;ZI</h3>
              <p className="text-sm tracking-[3px] uppercase text-[#999] mb-8">Collective Discography</p>
              <div className="flex justify-center md:justify-start gap-6 items-center">
                <a href="https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ" target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[var(--color-blood-red)] hover:text-[var(--color-accent-red)] transition-colors duration-700 border-b border-[var(--color-blood-red)] pb-1 font-bold">Spotify</a>
                <Link href="/music" className="text-xs tracking-[3px] uppercase text-[var(--color-blood-red)] hover:text-[var(--color-accent-red)] transition-colors duration-700 border-b border-[var(--color-blood-red)] pb-1 font-bold">Discover All</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section id="contact" className="relative bg-[var(--color-bg-black)] py-16 px-6 border-t border-[#0a0a0a] scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden leading-[4] opacity-[0.12]" aria-hidden="true">
          {muralLines.slice(7, 17).map((line, i) => (
            <p key={i} className={`whitespace-nowrap ${line.size} ${line.color} ${line.offset} tracking-[5px] font-medium lowercase italic`}>
              {line.text}
            </p>
          ))}
        </div>
        <div className="max-w-[500px] mx-auto relative z-10">
          <p className="text-lg md:text-xl tracking-[6px] uppercase text-[var(--color-blood-red)] mb-12 font-bold text-center">Contact</p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-6 mb-16"
          >
            <input type="hidden" name="access_key" value="f47cbcfe-ce4b-4e59-8e76-0fdae2ea318c" />
            <input type="hidden" name="subject" value="🧛 New MA'ZI Portal Message" />
            <input type="hidden" name="from_name" value="MA'ZI Website" />

            <input type="text" name="name" placeholder="Name" required className="w-full px-0 py-4 bg-transparent border-b border-[#444] text-[var(--color-text-white)] text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#888] placeholder:text-sm placeholder:tracking-[3px] placeholder:uppercase" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-0 py-4 bg-transparent border-b border-[#444] text-[var(--color-text-white)] text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#888] placeholder:text-sm placeholder:tracking-[3px] placeholder:uppercase" />
            <textarea name="message" rows={4} placeholder="Message" required className="w-full px-0 py-4 bg-transparent border-b border-[#444] text-[var(--color-text-white)] text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors resize-none placeholder:text-[#888] placeholder:text-sm placeholder:tracking-[3px] placeholder:uppercase"></textarea>
            <button type="submit" className="self-start text-sm tracking-[3px] uppercase text-[#ccc] border-b border-[#666] pb-1 hover:text-[var(--color-blood-red)] hover:border-[var(--color-blood-red)] transition-all duration-700 mt-4 bg-transparent cursor-pointer">
              Send
            </button>
          </form>

          <div className="text-center space-y-3">

          </div>
        </div>
      </section>
    </>
  );
}
