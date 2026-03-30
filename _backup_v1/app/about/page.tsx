import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-24 px-5">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-8 relative inline-block">THE COLLECTIVE</h2>

        <p className="text-lg md:text-xl text-[#ccc] leading-relaxed mb-16 max-w-[800px] mx-auto">
          <strong>MA&apos;ZI</strong> is a collective of 4 people Mal Maliqi, Grey Lenses (Zjarr Bujari & Ndricon Hoxha) and Yoda. Characterized by a different sound—using noise, post-punk, alternative,
          goth, dark-wave, trap, and vamp. All of this is combined in an energetic, moody vibe, often
          with satiric yet powerful lyrics. Ominous sounds that give literal chills, creating a one-of-a-kind
          experience, especially during live shows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-32">
          {/* Mal Maliqi */}
          <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
            <Link href="#bio-mal" className="block w-full aspect-square relative mb-5 overflow-hidden rounded scroll-smooth">
              <Image src="/Mal Maliqi 3.jpg" alt="Mal Maliqi" fill className="object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105" />
            </Link>
            <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Mal Maliqi</h3>
            <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Rapper & Producer</p>
            <p className="text-[#ccc] text-sm mb-6">Dark Entity.</p>
            <div className="flex flex-wrap gap-4 border-t border-[#222] pt-4">
              <a href="https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
              <a href="https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
              <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
            </div>
          </div>

          {/* Grey Lenses */}
          <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
            <Link href="#bio-grey" className="block w-full aspect-square relative mb-5 overflow-hidden rounded scroll-smooth">
              <Image src="/grey lenses 3.png" alt="Grey Lenses" fill className="object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Grey Lenses</h3>
            <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Producer, Beatmaker, Singer</p>
            <p className="text-[#ccc] text-sm mb-6">A duo within the collective crafting the sonic landscape.</p>
            <div className="flex flex-wrap gap-4 border-t border-[#222] pt-4">
              <a href="https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
              <a href="https://www.youtube.com/@greylenses128" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
              <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
            </div>
          </div>

          {/* Yoda */}
          <div className="bg-[var(--color-dark-grey)] p-5 rounded-lg border-t-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 group shadow-xl">
            <Link href="#bio-yoda" className="block w-full aspect-square relative mb-5 overflow-hidden rounded scroll-smooth">
              <Image src="/Yoda.jpg" alt="Yoda" fill className="object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <h3 className="text-2xl font-bold m-0 mb-1 text-[var(--color-text-white)]">Yoda</h3>
            <p className="text-[var(--color-blood-red)] font-bold text-xs uppercase m-0 mb-3 tracking-wide">Rapper, Producer, Beatmaker</p>
            <p className="text-[#ccc] text-sm mb-6">Yoda The Plug</p>
            <div className="flex flex-wrap gap-4 border-t border-[#222] pt-4">
              <a href="https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Spotify</a>
              <a href="https://www.youtube.com/@vetyoda" target="_blank" rel="noreferrer" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">YouTube</a>
              <a href="#" className="text-[#888] font-bold text-[10px] uppercase hover:text-[var(--color-text-white)] transition-colors tracking-widest">Instagram</a>
            </div>
          </div>
        </div>

        {/* LORE SECTION */}
        <div className="max-w-[1000px] mx-auto border-t border-[#222] pt-24" id="lore">
          <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-16 text-center">THE LORE</h2>

          <div className="space-y-12 text-left">
            {/* Mal Maliqi */}
            <section id="bio-mal" className="bg-[var(--color-dark-grey)] p-10 rounded-lg shadow-xl border-l-[6px] border-[var(--color-blood-red)] hover:-translate-y-1 transition-transform duration-300 scroll-mt-28">
              <h3 className="text-3xl font-bold text-[var(--color-blood-red)] border-b border-[#333] pb-4 mb-6 tracking-wide">
                Mal Maliqi
              </h3>
              <div className="text-[#ccc] text-lg leading-relaxed space-y-4">
                <p>
                  Mal Maliqi is Prishtina&apos;s shadow-poet of eternal cinematic music. He
                  began his music in 2009 performing as an underground rapper across Kosovo and the region. From
                  2013 to 2019 he performed over 120 live shows building a strong presence in the local scene.
                </p>
                <p>
                  His earlier releases include: &quot;Malushaqja Mixtape (2017)&quot;; &quot;Heart Tour EP (2018)&quot;; &quot;Jeta e Lehte
                  EP (2019)&quot;; &quot;Malbum Level :Sex (2020)&quot;, with single drops here and there and his last single
                  &quot;SHKAS&quot; (2021) marked a pause in his music career as he focused on his profession work as a
                  Network Engineer.
                </p>
                <p>
                  But silence could not last long, after nearly three years without releasing music thou
                  songwriting never stopped, Maliqi felt a creative void. As the vision for a new dark moody and
                  rebelious album took shape on 2023 and through collaboration with Grey Lenses- the MA&apos;ZI
                  Collective was born at the beginning of 2024 where they produced Maliqi&apos;s 5th album project
                  called &quot;Erdhen Vampirat&quot;.
                </p>
                <p>
                  Since breaking through with his 5th album &quot;Erdhen Vampirat&quot; in 2024, he&apos;s honed a signature
                  sound- Albanian language verses dripping with gothic imagery, delivered over venomous 808s and
                  synthesizers by Grey Lenses. With haunting tracks like Erdhen Vampirat, Night King and Vampire
                  State Building, Maliqi channels nocturnal rage into a dreamlike, dystopian vamp world. From
                  early beginnings like the songs &quot;Noto, Buddha, Vjersh n&apos;Vjeshte&quot; to the full-blown vampiric
                  mythology of Erdhen Vampirat, each project serves as a portal into his cinematic and
                  unapologetically dark universe.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#222]">
                <a href="https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-[var(--color-blood-red)] text-white text-xs font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors tracking-widest">Spotify</a>
                <a href="https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-transparent border-2 border-[var(--color-blood-red)] text-[var(--color-blood-red)] text-xs font-bold uppercase rounded hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-widest">YouTube</a>
                <a href="#" className="px-6 py-2.5 bg-[#222] text-[#888] text-xs font-bold uppercase rounded hover:bg-[#333] hover:text-white transition-colors tracking-widest">Instagram</a>
              </div>
            </section>

            {/* Grey Lenses */}
            <section id="bio-grey" className="bg-[var(--color-dark-grey)] p-10 rounded-lg shadow-xl border-l-[6px] border-[var(--color-blood-red)] hover:-translate-y-1 transition-transform duration-300 scroll-mt-28">
              <h3 className="text-3xl font-bold text-[var(--color-blood-red)] border-b border-[#333] pb-4 mb-6 tracking-wide">
                Grey Lenses
              </h3>
              <p className="text-[#888] text-lg italic tracking-wide">
                [Grey Lenses&apos; full biography will go here...]
              </p>
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#222]">
                <a href="https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-[var(--color-blood-red)] text-white text-xs font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors tracking-widest">Spotify</a>
                <a href="https://www.youtube.com/@greylenses128" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-transparent border-2 border-[var(--color-blood-red)] text-[var(--color-blood-red)] text-xs font-bold uppercase rounded hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-widest">YouTube</a>
                <a href="#" className="px-6 py-2.5 bg-[#222] text-[#888] text-xs font-bold uppercase rounded hover:bg-[#333] hover:text-white transition-colors tracking-widest">Instagram</a>
              </div>
            </section>

            {/* Yoda */}
            <section id="bio-yoda" className="bg-[var(--color-dark-grey)] p-10 rounded-lg shadow-xl border-l-[6px] border-[var(--color-blood-red)] hover:-translate-y-1 transition-transform duration-300 scroll-mt-28">
              <h3 className="text-3xl font-bold text-[var(--color-blood-red)] border-b border-[#333] pb-4 mb-6 tracking-wide">
                Yoda
              </h3>
              <p className="text-[#888] text-lg italic tracking-wide">
                [Yoda&apos;s full biography will go here...]
              </p>
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#222]">
                <a href="https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-[var(--color-blood-red)] text-white text-xs font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors tracking-widest">Spotify</a>
                <a href="https://www.youtube.com/@vetyoda" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-transparent border-2 border-[var(--color-blood-red)] text-[var(--color-blood-red)] text-xs font-bold uppercase rounded hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-widest">YouTube</a>
                <a href="#" className="px-6 py-2.5 bg-[#222] text-[#888] text-xs font-bold uppercase rounded hover:bg-[#333] hover:text-white transition-colors tracking-widest">Instagram</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
