import { ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-10 max-w-7xl mx-auto w-full">
      <div className="text-xl font-serif text-[#615E58]">Midori Café.</div>
      
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase font-semibold text-[#615E58]/70">
        <a href="#" className="hover:text-sakura-accent transition">Hem</a>
        <a href="#" className="hover:text-sakura-accent transition">Meny</a>
        <a href="#" className="hover:text-sakura-accent transition">Filosofi</a>
        <a href="#" className="hover:text-sakura-accent transition">Kontakt</a>
      </div>

      <div className="flex gap-8 items-center text-[#615E58]">
        <User size={20} strokeWidth={1} className="cursor-pointer" />
        <ShoppingCart size={20} strokeWidth={1} className="cursor-pointer" />
      </div>
    </nav>
  );
}