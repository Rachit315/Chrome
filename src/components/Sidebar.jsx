import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Crown } from 'lucide-react';
import { themes } from '../data/themes';

export function Sidebar({ isOpen, onClose, currentTheme, onThemeChange, isPremiumUnlocked, onUnlockPremium }) {
  const freeThemes = Object.values(themes).filter(theme => !theme.isPremium);
  const premiumThemes = Object.values(themes).filter(theme => theme.isPremium);

  const handleThemeSelect = (themeId) => {
    const theme = themes[themeId];
    if (theme.isPremium && !isPremiumUnlocked) {
      return; // Don't allow selection of locked themes
    }
    onThemeChange(themeId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`
              fixed top-0 right-0 h-full w-96 max-w-[90vw] z-50
              border-l backdrop-blur-md overflow-y-auto
              ${currentTheme.sidebar}
            `}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className={`text-2xl font-bold ${currentTheme.text}`}>
                  Themes
                </h2>
                <button
                  onClick={onClose}
                  className={`
                    p-2 rounded-lg transition-colors
                    hover:bg-gray-500/20 ${currentTheme.text}
                  `}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Free Themes */}
              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${currentTheme.text}`}>
                  Free Themes
                </h3>
                <div className="space-y-3">
                  {freeThemes.map((theme) => (
                    <ThemeCard
                      key={theme.id}
                      theme={theme}
                      isSelected={currentTheme.id === theme.id}
                      isLocked={false}
                      onClick={() => handleThemeSelect(theme.id)}
                      currentTheme={currentTheme}
                    />
                  ))}
                </div>
              </div>

              {/* Premium Themes */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Crown size={20} className="text-yellow-500" />
                  <h3 className={`text-lg font-semibold ${currentTheme.text}`}>
                    Builder Bundle
                  </h3>
                </div>
                <div className="space-y-3">
                  {premiumThemes.map((theme) => (
                    <ThemeCard
                      key={theme.id}
                      theme={theme}
                      isSelected={currentTheme.id === theme.id}
                      isLocked={!isPremiumUnlocked}
                      onClick={() => handleThemeSelect(theme.id)}
                      currentTheme={currentTheme}
                    />
                  ))}
                </div>

                {/* Unlock Button */}
                {!isPremiumUnlocked && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onUnlockPremium}
                    className={`
                      w-full mt-6 px-6 py-4 rounded-xl font-semibold
                      transition-all duration-200
                      ${currentTheme.button}
                      shadow-lg hover:shadow-xl
                    `}
                  >
                    🔓 Unlock All Backgrounds – Lifetime Access
                  </motion.button>
                )}

                {isPremiumUnlocked && (
                  <div className={`
                    w-full mt-6 px-6 py-4 rounded-xl text-center
                    ${currentTheme.card} border
                  `}>
                    <span className={`text-sm font-medium ${currentTheme.accent}`}>
                      ✨ Premium Unlocked!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ThemeCard({ theme, isSelected, isLocked, onClick, currentTheme }) {
  return (
    <motion.button
      whileHover={!isLocked ? { scale: 1.02 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={isLocked}
      className={`
        w-full p-4 rounded-xl text-left transition-all duration-200
        ${isSelected 
          ? `${currentTheme.button} shadow-lg` 
          : `${currentTheme.card} border hover:border-opacity-60`
        }
        ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className={`font-medium ${isSelected ? 'text-white' : currentTheme.text}`}>
              {theme.name}
            </h4>
            {isLocked && <Lock size={16} className={currentTheme.text} />}
          </div>
          
          {/* Theme Preview */}
          <div className="w-full h-8 rounded-lg overflow-hidden border border-gray-300/20">
            <div 
              className={`
                w-full h-full ${theme.background}
                ${theme.backgroundImage ? '' : ''}
              `}
              style={theme.backgroundImage ? {
                backgroundImage: theme.backgroundImage,
                backgroundSize: theme.backgroundSize
              } : {}}
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
