export const themes = {
  light: {
    id: 'light',
    name: 'Light Theme',
    isPremium: false,
    background: 'bg-gradient-to-br from-slate-50 to-slate-100',
    text: 'text-gray-800',
    accent: 'text-blue-600',
    card: 'bg-white/70 backdrop-blur-sm border-gray-200',
    sidebar: 'bg-white/95 backdrop-blur-md',
    button: 'bg-blue-600 hover:bg-blue-700 text-white'
  },
  dark: {
    id: 'dark',
    name: 'Dark Theme',
    isPremium: false,
    background: 'bg-gradient-to-br from-gray-900 to-gray-800',
    text: 'text-gray-100',
    accent: 'text-blue-400',
    card: 'bg-gray-800/70 backdrop-blur-sm border-gray-700',
    sidebar: 'bg-gray-900/95 backdrop-blur-md',
    button: 'bg-blue-600 hover:bg-blue-700 text-white'
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist Grid',
    isPremium: true,
    background: 'bg-white',
    backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2px, transparent 0), radial-gradient(circle at 75px 75px, lightgray 2px, transparent 0)',
    backgroundSize: '100px 100px',
    text: 'text-gray-900',
    accent: 'text-indigo-600',
    card: 'bg-white/90 backdrop-blur-sm border-gray-300 shadow-2xl',
    sidebar: 'bg-white/95 backdrop-blur-md',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white'
  },
  neon: {
    id: 'neon',
    name: 'Neon Matrix',
    isPremium: true,
    background: 'bg-gradient-to-br from-black via-gray-900 to-green-900',
    text: 'text-green-400',
    accent: 'text-cyan-400',
    card: 'bg-black/80 backdrop-blur-sm border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]',
    sidebar: 'bg-black/95 backdrop-blur-md border-green-500/30',
    button: 'bg-green-600 hover:bg-green-700 text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)]'
  },
  space: {
    id: 'space',
    name: 'Space Coder',
    isPremium: true,
    background: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    text: 'text-purple-100',
    accent: 'text-pink-400',
    card: 'bg-indigo-900/70 backdrop-blur-sm border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.3)]',
    sidebar: 'bg-indigo-900/95 backdrop-blur-md border-purple-500/30',
    button: 'bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)]'
  },
  retro: {
    id: 'retro',
    name: 'Retro Terminal',
    isPremium: true,
    background: 'bg-black',
    text: 'text-green-500',
    accent: 'text-yellow-400',
    card: 'bg-gray-900/90 backdrop-blur-sm border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]',
    sidebar: 'bg-black/95 backdrop-blur-md border-green-500/30',
    button: 'bg-green-600 hover:bg-green-700 text-black font-mono font-bold',
    fontFamily: 'font-mono'
  },
  futuristic: {
    id: 'futuristic',
    name: 'Futuristic Dashboard',
    isPremium: true,
    background: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    text: 'text-blue-100',
    accent: 'text-cyan-400',
    card: 'bg-slate-800/80 backdrop-blur-sm border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    sidebar: 'bg-slate-900/95 backdrop-blur-md border-cyan-500/30',
    button: 'bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
  }
};
