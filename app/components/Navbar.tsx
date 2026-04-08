"use client";
import { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 py-8 max-w-7xl mx-auto w-full">
      <div className="text-xl font-serif text-[#615E58]">Midori Café.</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[10px] tracking-[0.3em] uppercase font-semibold text-[#615E58]/70">
        <a href="#" className="hover:text-[#667a46] transition">Hem</a>
        <a href="#" className="hover:text-[#667a46] transition">Meny</a>
        <a href="#" className="hover:text-[#667a46] transition">Filosofi</a>
        <a href="#" className="hover:text-[#667a46] transition">Kontakt</a>
      </div>

      <div className="flex gap-6 items-center text-[#615E58]">
        <User size={20} strokeWidth={1} className="hidden sm:block cursor-pointer" />
        <ShoppingCart size={20} strokeWidth={1} className="cursor-pointer" />
        
        {/* Burger Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#e5e2dd] p-8 flex flex-col items-center gap-6 shadow-xl border-t border-black/5 md:hidden z-90">
          <a href="#" className="uppercase tracking-widest text-sm">Hem</a>
          <a href="#" className="uppercase tracking-widest text-sm">Meny</a>
          <a href="#" className="uppercase tracking-widest text-sm">Filosofi</a>
          <a href="#" className="uppercase tracking-widest text-sm">Kontakt</a>
        </div>
      )}
    </nav>
  );
}