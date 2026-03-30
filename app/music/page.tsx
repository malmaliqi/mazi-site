import Image from 'next/image';
import Link from 'next/link';
import GraffitiMural from '@/components/GraffitiMural';

export default function Music() {
  const artists = [
    { name: "MA'ZI", desc: 'Collective Discography', img: '/MAZI_logo.png', spotify: 'https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ', loreId: '' },
    { name: 'Mal Maliqi', desc: 'Rapper / Producer.', img: '/Mal Maliqi 3.jpg', spotify: 'https://open.spotify.com/artist/4ht1vzpljKHD3CBdOUqcvP', yt: 'https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ', loreId: 'bio-mal' },
    { name: 'Grey Lenses', desc: 'Alternative, Post-Punk, Dark-Wave, Noise & Cinematic Rock band.', img: '/grey lenses 3.png', spotify: 'https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd', yt: 'https://www.youtube.com/@greylenses128', loreId: 'bio-grey' },
    { name: 'Yoda', desc: 'Rapper / Producer / Beatmaker', img: '/Yoda.jpg', spotify: 'https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI', yt: 'https://www.youtube.com/@vetyoda', loreId: 'bio-yoda' }
  ];

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-6 md:px-12 animate-entrance relative overflow-hidden">
      <GraffitiMural />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-20 font-bold">MA&apos;ZI Music</p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-20">
          {artists.map((artist, i) => (
            <div key={i} className="group">
              {artist.loreId ? (
                <Link href={`/about#${artist.loreId}`} className="block aspect-square relative overflow-hidden mb-6">
                  <Image src={artist.img} alt={artist.name} fill className="object-cover hover-distort" />
                </Link>
              ) : (
                <div className="aspect-square relative overflow-hidden mb-6">
                  <Image src={artist.img} alt={artist.name} fill className="object-cover hover-distort" />
                </div>
              )}
              <h3 className="text-sm sm:text-lg md:text-3xl font-black text-[var(--color-text-white)] mb-1 group-hover:text-[var(--color-blood-red)] transition-colors duration-700">{artist.name}</h3>
              <p className="text-[10px] md:text-sm tracking-[2px] md:tracking-[3px] uppercase text-[#999] mb-4">{artist.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a href={artist.spotify} target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">
                  Spotify
                </a>
                {artist.yt && (
                  <a href={artist.yt} target="_blank" rel="noreferrer" className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">
                    YouTube
                  </a>
                )}
                {artist.loreId && (
                  <Link href={`/about#${artist.loreId}`} className="text-xs tracking-[3px] uppercase text-[#888] hover:text-[var(--color-blood-red)] transition-colors duration-700 border-b border-[#333] pb-1">
                    Lore
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
