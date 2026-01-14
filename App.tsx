
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Staff from './pages/Staff';
import Store from './pages/Store';
import TOS from './pages/TOS';
import Apply from './pages/Apply';
import QueuePriority from './pages/QueuePriority';
import SupportBot from './components/SupportBot';
import { Menu, X, FiveM, Logo, Discord, Twitter, Instagram, Facebook, Youtube, Tiktok } from './components/Icons';

// Currency Context
export type Currency = 'USD' | 'BDT' | 'USDT' | 'INR' | 'EURO';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdAmount: string) => string;
}

const rates: Record<Currency, { rate: number, symbol: string }> = {
  USD: { rate: 1, symbol: '$' },
  BDT: { rate: 120, symbol: '৳' },
  USDT: { rate: 1, symbol: '₮' },
  INR: { rate: 83.5, symbol: '₹' },
  EURO: { rate: 0.92, symbol: '€' }
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useState<{ name: string; avatar?: string } | null>(null);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setUser({ 
        name: 'Citizen_Sync', 
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100' 
      });
    }, 2000);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Queue Priority', path: '/queue-priority' },
    { name: 'Tokens', path: '/store?cat=tokens' },
    { name: 'Application', path: '/apply' },
    { name: 'Staff', path: '/staff' },
    { name: 'Gifts', path: '/store?cat=gifts' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#9b0000]/50 transition-all duration-300">
                <Logo size={32} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">
                  ZeroSync
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#9b0000] uppercase italic leading-none mt-1.5 opacity-80">
                  REMASTERED
                </span>
              </div>
            </Link>
          </div>
          
          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-black transition-all tracking-tight uppercase whitespace-nowrap hover:scale-105 ${
                  location.pathname + location.search === link.path
                    ? 'text-white border-b-2 border-[#9b0000] pb-1'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Currency Selector */}
            <div className="relative">
              <div 
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center gap-2 cursor-pointer group px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                <span className="text-[11px] font-black text-gray-500 group-hover:text-white uppercase tracking-widest">{currency}</span>
                <svg className={`w-3 h-3 text-gray-600 group-hover:text-white transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {isCurrencyOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  {(Object.keys(rates) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setIsCurrencyOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors ${currency === c ? 'text-[#9b0000]' : 'text-gray-400'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center gap-4 bg-white/5 pl-2 pr-5 py-2 rounded-xl border border-white/10 group cursor-default">
                <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#9b0000] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-white uppercase leading-none tracking-tight">{user.name}</span>
                  <button onClick={handleLogout} className="text-[9px] text-gray-500 hover:text-[#9b0000] text-left uppercase font-black transition-colors mt-1">Disconnect</button>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="bg-white hover:bg-neutral-200 text-black px-8 py-3 rounded-full font-black text-[13px] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-tight shadow-xl disabled:opacity-50 disabled:cursor-wait shrink-0"
              >
                {isLoggingIn ? (
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <FiveM size={18} className="text-black" />
                )}
                {isLoggingIn ? 'Verifying...' : 'Login with FiveM'}
              </button>
            )}

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-2 hover:bg-white/5 rounded-lg"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-8 border-t border-white/5 pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-lg font-black text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 sm:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-4 mb-8">
            <Logo size={54} />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">
                ZeroSync
              </span>
              <span className="text-xs font-bold tracking-[0.4em] text-[#9b0000] uppercase mt-1">REMASTERED</span>
            </div>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm font-medium">
            Setting the gold standard for serious GTA V roleplay. Our platform is built for storytellers, by storytellers, ensuring unparalleled stability and immersion.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px] italic">Community</h4>
          <ul className="space-y-5 text-sm text-gray-500 font-bold uppercase tracking-tight">
            <li>
              <a href="https://discord.com/invite/F5ZpJdyJYe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Discord size={18} /> Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/6zerosync3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Twitter size={18} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@6zerosync3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Tiktok size={18} /> TikTok
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@6zerosync3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Youtube size={18} /> Youtube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/6zerosync3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/6ZeroSync3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9b0000] transition-all hover:translate-x-1">
                <Facebook size={18} /> Facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px] italic">Resources</h4>
          <ul className="space-y-5 text-sm text-gray-500 font-bold uppercase tracking-tight">
            <li><Link to="/rules" className="hover:text-[#9b0000] transition-all hover:translate-x-1">Server Rules</Link></li>
            <li><Link to="/store" className="hover:text-[#9b0000] transition-all hover:translate-x-1">Web Store</Link></li>
            <li><Link to="/tos" className="hover:text-[#9b0000] transition-all hover:translate-x-1">Terms of Service</Link></li>
            <li><a href="https://discord.com/invite/F5ZpJdyJYe" target="_blank" rel="noopener noreferrer" className="hover:text-[#9b0000] transition-all hover:translate-x-1">Official Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-neutral-600 font-black uppercase tracking-[0.3em] flex flex-col items-center gap-4">
        <p>&copy; {new Date().getFullYear()} ZeroSync Remastered. Not affiliated with Rockstar Games or Take-Two Interactive.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (usdAmount: string) => {
    const amount = parseFloat(usdAmount);
    const { rate, symbol } = rates[currency];
    const converted = (amount * rate).toLocaleString(undefined, { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
    return `${symbol}${converted}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-[#050505]">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/store" element={<Store />} />
              <Route path="/tos" element={<TOS />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/queue-priority" element={<QueuePriority />} />
            </Routes>
          </main>
          <Footer />
          <SupportBot />
        </div>
      </HashRouter>
    </CurrencyContext.Provider>
  );
};

export default App;
