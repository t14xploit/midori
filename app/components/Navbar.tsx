"use client";
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 max-w-7xl mx-auto w-full">
      <div className="text-lg md:text-xl font-serif">Midori Café.</div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium opacity-70">
        <a href="#" className="hover:opacity-100 transition">Hem</a>
        <a href="#" className="hover:opacity-100 transition">Meny</a>
        <a href="#" className="hover:opacity-100 transition">Filosofi</a>
      </div>

      <div className="flex gap-4 md:gap-6 items-center">
        <User size={18} strokeWidth={1.5} className="cursor-pointer opacity-80" />
        <div className="relative">
          <ShoppingCart size={18} strokeWidth={1.5} className="cursor-pointer opacity-80" />
          <span className="absolute -top-2 -right-2 bg-white text-black text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </div>
        {/* Mobile Burger */}
        <Menu size={18} className="md:hidden cursor-pointer" />
      </div>
    </nav>
  );
}