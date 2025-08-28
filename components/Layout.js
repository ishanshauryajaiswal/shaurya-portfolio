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
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Left: Android and Flutter Icons */}
          <div className="flex items-center space-x-3">
            {/* Android Logo - Light/Dark Mode */}
            {isDark ? (
              <img src="/images/android_logo_dark.svg" alt="Android" className="w-8 h-8" />
            ) : (
              <img src="/images/android_logo_light.svg" alt="Android" className="w-8 h-8" />
            )}
            
            {/* Flutter Logo - Light/Dark Mode */}
            {isDark ? (
              <img src="/images/flutter_logo_dark.svg" alt="Flutter" className="w-8 h-8" />
            ) : (
              <img src="/images/flutter_logo_light.svg" alt="Flutter" className="w-8 h-8" />
            )}
          </div>

          {/* Right: Navigation and Theme Toggle */}
          <div className="flex items-center space-x-8">
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
          </div>
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