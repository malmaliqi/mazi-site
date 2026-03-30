import Image from 'next/image';
import GraffitiMural from '@/components/GraffitiMural';

export default function About() {
  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen pt-24 pb-48 px-6 md:px-20 relative overflow-hidden animate-entrance">
      <GraffitiMural />
      <div className="max-w-[900px] mx-auto relative z-10">
        <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-8 font-bold">The Collective</p>

        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-white)] mb-8 leading-tight tracking-wide">MA&apos;ZI</h2>

        <div className="text-[#aaa] text-base md:text-lg leading-[2.2] space-y-6 mb-24 font-light">
          <p>
            <strong className="text-[var(--color-text-white)] font-medium">MA&apos;ZI </strong> is a collective of four people that is founded by Grey Lenses (Zjarr Bujari &amp; Ndricon Hoxha) and Mal Maliqi in the beginning of 2024 while creating the iconic album "Erdhen Vampirat", then joined by Yoda.<br />
            Characterized by a different vision, MA'ZI music is experimental, alternative, noise, cinematic, post-punk, dark-wave, trap, and vamp. MA'ZI is <strong className="text-[var(--color-blood-red)] font-medium">Post-Music</strong>. All of this is combined in a very energetic or moody vibe, where every ominous sound is a controlled demolition that give literal chills to the listener, creating a one-of-a-kind experience.<br />
            <br />
            <strong className="text-[var(--color-blood-red)] font-medium">Veq zi e MA'ZI e MA'ZI e MA'ZI, zi e MA'ZI.</strong>
          </p>
        </div>

        {/* ══════ THE LORE ══════ */}
        <div className="border-t border-[#0a0a0a] pt-24" id="lore">
          <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-16 font-bold">The Lore</p>

          <div className="space-y-24">
            {/* Mal Maliqi */}
            <section id="bio-mal" className="scroll-mt-28">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
                <div className="w-[150px] md:w-[120px] aspect-[3/4] md:h-[160px] relative overflow-hidden flex-shrink-0">
                  <Image src="/Mal Maliqi 3.jpg" alt="Mal Maliqi" fill className="object-cover hover-distort" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-2 md:border-l-2 md:border-[var(--color-blood-red)] md:pl-6 uppercase italic">
                    Mal Maliqi
                  </h3>
                  <p className="text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase text-[var(--color-blood-red)] md:pl-6">Rapper &amp; Producer</p>
                </div>
              </div>
              <div className="text-[#999] text-sm md:text-base leading-[2.2] space-y-5 font-light pl-6 border-l border-[#1a1a1a]">
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
                  State Building, Maliqi channels nocturnal rage into a dreamlike, dystopian vamp world.
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-8 mt-8 md:pl-6 leading-none">
                <a href="https://open.spotify.com/artist/4ht1vzpljKHD3CBdOUqcvP" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">Spotify</a>
                <a href="https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">YouTube</a>
              </div>
            </section>

            {/* Grey Lenses */}
            <section id="bio-grey" className="scroll-mt-28">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
                <div className="w-[150px] md:w-[120px] aspect-[3/4] md:h-[160px] relative overflow-hidden flex-shrink-0">
                  <Image src="/grey lenses 3.png" alt="Grey Lenses" fill className="object-cover hover-distort" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-2 md:border-l-2 md:border-[var(--color-blood-red)] md:pl-6 uppercase italic">
                    Grey Lenses
                  </h3>
                  <p className="text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase text-[var(--color-blood-red)] md:pl-6">Producer, Beatmaker, Singer</p>
                </div>
              </div>
              <p className="text-[#777] text-sm leading-[2.2] font-light italic pl-6 border-l border-[#1a1a1a]">
                Grey Lenses is a band formed in March 2021 by Zjarr Bujari, Ndriçon Hoxha, and Drin Hoxha. From the outset, the band entered recording sessions that would later result in their debut EP Hint, released in December 2021. Their first single, Operation Downfall, was released on June 16, 2021.
                <p>
                  In September 2021, Grey Lenses began full-band rehearsals and made their live debut one month later. Over time, both the band’s formation and sound evolved significantly. Former members include Drin Hoxha, Jon Raçi, and Albin Abazi, with Zjarr Bujari and Ndriçon Hoxha remaining at the core of the project, joined by Dr. Bekim Hoxha as the band’s drum machine.
                </p>
                <p>
                  Drawing from post-punk, dark wave, noise, and no wave influences, Grey Lenses has continuously shaped a distinct and evolving sonic identity. After nearly two years of work, the band released their LP Calm Sun in September 2023, followed by the EP Infinite Resignation in December 2023. On January 11, 2025, they released their latest EP, Breeze.
                </p>
                <p>
                  Beyond their own releases, Grey Lenses has also been involved in collaborative and independent production work. Together with Mal Maliqi, the band co-founded the independent label Ma’Zi, under which Mali’s album Erdhën Vampirat was released on September 5, 2024. Members of Grey Lenses contributed directly to the recording, production, mixing, and mastering of the album, marking an important collaborative milestone and expanding the band’s role beyond their own discography.
                </p>
                <p>
                  Grey Lenses operates as a fully independent and self-sustained project, with all recording, production, mixing, and mastering handled internally by the band.
                </p>
                <p>
                  Currently, the band is actively recording and developing new material, with both an EP and a full-length album in progress.
                </p>
                <div className="flex gap-8 mt-8 pl-6">
                  <a href="https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd" target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">Spotify</a>
                  <a href="https://www.youtube.com/@greylenses128" target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">YouTube</a>
                </div>
            </section>

            {/* Yoda */}
            <section id="bio-yoda" className="scroll-mt-28">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
                <div className="w-[150px] md:w-[120px] aspect-[3/4] md:h-[160px] relative overflow-hidden flex-shrink-0">
                  <Image src="/Yoda.jpg" alt="Yoda" fill className="object-cover hover-distort" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-2 md:border-l-2 md:border-[var(--color-blood-red)] md:pl-6 uppercase italic">
                    Yoda
                  </h3>
                  <p className="text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase text-[var(--color-blood-red)] md:pl-6">Rapper, Producer, Beatmaker</p>
                </div>
              </div>
              <p className="text-[#777] text-sm leading-[2.2] font-light italic pl-6 border-l border-[#1a1a1a]">
                [Yoda&apos;s full biography will go here...]
              </p>
              <div className="flex gap-8 mt-8 pl-6">
                <a href="https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI" target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">Spotify</a>
                <a href="https://www.youtube.com/@vetyoda" target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">YouTube</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
