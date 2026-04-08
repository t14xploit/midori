import { Leaf, Droplets, Hand } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_60%)] z-0" />

      {/* Main Heading - Responsive sizing to prevent 1200px overflow */}
      <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] xl:text-[9vw] font-serif leading-none text-[#667a46] z-10 text-center tracking-tight mb-[-4vh] md:mb-[-6vh] xl:mb-[-8vh]">
        Sakura Matcha
      </h1>

      {/* Product Image */}
      <div className="relative z-20 w-65 sm:w-[320px] md:w-100 xl:w-120">
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

      {/* Feature Icons - Persistent: Row on Mobile, Column on Desktop */}
      <div className="relative xl:absolute xl:left-12 2xl:left-24 xl:top-1/2 xl:-translate-y-1/2 flex flex-row xl:flex-col gap-6 sm:gap-10 xl:gap-12 z-30 mt-4 xl:mt-0">
        <FeatureItem icon={<Leaf size={20} strokeWidth={1} />} label="Ekologisk" />
        <FeatureItem icon={<Droplets size={20} strokeWidth={1} />} label="Ren" />
        <FeatureItem icon={<Hand size={20} strokeWidth={1} />} label="Balans" />
      </div>

      {/* Price & CTA */}
      <div className="relative xl:absolute xl:right-12 2xl:right-24 xl:top-1/2 xl:-translate-y-1/2 flex flex-col items-center xl:items-end gap-4 z-30 mt-8 xl:mt-0">
        <span className="text-xl md:text-3xl font-light tracking-tight opacity-80">159 SEK</span>
        <button className="flex items-center gap-4 bg-[#7D8063] hover:bg-[#6b6e54] text-white px-8 py-3 rounded-full shadow-lg transition-all active:scale-95 group">
          <span className="uppercase text-[10px] tracking-[0.2em] font-bold">Köp Nu</span>
          <span className="group-hover:translate-x-1 transition-transform">›</span>
        </button>
      </div>

      {/* Bottom Carousel */}
      <div className="absolute bottom-0 left-0 right-0 h-28 xl:h-32 arch-nav z-40 flex justify-center items-start pt-4">
        <div className="flex gap-4 px-8 overflow-x-auto no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-10 h-10 xl:w-14 xl:h-14 rounded-full glass-pill shrink-0 cursor-pointer border border-black/5 p-1">
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
    <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
      <div className="p-2.5 border border-black/5 rounded-full bg-white/40 backdrop-blur-sm">{icon}</div>
      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-medium">{label}</span>
    </div>
  );
}