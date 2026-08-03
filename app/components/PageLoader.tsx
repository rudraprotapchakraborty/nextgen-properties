'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Backdrop with brand gradient */}
          <div className="absolute inset-0 bg-[#f8fbf4] dark:bg-zinc-950" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60 dark:opacity-30"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(31, 92, 143,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(192, 42, 8,0.12), transparent 60%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Animated building logo mark */}
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full stroke-[#1F5C8F] stroke-[2px] fill-transparent opacity-30"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  fillRule="evenodd"
                  d="M 26 18 H 74 V 90 H 26 Z
                     M 34 26 H 42 V 34 H 34 Z
                     M 46 26 H 54 V 34 H 46 Z
                     M 58 26 H 66 V 34 H 58 Z
                     M 34 40 H 42 V 48 H 34 Z
                     M 46 40 H 54 V 48 H 46 Z
                     M 58 40 H 66 V 48 H 58 Z
                     M 34 54 H 42 V 62 H 34 Z
                     M 46 54 H 54 V 62 H 46 Z
                     M 58 54 H 66 V 62 H 58 Z
                     M 43 74 H 57 V 90 H 43 Z"
                />
                <path d="M 50 18 V 9 M 16 90 H 84" strokeWidth="1" opacity="0.5" />
              </svg>

              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-[#1F5C8F]">
                <defs>
                  <clipPath id="building-shape">
                    <path
                      fillRule="evenodd"
                      d="M 26 18 H 74 V 90 H 26 Z
                         M 34 26 H 42 V 34 H 34 Z
                         M 46 26 H 54 V 34 H 46 Z
                         M 58 26 H 66 V 34 H 58 Z
                         M 34 40 H 42 V 48 H 34 Z
                         M 46 40 H 54 V 48 H 46 Z
                         M 58 40 H 66 V 48 H 58 Z
                         M 34 54 H 42 V 62 H 34 Z
                         M 46 54 H 54 V 62 H 46 Z
                         M 58 54 H 66 V 62 H 58 Z
                         M 43 74 H 57 V 90 H 43 Z"
                    />
                  </clipPath>
                  <clipPath id="water-fill-clip">
                    <motion.path
                      d="M 0 50 Q 25 35 50 50 T 100 50 T 150 50 T 200 50 L 200 250 L 0 250 Z"
                      initial={{ x: 0, y: 70 }}
                      animate={{ x: [0, -100], y: [70, -60] }}
                      transition={{
                        x: { repeat: Infinity, repeatType: 'loop', duration: 1.2, ease: 'linear' },
                        y: { duration: 1.5, ease: 'easeInOut' },
                      }}
                    />
                  </clipPath>
                </defs>

                <g clipPath="url(#building-shape)">
                  <rect x="0" y="0" width="100" height="100" clipPath="url(#water-fill-clip)" />
                </g>
              </svg>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl tracking-tight text-zinc-900 dark:text-zinc-100">
                NextGen
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1F5C8F]">
                Property Limited
              </span>
            </div>

            <div className="relative w-32 h-[3px] rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#1F5C8F] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
