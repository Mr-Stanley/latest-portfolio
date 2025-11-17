'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-12 h-6 rounded-full bg-[#6f1cd7]/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6f1cd7] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#6f1cd7] shadow-lg"
        animate={{
          x: theme === 'light' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'light' ? (
          <span className="absolute inset-0 flex items-center justify-center text-[10px]">☀️</span>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[10px]">🌙</span>
        )}
      </motion.div>
    </motion.button>
  );
}

