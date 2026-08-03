'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send, ArrowUpRight, ArrowRight } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PinterestIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.5 20c.5-2 1.5-6 1.5-6m0 0c-.4-.8-.6-1.8-.6-2.7 0-1.9 1.1-3.3 2.6-3.3 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.7-.3 1.2.6 2.2 1.9 2.2 2.2 0 3.7-2.8 3.7-6.2 0-2.6-1.8-4.5-5-4.5-3.6 0-5.9 2.7-5.9 5.7 0 1 .3 1.8.8 2.3" />
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative mt-24 text-zinc-400">
      {/* CTA banner */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="relative -mb-24 z-10 rounded-[36px] overflow-hidden bg-gradient-to-br from-[#1F5C8F] via-[#1A4E76] to-[#163F63] text-white shadow-[0_30px_80px_-30px_rgba(31, 92, 143,0.6)]">
          <div className="absolute inset-0 opacity-25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/building2.png" alt="" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F5C8F]/95 to-[#0D2740]/85" />
          </div>
          <div className="relative px-8 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-white/70">
                Ready to begin
              </span>
              <h3 className="font-display text-3xl md:text-5xl mt-3 leading-[1.05]">
                Let&apos;s find your modern space.
              </h3>
              <p className="text-white/80 mt-3 max-w-2xl text-pretty">
                Reach out to NextGen Property Limited and our team will get back to you about
                availability, pricing and site visits.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="mailto:nextgenproperty2020@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-[#163F63] px-6 py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.03] transition-transform"
              >
                Email us
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="tel:+8801894442810"
                className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Call +880 1894-442 810
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 text-zinc-400 pt-40 pb-10 border-t border-zinc-900 relative">
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <Link href="/" className="inline-block bg-white/5 p-1.5 rounded-2xl w-max backdrop-blur-sm border border-white/10">
                <Image
                  src="/logo.png"
                  alt="NextGen Property Limited"
                  width={200}
                  height={80}
                  className="object-contain rounded-xl h-14 w-auto"
                />
              </Link>
              <p className="text-sm leading-relaxed max-w-md">
                NextGen Property Limited designs modern spaces and apartments in Dhaka. Our success
                is determined not only by the results we acquire, but also by the manner in which
                we achieve them.
              </p>

              {/* Chairman card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/chairman.jpeg"
                    alt="Mohammad Yahya Bhuiyan, Chairman"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-zinc-100 leading-tight">
                    Mohammad Yahya Bhuiyan
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#09A2DC] mt-1 mb-2">
                    Chairman
                  </div>
                  <Link
                    href="mailto:nextgenproperty2020@gmail.com"
                    className="inline-flex items-center gap-1 text-xs font-medium hover:text-[#09A2DC] transition-colors"
                  >
                    Contact us <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                {[
                  { Icon: FacebookIcon, label: 'Facebook' },
                  { Icon: TwitterIcon, label: 'Twitter' },
                  { Icon: PinterestIcon, label: 'Pinterest' },
                  { Icon: InstagramIcon, label: 'Instagram' },
                ].map(({ Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#1F5C8F]/50 hover:bg-[#1F5C8F]/15 hover:text-[#09A2DC] transition-colors"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <h4 className="text-zinc-100 font-semibold mb-5 text-base tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#09A2DC] transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#1F5C8F] mr-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="text-zinc-100 font-semibold mb-5 text-base tracking-wide">
                Visit Our Office
              </h4>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-3 text-[#09A2DC] flex-shrink-0 mt-1" />
                  <span>
                    House# 105, Road# 06, 2nd Floor
                    <br />
                    Mohakhali DOHS, Dhaka-1206
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-3 text-[#09A2DC] flex-shrink-0" />
                  <span>+880 1894-442 810</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-3 text-[#09A2DC] flex-shrink-0" />
                  <span>nextgenproperty2020@gmail.com</span>
                </li>
              </ul>

              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Newsletter email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-14 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C8F]/40 focus:border-[#1F5C8F] transition-all text-zinc-100 placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-xl bg-[#1F5C8F] text-white hover:bg-[#09A2DC] transition-colors"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
            <p>
              &copy; {currentYear} NextGen Property Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-zinc-500">
              <Link href="#" className="hover:text-[#09A2DC] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
