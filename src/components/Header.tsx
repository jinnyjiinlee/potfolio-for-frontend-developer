'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: '홈', icon: '🏠' },
    { href: '#about', label: '소개', icon: '👋' },
    { href: '#skills', label: '스킬', icon: '💻' },
    { href: '#projects', label: '프로젝트', icon: '🚀' },
    { href: '#contact', label: '연락처', icon: '📞' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className={`backdrop-blur-xl border-b transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-700/50 shadow-lg'
            : 'bg-white/60 dark:bg-slate-900/60 border-transparent'
        }`}
        animate={{
          backgroundColor: scrollY > 50 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(255, 255, 255, 0.6)'
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.h1 
                className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                whileHover={{
                  backgroundImage: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    'linear-gradient(45deg, #ec4899, #3b82f6)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Portfolio
              </motion.h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex space-x-1">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <motion.a
                      href={item.href}
                      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active indicator */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
                          layoutId="activeTab"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                      
                      <span className="relative flex items-center space-x-2">
                        <span className="hidden lg:inline">{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 4 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 my-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -4 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl mx-4 mb-4 border border-slate-200/50 dark:border-slate-700/50">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeSection === item.href.slice(1)
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;