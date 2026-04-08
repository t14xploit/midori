import { Leaf, Droplets, Hand } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Soft Ambient Smoke/Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_60%)] z-0" />

      {/* Main Heading */}
      <h1 className="text-[10vw] font-serif leading-none text-[#667a46] z-10 text-center tracking-tight">
        Sakura Matcha
      </h1>

      {/* Product Image (The Cup) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] z-20 w-[320px] md:w-120">
        <div className="relative aspect-square">
          <Image 
            src="/matcha-glass.png" 
            alt="Sakura Matcha Latte" 
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Left Features Sidebar */}
      <div className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-30">
        <FeatureItem icon={<Leaf size={22} strokeWidth={1} />} label="Ekologisk" />
        <FeatureItem icon={<Droplets size={22} strokeWidth={1} />} label="Ren" />
        <FeatureItem icon={<Hand size={22} strokeWidth={1} />} label="Balans" />
      </div>

      {/* Right Pricing & CTA */}
      <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 flex flex-col items-center md:items-end gap-6 z-30">
        <span className="text-3xl font-light tracking-tight opacity-80">159 SEK</span>
        <button className="flex items-center gap-4 bg-[#7D8063] hover:bg-[#6b6e54] text-white px-6 py-2.5 rounded-full shadow-lg transition-all group active:scale-95">
          <span className="uppercase text-[10px] tracking-[0.2em] font-bold">Köp Nu</span>
          <span className="text-lg opacity-70 group-hover:translate-x-1 transition-transform">›</span>
        </button>
      </div>

      {/* Bottom Arched Carousel Container */}
      <div className="absolute bottom-0 left-0 right-0 h-32 arch-nav z-40 flex justify-center items-start pt-6">
        <div className="flex gap-4 px-8 overflow-x-auto no-scrollbar max-w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-pill overflow-hidden shrink-0 cursor-pointer hover:scale-110 transition border border-black/5 p-1">
              <div className="w-full h-full rounded-full bg-[#E5E2DD]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
      <div className="p-2 border border-black/5 rounded-full">{icon}</div>
      <span className="text-[9px] uppercase tracking-[0.3em] font-medium">{label}</span>
    </div>
  );
}