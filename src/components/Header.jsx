import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header({ onMenuClick, theme }) {
  // Determine text color based on theme background
  const textColor = theme.background.includes('white') || 
                    theme.background.includes('light') ? 
                    'text-gray-800' : 'text-gray-100';
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-6 right-6 z-30"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            px-4 py-2 rounded-full backdrop-blur-sm border
            ${theme.card}
          `}
        >
          <span className={`font-bold text-lg ${theme.accent}`}>
            DevQuotes
          </span>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3"
        >
          {/* Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className={`
              p-3 rounded-full backdrop-blur-sm border
              ${theme.card} ${theme.text}
              hover:bg-opacity-80 transition-all duration-200
            `}
            title="Themes"
          >
            <Menu size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}
