import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { developerQuotes } from './data/quotes';
import { themes } from './data/themes';
import { useLocalStorage } from './hooks/useLocalStorage';
import { QuoteDisplay } from './components/QuoteDisplay';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  const [currentQuote, setCurrentQuote] = useState(developerQuotes[0]);
  const [currentThemeId, setCurrentThemeId] = useLocalStorage('devquotes-theme', 'light');
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useLocalStorage('devquotes-premium', true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quoteKey, setQuoteKey] = useState(0); // For triggering quote animations

  const currentTheme = themes[currentThemeId] || themes.light;

  // Get random quote on mount and refresh
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * developerQuotes.length);
    setCurrentQuote(developerQuotes[randomIndex]);
    setQuoteKey(prev => prev + 1); // Trigger re-animation
  };

  useEffect(() => {
    getRandomQuote();
    
    // Set up interval to change quote every 45 seconds
    const intervalId = setInterval(() => {
      getRandomQuote();
    }, 45000); // 45 seconds in milliseconds
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleThemeChange = (themeId) => {
    setCurrentThemeId(themeId);
  };



  const backgroundStyle = currentTheme.customStyles ? {
    ...currentTheme.customStyles
  } : currentTheme.backgroundImage ? {
    backgroundImage: currentTheme.backgroundImage,
    backgroundSize: currentTheme.backgroundSize,
    backgroundPosition: currentTheme.backgroundPosition || '0 0'
  } : {};

  return (
    <div 
      className={`
        min-h-screen transition-all duration-500
        ${currentTheme.background}
      `}
      style={backgroundStyle}
    >
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)}
        theme={currentTheme}
      />

      <motion.main
        key={quoteKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <QuoteDisplay 
          quote={currentQuote} 
          theme={currentTheme}
        />
      </motion.main>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Keyboard shortcuts info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 left-6 z-20"
      >
        <div className={`
          px-4 py-2 rounded-full backdrop-blur-sm border text-sm
          ${currentTheme.card} ${currentTheme.text}
        `}>
          Press <kbd className={`px-1 py-0.5 rounded font-mono text-xs ${currentTheme.accent}`}>Space</kbd> for new quote
        </div>
      </motion.div>

      {/* Global keyboard handler */}
      <KeyboardHandler onRefresh={getRandomQuote} />
    </div>
  );
}

// Keyboard shortcuts component
function KeyboardHandler({ onRefresh }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        onRefresh();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onRefresh]);

  return null;
}

export default App;
