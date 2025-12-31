'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, ChevronDown } from 'lucide-react';
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
  { 
    href: '/resources', 
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Flame className="h-10 w-10 text-orange-500 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-orange-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-slate-800 dark:text-white">Kontent</span>
              <span className="fire-text">Fire</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href={link.href} className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors font-medium py-2">
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 min-w-[180px]">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-orange-500">
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
            <Link href="https://app.kontentfire.com/register"><Button variant="primary">Start Free Trial</Button></Link>
          </div>

          <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white dark:bg-slate-900 rounded-b-2xl shadow-xl overflow-hidden">
              <div className="px-4 py-6 space-y-4">
                <Link href="/features" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Features</Link>
                <Link href="/how-it-works" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>How It Works</Link>
                <Link href="/use-cases" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Use Cases</Link>
                <Link href="/pricing" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/demo" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Demo</Link>
                <Link href="/blog" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/faq" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>FAQ</Link>
                <Link href="/about" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>About</Link>
                <div className="pt-4 space-y-3">
                  <Link href="https://app.kontentfire.com/login" className="block"><Button variant="outline" className="w-full">Log In</Button></Link>
                  <Link href="https://app.kontentfire.com/register" className="block"><Button variant="primary" className="w-full">Start Free Trial</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}