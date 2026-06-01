import Image from 'next/image';
import Link from 'next/link';
import GraffitiMural from '@/components/GraffitiMural';
import Magnetic from '@/components/Magnetic';

export default function Music() {
  const mazi = { name: "MA'ZI", desc: 'Collective Discography', img: '/MAZI_logo.png', spotify: 'https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ' };

  const artists = [
    { name: 'Mal Maliqi', desc: 'Rapper / Producer', img: '/Mal Maliqi 3.jpg', spotify: 'https://open.spotify.com/artist/4ht1vzpljKHD3CBdOUqcvP', yt: 'https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ', loreId: 'bio-mal' },
    { name: 'Grey Lenses', desc: 'Post-Punk / Alternative / Noise', img: '/grey lenses 3.png', spotify: 'https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd', yt: 'https://www.youtube.com/@greylenses128', loreId: 'bio-grey' },
    { name: 'Yoda', desc: 'Rapper / Producer / Beatmaker', img: '/Yoda.jpg', spotify: 'https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI', yt: 'https://www.youtube.com/@vetyoda', loreId: 'bio-yoda' }
  ];

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <GraffitiMural />
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ══════ MA'ZI HERO BANNER ══════ */}
        <div className="w-full flex flex-col items-center text-center mb-16 artist-card-reveal">
          <div className="relative w-[80vw] max-w-[600px] aspect-[2/1] mb-8">
            {/* Subtle red glow behind logo */}
            <div className="absolute inset-0 bg-[var(--color-blood-red)]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <Image src={mazi.img} alt={mazi.name} fill className="object-contain drop-shadow-[0_0_15px_rgba(138,3,3,0.3)]" />
          </div>
          <p className="text-sm md:text-base tracking-[6px] uppercase text-[#999] mb-10 font-light italic">
            EVERY OMINOUS SOUND IS A CONTROLLED DEMOLITION.
          </p>
          <Magnetic strength={0.3}>
            <a href={mazi.spotify} target="_blank" rel="noreferrer" className="text-sm tracking-[4px] uppercase text-[var(--color-blood-red)] hover:text-white transition-colors duration-700 border-b border-[var(--color-blood-red)] hover:border-white pb-2 font-bold inline-block">
              Listen to MA'ZI MUSIC
            </a>
          </Magnetic>
        </div>

        {/* ══════ THE ROSTER ══════ */}
        <div className="w-full flex flex-col items-center mb-24 artist-card-reveal delay-150">
          <p className="text-sm tracking-[8px] uppercase text-[var(--color-blood-red)] font-black text-center mb-6">THE COLLECTIVE</p>
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-blood-red)] to-transparent opacity-50"></div>
        </div>

        <div className="flex flex-col gap-8 md:gap-8">
          {artists.map((artist, i) => {
            const isEven = i % 2 !== 0; // Alternating layout
            const delayClass = i === 0 ? 'delay-150' : i === 1 ? 'delay-300' : '';

            return (
              <div key={i} className={`artist-card-reveal ${delayClass}`}>
                <div className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center gap-6 md:gap-16 group`}>

                  {/* Photo Column */}
                  <div className="w-[120px] sm:w-[150px] md:w-[250px] lg:w-[300px] flex-shrink-0">
                    {artist.loreId ? (
                      <Link href={`/about#${artist.loreId}`} className="block w-full aspect-[3/4] relative overflow-hidden image-red-overlay">
                        <Image src={artist.img} alt={artist.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </Link>
                    ) : (
                      <div className="w-full aspect-[3/4] relative overflow-hidden image-red-overlay">
                        <Image src={artist.img} alt={artist.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </div>
                    )}
                  </div>

                  {/* Info Column */}
                  <div className={`flex-1 flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'} justify-center`}>
                    <h3 className="text-[clamp(1.2rem,5vw,2.5rem)] font-black text-[var(--color-text-white)] mb-2 group-hover:text-[var(--color-blood-red)] transition-colors duration-700 leading-none uppercase tracking-tight">
                      {artist.name}
                    </h3>
                    <p className="text-[clamp(0.6rem,2vw,0.85rem)] tracking-[2px] md:tracking-[4px] uppercase text-[#777] mb-4 md:mb-6 border-b border-[#222] pb-2 md:pb-4 inline-block">
                      {artist.desc}
                    </p>

                    <div className={`flex flex-wrap gap-x-4 gap-y-2 md:gap-8 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <Magnetic strength={0.3}>
                        <a href={artist.spotify} target="_blank" rel="noreferrer" className="text-[10px] md:text-sm tracking-[3px] uppercase text-[var(--color-blood-red)] hover:text-white transition-colors duration-700 border-b border-[var(--color-blood-red)] hover:border-white pb-1 font-bold">
                          Spotify
                        </a>
                      </Magnetic>
                      {artist.yt && (
                        <Magnetic strength={0.3}>
                          <a href={artist.yt} target="_blank" rel="noreferrer" className="text-[10px] md:text-sm tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] hover:border-[var(--color-blood-red)] pb-1 font-bold">
                            YouTube
                          </a>
                        </Magnetic>
                      )}
                      {artist.loreId && (
                        <Magnetic strength={0.3}>
                          <Link href={`/about#${artist.loreId}`} className="text-[10px] md:text-sm tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] hover:border-[var(--color-blood-red)] pb-1 font-bold">
                            Lore
                          </Link>
                        </Magnetic>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
