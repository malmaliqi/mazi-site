"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import GraffitiMural from '@/components/GraffitiMural';

const albums = [
  {
    id: 'album-mos',
    title: 'Meeting Of Styles 2025 (Headline)',
    date: 'August 9, 2025 — Rruga B',
    gridItems: [
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 1.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025  2.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 3.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 4.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 5.jpg' },
      { type: 'photo', src: '/MOS 2025/Mal Maliqi - MOS 2025 6.jpg' }
    ]
  },
  { id: 'album-mitrovica', title: 'Jazz Festival Mitrovica', date: 'August 8, 2025 — Sheshi Mitrovices', gridItems: [{ type: 'video' }, { type: 'photo' }, { type: 'photo' }, { type: 'photo' }] },
  { id: 'album-muzike', title: 'Muzike E Gjalle w/ The Milk Snatchers & Telikput', date: 'July 23, 2025 — E.dh.e', gridItems: [{ type: 'photo' }, { type: 'photo' }] },
  { id: 'album-soma', title: 'ERDHEN VAMPIRAT Album Promotion', date: 'July 5, 2025 — Soma Book Station', gridItems: [{ type: 'photo' }, { type: 'video' }, { type: 'photo' }] },
  { id: 'album-lavjerrs', title: 'ERDHEN VAMPIRAT Album Promotion', date: 'May 2, 2025 — Lavjerr\'s', gridItems: [{ type: 'photo' }, { type: 'photo' }, { type: 'photo' }] },
];

export default function Shows() {
  const [lightbox, setLightbox] = useState<{ albumIndex: number, itemIndex: number } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;


  const navigateLightbox = (e: React.MouseEvent | React.TouchEvent | null, direction: 1 | -1) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
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

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) navigateLightbox(null, 1);
    if (isRightSwipe) navigateLightbox(null, -1);
  };


  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-6 md:px-20 relative overflow-hidden animate-entrance">
      <GraffitiMural />
      <div className="max-w-[900px] mx-auto relative z-10">
        <p className="text-xs md:text-base tracking-[4px] md:tracking-[6px] uppercase text-[var(--color-blood-red)] mb-12 md:mb-20 font-bold">LIVE SHOWS</p>

        {/* ══════ UPCOMING ══════ */}
        <div className="mb-24">
          <p className="text-sm tracking-[4px] uppercase text-[#aaa] mb-8 font-bold">Upcoming</p>
          <div className="border-l-2 border-[var(--color-blood-red)] pl-6 py-4">
            <p className="text-[var(--color-text-white)] text-lg font-light mb-1">TBA</p>
            <p className="text-xs tracking-[3px] uppercase text-[#888]">Date & Location to be announced</p>
          </div>
        </div>

        {/* ══════ PAST SHOWS ══════ */}
        <div className="mb-12">
          <p className="text-sm tracking-[4px] uppercase text-[#aaa] mb-8 font-bold">Past completed shows</p>
          <div className="space-y-4">
            {[
              { month: 'AUG', day: '09', title: 'Meeting Of Styles 2025 (Headline)', location: 'Rruga B', anchor: 'album-mos' },
              { month: 'AUG', day: '08', title: 'Jazz Festival Mitrovica', location: 'Sheshi Mitrovices', anchor: 'album-mitrovica' },
              { month: 'JUL', day: '23', title: 'Muzike E Gjalle w/ The Milk Snatchers & Telikput', location: 'E.dh.e', anchor: 'album-muzike' },
              { month: 'JUL', day: '05', title: 'ERDHEN VAMPIRAT Album Promotion', location: 'Soma Book Station', anchor: 'album-soma' },
              { month: 'MAY', day: '02', title: 'ERDHEN VAMPIRAT Album Promotion', location: "Lavjerr's", anchor: 'album-lavjerrs' }
            ].map((show, i) => (
              <div key={i} className="flex items-start gap-4 md:gap-6 border-l-2 border-[#333] pl-4 md:pl-6 py-4 hover:border-[var(--color-blood-red)] transition-colors duration-700 group">
                <div className="text-right min-w-[35px] md:min-w-[40px]">
                  <p className="text-[10px] md:text-xs tracking-[1px] md:tracking-[2px] uppercase text-[#999] font-bold">{show.month}</p>
                  <p className="text-xl md:text-2xl font-black text-[#bbb] group-hover:text-[var(--color-text-white)] transition-colors duration-700">{show.day}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[var(--color-text-white)] text-base font-medium mb-1 group-hover:text-[var(--color-blood-red)] transition-colors duration-700">{show.title}</p>
                  <p className="text-xs tracking-[2px] uppercase text-[#999]">{show.location}</p>
                </div>
                <Link href={`#${show.anchor}`} className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#999] hover:text-[var(--color-blood-red)] transition-colors duration-700 self-center border-b border-[#333] pb-1">
                  Footage
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ══════ FOOTAGE ARCHIVE ══════ */}
        <div className="border-t border-[#0a0a0a] pt-24" id="footage">
          <p className="text-sm md:text-base tracking-[6px] uppercase text-[var(--color-blood-red)] mb-16 font-bold">Footage Archive</p>

          <div className="space-y-24">
            {albums.map((album, albumIndex) => (
              <div key={album.id} id={album.id} className="scroll-mt-24">
                <div className="mb-6 border-l-2 border-[var(--color-blood-red)] pl-6">
                  <p className="text-[var(--color-text-white)] text-base font-medium mb-1">{album.title}</p>
                  <p className="text-xs tracking-[2px] uppercase text-[#999]">{album.date}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {album.gridItems.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="aspect-[4/3] relative overflow-hidden cursor-pointer group bg-[#080808]"
                      onClick={() => {
                        if ((item as any).src) {
                          setLightbox({ albumIndex, itemIndex });
                        }
                      }}
                    >
                      {(item as any).src ? (
                        <Image src={(item as any).src} alt={`${album.title}`} fill className="object-cover hover-distort group-hover:opacity-100 transition-opacity duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {item.type === 'video' && (
                            <span className="text-[var(--color-blood-red)] text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700">▶</span>
                          )}
                          {item.type === 'photo' && (
                            <span className="text-xs tracking-[3px] uppercase text-[#555]">Photo</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <span className="absolute top-8 right-10 text-[#888] text-3xl cursor-pointer hover:text-[var(--color-blood-red)] transition-colors duration-700 z-[110] md:block hidden">&times;</span>
          <span className="absolute top-6 left-6 text-white text-3xl cursor-pointer z-[110] md:hidden">&times;</span>
          
          <button onClick={(e) => navigateLightbox(e, -1)} className="absolute left-5 md:left-10 text-[#888] text-2xl p-3 hover:text-[var(--color-blood-red)] transition-colors z-[101] hidden md:block">&#10094;</button>
          <div className="relative w-full md:w-[80%] h-full max-h-[70vh] md:max-h-[85vh]">
            <Image src={(albums[lightbox.albumIndex].gridItems[lightbox.itemIndex] as any).src} alt="Gallery" fill className="object-contain" />
          </div>
          <button onClick={(e) => navigateLightbox(e, 1)} className="absolute right-5 md:right-10 text-[#888] text-2xl p-3 hover:text-[var(--color-blood-red)] transition-colors z-[101] hidden md:block">&#10095;</button>
          
          {/* Swipe indicator for mobile */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[4px] uppercase text-[#444] md:hidden animate-pulse">
            Swipe to Navigate
          </div>
        </div>
      )}
    </div>
  );
}
