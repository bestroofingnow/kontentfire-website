'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  {
    href: '/features',
    label: 'Features',
    dropdown: [
      { href: '/features', label: 'All Features' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/demo', label: 'Product Demo' },
    ]
  },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/locations', label: 'Locations' },
  {
    href: '/blog',
    label: 'Resources',
    dropdown: [
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'About Us' },
    ]
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [logoSrc, setLogoSrc] = useState('/logo-transparent.png');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only load animated GIF on desktop (768px+) for better mobile performance
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) {
      const img = new window.Image();
      img.src = '/logo-transparent.gif';
      img.onload = () => setLogoSrc('/logo-transparent.gif');
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={logoSrc}
              alt="KontentFire"
              width={48}
              height={48}
              className="h-10 w-auto group-hover:scale-105 transition-transform"
              unoptimized={logoSrc.endsWith('.gif')}
              priority
            />
            <span className="text-xl font-bold text-slate-900">Kontent<span className="text-orange-500">Fire</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href={link.href} className="flex items-center gap-1 text-blue-900 hover:text-orange-500 transition-colors font-medium py-2">
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[180px]">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2 text-blue-900 hover:bg-orange-50 hover:text-orange-500">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://app.kontentfire.com/login"><Button variant="ghost">Log In</Button></Link>
            <Link href="https://app.kontentfire.com/register"><Button variant="primary">Sign Up Now</Button></Link>
          </div>

          <button className="md:hidden p-2 text-blue-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white rounded-b-2xl shadow-xl overflow-hidden">
              <div className="px-4 py-6 space-y-4">
                <Link href="/features" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Features</Link>
                <Link href="/how-it-works" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>How It Works</Link>
                <Link href="/use-cases" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Use Cases</Link>
                <Link href="/pricing" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/locations" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Locations</Link>
                <Link href="/demo" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Demo</Link>
                <Link href="/blog" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/faq" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>FAQ</Link>
                <Link href="/about" className="block py-2 text-blue-900 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>About</Link>
                <div className="pt-4 space-y-3">
                  <Link href="https://app.kontentfire.com/login" className="block"><Button variant="outline" className="w-full">Log In</Button></Link>
                  <Link href="https://app.kontentfire.com/register" className="block"><Button variant="primary" className="w-full">Sign Up Now</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
