import { useState } from 'react';
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#hero" className="text-2xl font-bold text-primary-700">Shaurya J.</a>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#about" className="hover:text-primary-600">About</a>
            <a href="#skills" className="hover:text-primary-600">Skills</a>
            <a href="#projects" className="hover:text-primary-600">Projects</a>
            <a href="#experience" className="hover:text-primary-600">Experience</a>
            <a href="#contact" className="hover:text-primary-600">Contact</a>
          </nav>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {/* Simple hamburger icon */}
            <span className="block w-6 h-0.5 bg-primary-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary-700"></span>
          </button>
        </div>
        {/* Mobile navigation menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
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
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Shaurya Jaiswal. All rights reserved.
      </footer>
    </div>
  );
}