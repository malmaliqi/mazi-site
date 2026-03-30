import Image from 'next/image';

export default function Music() {
  return (
    <div className="bg-[#0b0b0b] min-h-screen pt-24 pb-12 px-5 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto text-center w-full">
        <h2 className="text-3xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-8 md:mb-12 mt-12 md:mt-0">MA&apos;ZI MUSIC</h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto">
          {[
            { name: 'MA\'ZI', desc: 'Collective Discography', img: '/MAZI_logo.png', spotify: 'https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ' },
            { name: 'Mal Maliqi', desc: 'Dark Entity.', img: '/Mal Maliqi 3.jpg', spotify: 'https://open.spotify.com/album/7wzgVJd7m3SnAbQLo5BDvJ', yt: 'https://www.youtube.com/channel/UCyuplbr7W9ig_v0Mx7fBDeQ' },
            { name: 'Grey Lenses', desc: 'Producer, Beatmaker, Singer', img: '/grey lenses 3.png', spotify: 'https://open.spotify.com/artist/3ZON6Xp7bZcAimcZEsdxGd', yt: 'https://www.youtube.com/@greylenses128' },
            { name: 'Yoda', desc: 'Yoda The Plug', img: '/Yoda.jpg', spotify: 'https://open.spotify.com/artist/62DUugY7Slewx8iMfk6LqI', yt: 'https://www.youtube.com/@vetyoda' }
          ].map((artist, i) => (
            <div key={i} className="bg-[var(--color-dark-grey)] rounded-xl flex items-center p-8 md:p-10 border-l-[6px] border-[var(--color-blood-red)] transition-transform duration-300 hover:-translate-y-2 shadow-2xl">
              <div className="w-[130px] md:w-[180px] lg:w-[220px] aspect-square relative mr-8 md:mr-10 overflow-hidden rounded bg-black flex-shrink-0">
                <Image src={artist.img} alt={artist.name} fill className="object-cover transition-all duration-300" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[var(--color-text-white)] tracking-wide">{artist.name}</h3>
                <p className="text-[var(--color-blood-red)] font-bold text-xs md:text-sm uppercase mb-6 md:mb-8 tracking-widest">{artist.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <a href={artist.spotify} target="_blank" rel="noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[var(--color-blood-red)] text-white text-xs md:text-sm font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors tracking-widest">
                    Spotify
                  </a>
                  {artist.yt && (
                    <a href={artist.yt} target="_blank" rel="noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[var(--color-blood-red)] text-[var(--color-blood-red)] text-xs md:text-sm font-bold uppercase rounded hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-widest">
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
