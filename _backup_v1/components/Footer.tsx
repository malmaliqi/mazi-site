export default function Footer() {
  return (
    <footer className="bg-[#020202] py-10 border-t border-[#111] mt-20">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="text-[var(--color-blood-red)] font-black text-2xl tracking-[3px] mb-4">MA&apos;ZI</h2>
        <h2 className="text-[var(--color-blood-red)] font-black text-2xl tracking-[3px] mb-4">VEQ ZI E MA&apos;ZI E MA&apos;ZI</h2>
        <h2 className="text-[var(--color-blood-red)] font-black text-2xl tracking-[3px] mb-4">ZI E MA&apos;ZI</h2>
        <h2 className="text-[var(--color-blood-red)] font-black text-2xl tracking-[3px] mb-4">ZI E MA&apos;ZI E MA&apos;ZI</h2>
        <p className="text-[#888] text-sm">Booking: booking@mazi-collective.com</p>
        <p className="text-[#888] text-sm">Info: info@mazi-collective.com</p>
        <div className="mt-8 text-[#555] text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} MA&apos;ZI Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
