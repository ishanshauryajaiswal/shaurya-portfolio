import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Hero section sits at the top of the page and introduces the developer. A
 * background image provides visual interest while headings and subheadings
 * describe who you are and what you do. The call‑to‑action encourages
 * visitors to learn more or get in touch.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative py-20 text-center bg-white dark:bg-[#0b1020]">
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute left-1/3 top-10 w-72 h-72 bg-neon-600/20 blur-3xl rounded-full" />
        <div className="absolute right-1/4 bottom-10 w-72 h-72 bg-primary-600/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-left"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Hello, I'm <span className="text-primary-700 dark:text-neon-500">Shaurya Jaiswal</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Senior Android Developer & Mobile Architect
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-block border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-neon-500 text-gray-800 dark:text-white py-3 px-6 rounded-lg text-sm font-medium transition-colors duration-200 bg-white/60 dark:bg-white/5 backdrop-blur"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-primary-500/40 dark:ring-neon-600/40 bg-white/70 dark:bg-white/5 backdrop-blur">
              <Image
                src="/images/me.png"
                alt="Profile photo of Shaurya Jaiswal"
                width={512}
                height={512}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}