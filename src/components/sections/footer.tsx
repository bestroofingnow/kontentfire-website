import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
  ],
  useCases: [
    { label: 'For Agencies', href: '/use-cases#agencies' },
    { label: 'For Small Business', href: '/use-cases#small-business' },
    { label: 'For Creators', href: '/use-cases#creators' },
    { label: 'For E-commerce', href: '/use-cases#ecommerce' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/kontentfire', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/kontentfire', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@kontentfire.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo-transparent.png" alt="KontentFire" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">Kontent<span className="text-orange-500">Fire</span></span>
            </Link>
            <p className="text-slate-400 mb-6 text-sm">AI-powered content automation for social media. Create, schedule, and publish effortlessly.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="text-slate-400 hover:text-orange-500 transition-colors" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">{footerLinks.product.map((link) => (<li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors text-sm">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-3">{footerLinks.useCases.map((link) => (<li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors text-sm">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">{footerLinks.resources.map((link) => (<li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors text-sm">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">{footerLinks.legal.map((link) => (<li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors text-sm">{link.label}</Link></li>))}</ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} KontentFire. All rights reserved.</p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">hello@kontentfire.com</p>
        </div>
      </div>
    </footer>
  );
}