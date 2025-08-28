import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-[#0b1020] px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          About Me
        </motion.h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            Hey, I'm Shaurya Jaiswal — Senior Android Developer & Mobile Architect.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            For over eight years I've been building apps that range from small utilities to large-scale products serving hundreds of millions of users. I started out wrestling with Java, graduated to Kotlin, and these days I'm all-in on Jetpack Compose and modern Android tooling. Along the way I've obsessed over performance optimization, multi-threading, and architecting systems that scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            Coming from the fintech world, I've also spent a big chunk of my career deep in app security and fraud prevention. Making apps secure without making them painful to use has been one of the most challenging — and rewarding — parts of the job.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            In senior roles I've led projects from scratch, worked closely with designers, PMs, and backend engineers, and pushed features that matter. For me, it's always been about more than just shipping — it's about measuring impact, running A/B tests, and learning from what users actually do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Lately…
            </h3>
            <p className="text-lg leading-relaxed">
              I've been having a lot of fun with AI. Honestly, I don't fully understand the magic inside LLMs (and maybe that's the point) — but I love using them. I think, they execute. These days I'm even re-architecting code so it's easier for AI to work with, and building tools that make life simpler for my team. The goal? So we can all chill a little more, stress a little less… and maybe sip some wine while the machines do the boring parts. 🍷
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            At the end of the day, I'm here to craft thoughtful, scalable solutions that make users happy and developers' lives easier. And if we can push the boundaries of what's possible while having some fun? Even better.
          </motion.p>
        </div>
      </div>
    </section>
  );
}