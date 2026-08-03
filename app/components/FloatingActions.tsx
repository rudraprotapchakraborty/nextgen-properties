'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-700 dark:text-zinc-200 p-3 rounded-2xl shadow-lg border border-white/60 dark:border-white/10 hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="actions"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="flex flex-col items-end gap-2"
          >
            <Link
              href="tel:+8801894442810"
              className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 dark:border-white/10 text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:text-[#1F5C8F] transition-colors"
            >
              <Phone size={16} className="text-[#1F5C8F]" />
              Call us
            </Link>
            <Link
              href="https://wa.me/8801894442810"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-2xl shadow-lg text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              <MessageCircle size={16} />
              WhatsApp
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle quick contact"
        className="relative bg-gradient-to-br from-[#1F5C8F] to-[#09A2DC] text-white p-4 rounded-full shadow-xl shadow-[#1F5C8F]/30"
      >
        <span className="absolute inset-0 rounded-full bg-[#1F5C8F]/40 animate-ping opacity-60" aria-hidden />
        <MessageCircle size={26} className="relative" />
      </motion.button>
    </div>
  );
}
