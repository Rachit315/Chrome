import { motion } from 'framer-motion';

export function QuoteDisplay({ quote, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`
          max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border backdrop-blur-sm
          ${theme.card}
          ${theme.fontFamily || ''}
        `}
      >
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-light leading-relaxed text-center mb-8
            ${theme.text}
          `}
        >
          "{quote.text}"
        </motion.blockquote>
        
        <motion.cite
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`
            block text-lg md:text-xl text-center font-medium
            ${theme.accent}
          `}
        >
          — {quote.author}
        </motion.cite>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className={`
            inline-flex items-center px-4 py-2 rounded-full text-sm font-mono
            ${theme.card} border
          `}>
            <span className={`w-2 h-2 rounded-full mr-2 ${theme.accent.includes('green') ? 'bg-green-500' : theme.accent.includes('blue') ? 'bg-blue-500' : theme.accent.includes('purple') ? 'bg-purple-500' : theme.accent.includes('pink') ? 'bg-pink-500' : theme.accent.includes('cyan') ? 'bg-cyan-500' : theme.accent.includes('yellow') ? 'bg-yellow-500' : 'bg-indigo-500'}`}></span>
            <span className={theme.text}>console.log('inspiration')</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
