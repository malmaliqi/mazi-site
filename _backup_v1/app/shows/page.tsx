"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const albums = [
  {
    id: 'album-mos',
    title: '"Meeting Of Styles 2025 (Headline)"',
    date: 'August 9, 2025 • Rruga B',
    gridItems: [
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 1.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025  2.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 3.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 4.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 5.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 6.jpg' }
    ]
  },
  { id: 'album-mitrovica', title: '"Jazz Festival Mitrovica"', date: 'August 8, 2025 • Location: Sheshi Mitrovices', gridItems: [{ type: 'video' }, { type: 'photo' }, { type: 'photo' }, { type: 'photo' }] },
  { id: 'album-muzike', title: '"Muzike E Gjalle" w/ The Milk Snatchers & Telikput', date: 'July 23, 2025 • Location: E.dh.e', gridItems: [{ type: 'photo' }, { type: 'photo' }] },
  { id: 'album-soma', title: '"ERDHEN VAMPIRAT" Album Promotion', date: 'July 5, 2025 • Location: Soma Book Station', gridItems: [{ type: 'photo' }, { type: 'video' }, { type: 'photo' }] },
  { id: 'album-lavjerrs', title: '"ERDHEN VAMPIRAT" Album Promotion', date: 'May 2, 2025 • Location: Lavjerr\'s', gridItems: [{ type: 'photo' }, { type: 'photo' }, { type: 'photo' }] },
];

export default function Shows() {
  const [lightbox, setLightbox] = useState<{ albumIndex: number, itemIndex: number } | null>(null);

  const navigateLightbox = (e: React.MouseEvent, direction: 1 | -1) => {
    e.stopPropagation();
    if (!lightbox) return;

    const currentAlbum = albums[lightbox.albumIndex];
    let nextItemIndex = lightbox.itemIndex + direction;

    while (true) {
      if (nextItemIndex >= currentAlbum.gridItems.length) {
        nextItemIndex = 0;
      } else if (nextItemIndex < 0) {
        nextItemIndex = currentAlbum.gridItems.length - 1;
      }

      const item = currentAlbum.gridItems[nextItemIndex] as any;
      if (item.src) {
        setLightbox({ albumIndex: lightbox.albumIndex, itemIndex: nextItemIndex });
        break;
      }

      if (nextItemIndex === lightbox.itemIndex) break;
      nextItemIndex += direction;
    }
  };

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-24 px-5 relative">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-16 text-center">THE STAGE</h2>

        <div className="space-y-16">
          {/* Upcoming Shows */}
          <div>
            <h3 className="text-2xl text-[var(--color-text-white)] border-b border-[#333] pb-3 mb-6 tracking-wide">
              Upcoming Shows
            </h3>

            <div className="bg-[var(--color-dark-grey)] p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center border-l-4 border-[var(--color-blood-red)] transition-transform duration-300 hover:translate-x-2 shadow-lg">
              <div className="flex flex-col items-center justify-center min-w-[80px] border-r border-[#333] pr-6 mr-6 mb-4 md:mb-0">
                <span className="text-[var(--color-blood-red)] font-bold text-sm tracking-widest uppercase">TBA</span>
                <span className="text-3xl font-black leading-none mt-1">--</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1 text-[var(--color-text-white)]">Future Concert TBA</h4>
                <p className="text-[#888] text-sm tracking-wide">Location to be announced</p>
              </div>
              <button disabled className="mt-4 md:mt-0 px-6 py-2 border border-[#555] text-[#888] rounded text-sm uppercase font-bold cursor-not-allowed hidden md:block">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Past Shows */}
          <div>
            <h3 className="text-2xl text-[var(--color-text-white)] border-b border-[#333] pb-3 mb-6 tracking-wide">
              Past Shows
            </h3>

            <div className="space-y-4">
              {[
                { month: 'AUG', day: '09', title: '"Meeting Of Styles 2025 (Headline)"', location: 'Rruga B', anchor: 'album-mos' },
                { month: 'AUG', day: '08', title: '"Jazz Festival Mitrovica"', location: 'Sheshi Mitrovices', anchor: 'album-mitrovica' },
                { month: 'JUL', day: '23', title: '"Muzike E Gjalle" w/ The Milk Snatchers & Telikput', location: 'E.dh.e', anchor: 'album-muzike' },
                { month: 'JUL', day: '05', title: '"ERDHEN VAMPIRAT" Album Promotion', location: 'Soma Book Station', anchor: 'album-soma' },
                { month: 'MAY', day: '02', title: '"ERDHEN VAMPIRAT" Album Promotion', location: 'Lavjerr\'s', anchor: 'album-lavjerrs' }
              ].map((show, i) => (
                <div key={i} className="bg-[#111] p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center border-l-4 border-[#555] opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center justify-center min-w-[80px] border-r border-[#333] pr-6 mr-6 mb-4 md:mb-0">
                    <span className="text-[#888] font-bold text-sm tracking-widest uppercase">{show.month}</span>
                    <span className="text-3xl font-black leading-none mt-1 text-[#aaa]">{show.day}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 text-[var(--color-text-white)]">{show.title}</h4>
                    <p className="text-[#888] text-sm tracking-wide">{show.location}</p>
                  </div>
                  <Link href={`#${show.anchor}`} className="mt-4 md:mt-0 px-5 py-2 border border-[var(--color-blood-red)] text-[var(--color-blood-red)] rounded text-xs uppercase font-bold hover:bg-[var(--color-blood-red)] hover:text-white transition-colors tracking-wider">
                    View Live Footage
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* FOOTAGE SECTION */}
          <div className="pt-16 border-t border-[#222]" id="footage">
            <h3 className="text-3xl text-[var(--color-blood-red)] border-b border-[#333] pb-3 mb-10 tracking-[4px] font-black text-center">
              FOOTAGE ARCHIVE
            </h3>
            
            <div className="space-y-16">
              {albums.map((album, albumIndex) => (
                <div key={album.id} id={album.id} className="bg-[var(--color-dark-grey)] p-8 rounded-lg text-left border-l-4 border-[var(--color-blood-red)] shadow-xl scroll-mt-24">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[var(--color-text-white)] mb-1">{album.title}</h3>
                    <p className="text-[#888] text-sm uppercase tracking-wider">{album.date}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {album.gridItems.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-[#111] aspect-video rounded-md flex items-center justify-center text-[#444] text-xs relative border border-[#222] transition-all duration-300 hover:scale-105 hover:border-[var(--color-blood-red)] overflow-hidden cursor-pointer ${item.type === 'video' ? 'border-dashed' : ''} group`}
                        onClick={() => {
                          if ((item as any).src) {
                            setLightbox({ albumIndex, itemIndex });
                          }
                        }}
                      >
                        {(item as any).src ? (
                          <Image src={(item as any).src} alt={`${album.title} image`} fill className="object-cover transition-all duration-500 scale-105 group-hover:scale-100" />
                        ) : (
                          <>
                            {item.type === 'video' && (
                              <div className="absolute text-3xl text-[var(--color-blood-red)] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10">
                                ▶
                              </div>
                            )}
                            <span className="uppercase font-bold tracking-widest z-10">{item.type}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <span className="absolute top-8 right-10 text-white text-5xl font-bold cursor-pointer hover:text-[var(--color-blood-red)] transition-colors">&times;</span>
          <button onClick={(e) => navigateLightbox(e, -1)} className="absolute left-5 md:left-10 text-white text-3xl p-4 bg-black/50 hover:bg-[var(--color-blood-red)] rounded transition-colors z-[101]">&#10094;</button>
          <div className="relative w-[90%] md:w-[85%] h-[85vh]">
            <Image src={(albums[lightbox.albumIndex].gridItems[lightbox.itemIndex] as any).src} alt="Gallery Fullscreen" fill className="object-contain drop-shadow-2xl animate-[zoomIn_0.3s_ease]" />
          </div>
          <button onClick={(e) => navigateLightbox(e, 1)} className="absolute right-5 md:right-10 text-white text-3xl p-4 bg-black/50 hover:bg-[var(--color-blood-red)] rounded transition-colors z-[101]">&#10095;</button>
        </div>
      )}
    </div>
  );
}
