import { motion } from 'framer-motion';

/**
 * About section provides a brief overview of the developer's journey,
 * philosophy and values. It synthesizes the information found on the
 * original portfolio site while remaining concise. Animations bring the
 * content gently into view when scrolled into viewport.
 */
export default function About() {
  return (
    <section id="about" className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          With over eight years in the Android ecosystem, I’ve enjoyed a
          challenging yet rewarding journey of growth, problem‑solving and
          creativity. From wrestling with Java in the early days to embracing
          Kotlin and Jetpack Compose, I’ve continuously evolved alongside the
          rapidly changing landscape of mobile development. Each project—be it
          a small utility app or a large‑scale application serving hundreds of
          millions of users—has honed my skills in performance optimisation,
          multi‑threading and the adoption of modern tools. Collaboration with
          designers, product managers and backend engineers has been at the
          heart of my work, ensuring that every app isn’t just functional but
          delightful to use.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 leading-relaxed"
        >
          As I’ve progressed into senior roles, I’ve led projects from the
          ground up, working closely with cross‑functional teams to deliver
          features that truly matter. My focus has expanded beyond
          implementation to measuring impact through performance metrics and
          A/B testing. Today, with apps I’ve built serving more than half a
          billion users, I’m excited to bring my expertise to new
          collaborations, crafting thoughtful solutions and pushing the
          boundaries of what’s possible.
        </motion.p>
      </div>
    </section>
  );
}