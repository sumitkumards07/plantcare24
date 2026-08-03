'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-4 md:py-6 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <div className="flex-shrink-0 z-50">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-primary">
          Plantcare24
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {['About', 'Services', 'Engineers', 'Industries', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-base font-medium text-muted hover:text-primary transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Side / CTA & Mobile Menu Toggle */}
      <div className="flex items-center space-x-3 md:space-x-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-[24px] font-semibold text-base transition-shadow hover:shadow-lg hover:bg-hover"
        >
          <span>Join Waitlist</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        <button 
          className="md:hidden p-2 rounded-full border border-border bg-white/50 backdrop-blur-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5 text-primary stroke-[1.5]" /> : <Menu className="w-5 h-5 text-primary stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-xl flex flex-col space-y-4 md:hidden z-40"
          >
            {['About', 'Services', 'Engineers', 'Industries', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-primary hover:text-accent-blue transition-colors border-b border-border/40 pb-2 last:border-0"
              >
                {item}
              </Link>
            ))}
            <button className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-[24px] font-semibold text-base mt-2">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
