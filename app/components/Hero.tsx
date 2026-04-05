import { Leaf, Droplets, Hand } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(45,79,63,0.4)_0%,transparent_70%)]" />

      {/* Title: Responsive Sizing */}
      <h1 className="text-[18vw] md:text-[12vw] font-serif leading-none opacity-80 z-10 text-center pointer-events-none mt-[-10vh]">
        Isad <br className="md:hidden" /> Matcha
      </h1>

      {/* Main Product Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-20 w-70 md:w-105">
        <img 
          src="/matcha-glass.png" 
          alt="Matcha" 
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" 
        />
      </div>

      {/* Desktop Features (Hidden on Mobile) */}
      <div className="hidden md:flex absolute left-16 top-1/2 -translate-y-1/2 flex-col gap-16 z-30">
        <FeatureItem icon={<Leaf size={20} />} label="Ekologisk" />
        <FeatureItem icon={<Droplets size={20} />} label="Ren" />
        <FeatureItem icon={<Hand size={20} />} label="Balans" />
      </div>

      {/* Price & CTA: Centered on Mobile, Right-aligned on Desktop */}
      <div className="absolute bottom-32 md:bottom-auto md:right-16 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center md:items-end gap-4 md:gap-6 z-30 w-full md:w-auto">
        <span className="text-2xl md:text-3xl font-light tracking-tight">159 SEK</span>
        <button className="flex items-center gap-4 bg-[#1A2E26] hover:bg-[#243d32] pl-8 pr-4 py-3 rounded-full border border-white/10 transition-all group active:scale-95">
          <span className="uppercase text-[10px] tracking-[0.2em] font-bold">Köp Nu</span>
          <div className="bg-white/10 rounded-full p-1">
            <span className="text-xl leading-none">›</span>
          </div>
        </button>
      </div>

      {/* Bottom Selection Carousel: Scrollable on small screens */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 glass-pill px-4 md:px-6 py-3 rounded-full flex gap-3 md:gap-4 z-40 max-w-[90vw] overflow-x-auto no-scrollbar">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-midori-dark border border-white/10 cursor-pointer shrink-0" />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition cursor-default">
      {icon}
      <span className="text-[9px] uppercase tracking-[0.3em] font-light">{label}</span>
    </div>
  );
}