"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import GraffitiMural from '@/components/GraffitiMural';
import { Suspense } from 'react';

function ConfirmOrderContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const firstName = searchParams.get('name') || 'customer';
  const orderNum = String(searchParams.get('order') || '');

  const confirmSub = `MA'ZI Order Confirmation: ${orderNum}`;
  const confirmBody = `Hi ${firstName},\n\nWe have received your order ${orderNum} and will be sending it shortly.\n\nStay dark,\nMA'ZI Collective`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(confirmSub)}&body=${encodeURIComponent(confirmBody)}`;

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-5 relative overflow-hidden">
      <GraffitiMural opacity="opacity-[0.4]" />
      <div className="max-w-[600px] mx-auto text-center relative z-10">
        <div className="mb-8 text-6xl animate-flicker">🦇</div>
        <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-4 tracking-wide">MA&apos;ZI Ritual Hub</h2>
        <p className="text-sm tracking-[4px] uppercase text-[var(--color-blood-red)] mb-12 font-bold italic">Order Verification</p>
        
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-10 mb-12 text-left shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl">ZI</div>
          
          <div className="mb-8 border-l-2 border-[var(--color-blood-red)] pl-6">
            <p className="text-[#666] text-xs uppercase tracking-widest mb-1">Customer</p>
            <p className="text-white font-bold">{firstName} ({email})</p>
          </div>
          
          <div className="mb-10 border-l-2 border-[var(--color-blood-red)] pl-6">
            <p className="text-[#666] text-xs uppercase tracking-widest mb-1">Ritual ID</p>
            <p className="text-[var(--color-blood-red)] font-black">{orderNum}</p>
          </div>

          <a 
            href={mailtoLink}
            className="block w-full text-center py-5 bg-[var(--color-blood-red)] text-white font-black uppercase tracking-[4px] hover:bg-[var(--color-accent-red)] transition-all duration-500 shadow-[0_0_20px_rgba(138,3,3,0.2)] hover:shadow-[0_0_40px_rgba(138,3,3,0.4)]"
          >
            Send Ritual Activation
          </a>
          <p className="text-[#444] text-[10px] text-center mt-6 uppercase tracking-widest leading-relaxed">
            This will open your email app with a pre-filled message.<br/> Just click send to finalize.
          </p>
        </div>

        <Link href="/" className="text-xs tracking-[3px] uppercase text-[#666] hover:text-[var(--color-blood-red)] transition-colors border-b border-transparent hover:border-[var(--color-blood-red)] pb-1 pt-4">
          Return to Portal
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmOrderPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen"></div>}>
      <ConfirmOrderContent />
    </Suspense>
  );
}
