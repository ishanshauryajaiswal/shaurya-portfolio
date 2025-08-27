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
          <a href="#hero" className="text-2xl font-bold text-primary-700 dark:text-neon-500">Shaurya J.</a>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-neon-500">About</a>
            <a href="#skills" className="hover:text-primary-600 dark:hover:text-neon-500">Skills</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-neon-500">Projects</a>
            <a href="#experience" className="hover:text-primary-600 dark:hover:text-neon-500">Experience</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-neon-500">Contact</a>
          </nav>
          <button
            className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm hover:bg-gray-50 dark:hover:bg-white/5"
            onClick={toggleTheme}
          >
            <span>{isDark ? 'Light' : 'Dark'}</span>
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