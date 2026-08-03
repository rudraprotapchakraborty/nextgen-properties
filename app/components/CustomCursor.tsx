'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Spring config for a fluid, floating feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  
  // Outer circle position (with delay/spring)
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  
  // Inner dot position (instant snapping)
  const dotX = useSpring(-100, { damping: 100, stiffness: 2000, mass: 0.1 });
  const dotY = useSpring(-100, { damping: 100, stiffness: 2000, mass: 0.1 });

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // 32px width -> center is 16
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);  // 8px width -> center is 4
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!isMounted) return null;

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer floating ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#1F5C8F] pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHidden ? 0 : isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? 'rgba(31, 92, 143, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Inner instant dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C02A08] pointer-events-none z-[10000]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
