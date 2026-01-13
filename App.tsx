
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Application from './pages/Application';
import Store from './pages/Store';
import Team from './pages/Team';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: 'fa-house' },
    { path: '/rules', label: 'Rules', icon: 'fa-book' },
    { path: '/application', label: 'Whitelist', icon: 'fa-id-card' },
    { path: '/store', label: 'Store', icon: 'fa-cart-shopping' },
    { path: '/team', label: 'Staff Team', icon: 'fa-users' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="fa-solid fa-crosshairs text-white text-xl"></i>
            </div>
            <span className="font-rajdhani text-2xl font-bold tracking-wider uppercase text-white">
              Nexus<span className="text-indigo-500">RP</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-indigo-500 bg-indigo-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2`}
                >
                  <i className={`fa-solid ${link.icon}`}></i>
                  {link.label}
                </Link>
              ))}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                <i className="fa-brands fa-discord"></i>
                Discord
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-white/5 pb-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-3 rounded-md text-base font-medium"
            >
              <i className={`fa-solid ${link.icon} mr-3`}></i>
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-md text-base font-semibold">
            Join Discord
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <i className="fa-solid fa-crosshairs text-indigo-500 text-2xl"></i>
          <span className="font-rajdhani text-2xl font-bold text-white tracking-widest uppercase">NexusRP</span>
        </div>
        <p className="text-gray-400 max-w-sm">
          The ultimate FiveM roleplay experience. Immerse yourself in a world of endless possibilities, deep storytelling, and high-performance gameplay.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/rules" className="hover:text-indigo-400 transition-colors">Server Rules</Link></li>
          <li><Link to="/application" className="hover:text-indigo-400 transition-colors">Join the Whitelist</Link></li>
          <li><Link to="/store" className="hover:text-indigo-400 transition-colors">Support Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all">
            <i className="fa-brands fa-discord text-xl"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
            <i className="fa-brands fa-youtube text-xl"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Nexus Roleplay. Not affiliated with Rockstar Games or Take-Two Interactive.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/application" element={<Application />} />
            <Route path="/store" element={<Store />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
