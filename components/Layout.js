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
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1527-.5676.416.416 0 00-.5676.1527L17.4178 8.595c-.6962-.3028-1.4913-.4693-2.3328-.4693-2.7514 0-4.9647 2.2147-4.9647 4.9647 0 .8635.2214 1.6709.6097 2.3789l-2.4665 4.2738a.416.416 0 00.1527.5676.416.416 0 00.5676-.1527l2.4665-4.2738c.6962.3028 1.4913.4693 2.3328.4693 2.7514 0 4.9647-2.2147 4.9647-4.9647 0-.8635-.2214-1.6709-.6097-2.3789z"/>
            </svg>
            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.314 0H2.119C.95 0 0 .95 0 2.119v12.237c0 1.169.95 2.119 2.119 2.119h12.195c1.169 0 2.119-.95 2.119-2.119V2.119C16.433.95 15.483 0 14.314 0zM9.392 13.828c-2.62 0-4.747-2.127-4.747-4.747s2.127-4.747 4.747-4.747 4.747 2.127 4.747 4.747-2.127 4.747-4.747 4.747z"/>
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