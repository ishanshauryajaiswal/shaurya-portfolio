import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Layout component wraps the entire application and provides a consistent
 * header and footer. It also defines the site navigation that links to
 * individual sections on the page via anchor links. The navigation is
 * responsive: on smaller screens it collapses into a hamburger menu.
 */
export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setIsDark((v) => !v);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-[#0b1020] dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#0b1020]/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1M3 18h18M3 18l2.5-2.5M21 18l-2.5-2.5M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 6h18M3 6l2.5 2.5M21 6l-2.5 2.5M9 9h.01M15 9h.01M9 13h6M9 17h6"/>
            </svg>
            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-neon-500">About</a>
            <a href="#skills" className="hover:text-primary-600 dark:hover:text-neon-500">Skills</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-neon-500">Projects</a>
            <a href="#experience" className="hover:text-primary-600 dark:hover:text-neon-500">Experience</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-neon-500">Contact</a>
          </nav>
          <button
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {/* Simple hamburger icon */}
            <span className="block w-6 h-0.5 bg-primary-700 dark:bg-neon-500 mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary-700 dark:bg-neon-500 mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary-700 dark:bg-neon-500"></span>
          </button>
        </div>
        {/* Mobile navigation menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0b1020] shadow-lg"
          >
            <div className="px-6 py-4 space-y-2">
              <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" className="block" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#projects" className="block" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#experience" className="block" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-white/5 text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Shaurya Jaiswal. All rights reserved.
      </footer>
    </div>
  );
}