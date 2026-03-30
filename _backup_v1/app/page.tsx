import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-[var(--color-bg-black)] bg-[radial-gradient(circle_at_center,_#150505_0%,_var(--color-bg-black)_60%)] px-5 -mt-[80px]">
        <h1 className="text-[5rem] md:text-[12rem] font-black leading-none tracking-[-2px] md:tracking-[-6px] uppercase m-0 text-[var(--color-text-white)] pt-20">
          MA&apos;ZI
        </h1>
        <h2 className="text-xl md:text-2xl my-5 font-normal tracking-[10px] md:tracking-[15px] lowercase text-[var(--color-blood-red)]">
          collective
        </h2>
        <p className="text-lg md:text-xl text-[#888] mb-8 uppercase tracking-[3px]">
          Mal Maliqi | Grey Lenses | Yoda
        </p>
        <div className="absolute bottom-0 md:bottom-10 left-0 right-0 flex justify-center w-full pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%)' }}>
          <div className="text-[10px] md:text-xs text-[#777] tracking-[5px] md:tracking-[8px] font-medium lowercase italic w-full overflow-hidden leading-[3] md:leading-[2.5] pt-10 pb-[20px] select-none flex flex-col items-center">
            {Array(10).fill("veq zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi, zi e ma'zi, zi e ma'zi e ma'zi e ma'zi").map((txt, idx) => (
              <p key={idx} className={`whitespace-nowrap ${idx % 2 === 0 ? 'opacity-90 translate-x-3 md:translate-x-8' : 'opacity-60 -translate-x-3 md:-translate-x-8'} hover:opacity-100 hover:text-[var(--color-blood-red)] transition-all duration-1000`}>
                {txt}
              </p>
            ))}
          </div>
        </div>
      </section>

        {/* ABOUT COLLECTIVE TEASER */}
        <section className="py-24 px-5 text-center bg-[var(--color-bg-black)]" id="about">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl text-[var(--color-blood-red)] tracking-[3px] font-black mb-8 relative inline-block">THE COLLECTIVE</h2>
            <p className="text-lg md:text-xl text-[#ccc] leading-relaxed mb-16 max-w-[800px] mx-auto">
              <strong>MA&apos;ZI</strong>. Characterized by a different sound—using noise, post-punk, alternative,
              goth, dark-wave, trap, and vamp. All of this is combined in an energetic, moody vibe, often
              with satiric yet powerful lyrics. Ominous sounds that give literal chills, creating a one-of-a-kind
              experience, especially during live shows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Mal Maliqi */}
              <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
                <Link href="/about#bio-mal" className="block w-full aspect-square relative mb-5 overflow-hidden rounded">
                  <Image src="/Mal Maliqi 3.jpg" alt="Mal Maliqi" fill className="object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                </Link>
                <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Mal Maliqi</h3>
                <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Rapper & Producer</p>
                <p className="text-[#ccc] text-sm mb-6">Dark Entity.</p>
                <div className="flex gap-4 border-t border-[#222] pt-4">
                  <a href="https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
                  <a href="https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
                  <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
                </div>
              </div>

              {/* Grey Lenses */}
              <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
                <Link href="/about#bio-grey" className="block w-full aspect-square relative mb-5 overflow-hidden rounded">
                  <Image src="/grey lenses 3.png" alt="Grey Lenses" fill className="object-cover transition-all duration-300 group-hover:scale-105" />
                </Link>
                <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Grey Lenses</h3>
                <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Composer, Producer, Beatmaker, Singer</p>
                <p className="text-[#ccc] text-sm mb-6">A duo within the collective crafting the sonic landscape.</p>
                <div className="flex gap-4 border-t border-[#222] pt-4">
                  <a href="https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
                  <a href="https://www.youtube.com/@greylenses128" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
                  <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
                </div>
              </div>

              {/* Yoda */}
              <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
                <Link href="/about#bio-yoda" className="block w-full aspect-square relative mb-5 overflow-hidden rounded">
                  <Image src="/Yoda.jpg" alt="Yoda" fill className="object-cover transition-all duration-300 group-hover:scale-105" />
                </Link>
                <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Yoda</h3>
                <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Rapper, Producer, Beatmaker</p>
                <p className="text-[#ccc] text-sm mb-6">Yoda The Plug</p>
                <div className="flex gap-4 border-t border-[#222] pt-4">
                  <a href="https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
                  <a href="https://www.youtube.com/@vetyoda" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
                  <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOUND TEASER */}
        <section className="py-24 bg-[#0b0b0b] px-5 border-t border-[#111]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-16 text-center">MA&apos;ZI MUSIC</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-[1400px] mx-auto">

              {/* MAZI Card */}
              <div className="bg-[var(--color-dark-grey)] p-8 md:p-10 rounded-xl flex items-center border-l-[6px] border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 shadow-2xl">
                <Link href="/music" className="block w-[130px] md:w-[180px] lg:w-[220px] aspect-square relative mr-8 md:mr-10 overflow-hidden rounded bg-black flex-shrink-0 cursor-pointer">
                  <Image src="/MAZI_logo.png" alt="MA'ZI" fill className="object-cover transition-all duration-300 hover:scale-105" />
                </Link>
                <div className="text-left flex-1">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[var(--color-text-white)] tracking-wide">MA&apos;ZI</h3>
                  <p className="text-[var(--color-blood-red)] font-bold text-xs md:text-sm uppercase mb-6 md:mb-8 tracking-widest">Collective Discography</p>
                  <a href="https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[var(--color-blood-red)] text-white text-xs md:text-sm font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors tracking-widest">Spotify</a>
                </div>
              </div>

              {/* Explore More Card */}
              <div className="bg-[var(--color-dark-grey)] p-8 md:p-10 rounded-xl flex items-center border-l-[6px] border-transparent hover:border-[var(--color-blood-red)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
                <Link href="/music" className="block w-[130px] md:w-[180px] lg:w-[220px] aspect-square relative mr-8 md:mr-10 overflow-hidden rounded bg-black flex items-center justify-center border border-[#333] flex-shrink-0 cursor-pointer">
                  <span className="text-[60px] md:text-[80px] text-[var(--color-blood-red)] tracking-tighter opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">▶</span>
                </Link>
                <div className="text-left flex-1">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[var(--color-text-white)] tracking-wide">ALL MEMBERS</h3>
                  <p className="text-[#888] font-bold text-xs md:text-sm uppercase mb-6 md:mb-8 tracking-widest">Mal Maliqi | Grey Lenses | Yoda</p>
                  <Link href="/music" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[var(--color-blood-red)] text-[var(--color-blood-red)] text-xs md:text-sm font-bold uppercase rounded hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-widest">Discover</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DIRECTORY LINKS SECTION */}
        <section className="py-24 bg-[var(--color-bg-black)] px-5">
          <div className="max-w-[1000px] mx-auto text-center border-t border-[#111] pt-16 mt-8">
            <h2 className="text-2xl md:text-3xl text-[#555] tracking-[4px] font-black mb-12 uppercase">Explore ma'zi</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/music" className="inline-block px-6 py-3 bg-transparent border border-[var(--color-blood-red)] text-[var(--color-text-white)] text-xs md:text-sm font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-blood-red)] transition-colors shadow-lg">MA&apos;ZI MUSIC</Link>
              <Link href="/store" className="inline-block px-6 py-3 bg-transparent border border-[var(--color-blood-red)] text-[var(--color-text-white)] text-xs md:text-sm font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-blood-red)] transition-colors shadow-lg">Mazi Store</Link>
              <Link href="/about#lore" className="inline-block px-6 py-3 bg-transparent border border-[var(--color-blood-red)] text-[var(--color-text-white)] text-xs md:text-sm font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-blood-red)] transition-colors shadow-lg">Mazi Lore</Link>
              <Link href="/shows" className="inline-block px-6 py-3 bg-transparent border border-[var(--color-blood-red)] text-[var(--color-text-white)] text-xs md:text-sm font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-blood-red)] transition-colors shadow-lg">Mazi Shows</Link>
              <Link href="/shows#footage" className="inline-block px-6 py-3 bg-transparent border border-[var(--color-blood-red)] text-[var(--color-text-white)] text-xs md:text-sm font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-blood-red)] transition-colors shadow-lg">Mazi Footage</Link>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-[var(--color-bg-black)] py-24 px-5 border-t border-[#111] scroll-mt-20">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-6">CONTACT</h2>
            <p className="text-[#ccc] text-lg mb-12">Booking, inquiries, and press.</p>

            <form className="flex flex-col gap-5 mb-16 text-left">
              <input type="text" placeholder="Your Name" required className="w-full p-4 bg-[var(--color-dark-grey)] border border-[#222] text-[var(--color-text-white)] rounded focus:outline-none focus:border-[var(--color-blood-red)] transition-colors" />
              <input type="email" placeholder="Your Email" required className="w-full p-4 bg-[var(--color-dark-grey)] border border-[#222] text-[var(--color-text-white)] rounded focus:outline-none focus:border-[var(--color-blood-red)] transition-colors" />
              <textarea rows={6} placeholder="Your Message" required className="w-full p-4 bg-[var(--color-dark-grey)] border border-[#222] text-[var(--color-text-white)] rounded focus:outline-none focus:border-[var(--color-blood-red)] transition-colors resize-none"></textarea>
              <button type="submit" className="w-full py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-accent-red)] transition-colors">Send Message</button>
            </form>

            <div className="text-[#888] space-y-4 pt-8 border-t border-[#111]">
              <p><strong className="text-[var(--color-text-white)] font-bold">General inquiries:</strong> info@mazi-collective.com</p>
              <p><strong className="text-[var(--color-text-white)] font-bold">Booking:</strong> booking@mazi-collective.com</p>
            </div>
          </div>
        </section>
      </>
      );
}
