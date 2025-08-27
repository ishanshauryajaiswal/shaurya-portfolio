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
    <section
      id="hero"
      className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image using Next.js Image for optimization */}
      <Image
        src="/images/hero-bg.png"
        alt="Abstract background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
      {/* Overlay to darken the image for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hello, I'm <span className="text-primary-300">Shaurya Jaiswal</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Senior Android Developer & Mobile Architect
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg text-sm font-medium transition-colors duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}