import { motion } from 'framer-motion';

/**
 * The Skills component displays a grid of technologies and tools that the
 * developer is proficient in. Each item fades into view as the user scrolls.
 */
export default function Skills() {
  /*
skills
------------------------
-Java
-Kotlin
-git
-flutter
-Dagger
-cursor
-Room
-MVVM
-MVI
-TDD
-JUnit
-Mockito
-JetpackCompose
-KMM
-Firebase CF
-Gradle
-Android
-Agentic Ai
-RAG
-Vector Databse
-App Modularization
-NDK
-c++
-Kotlin DSL
-python

  */
 const skills = [
  'Java',
  'Kotlin',
  'git',
  'flutter',
  'DI - Dagger',
  'Cursor',
  'Room',
  'MVVM',
  'MVI',
  'TDD',
  'JUnit',
  'Mockito',
  'JetpackCompose',
  'KMM',
  'Firebase CF',
  'Gradle',
  'Android',
  'Agentic Ai',
  'RAG',
  'Vector Databse',
  'App Modularization',
  'NDK',
  'Kotlin DSL',
  'Python',
 ]
  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-[#0b1020] px-4">
      <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-3"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="mb-6 text-gray-600 dark:text-gray-300"
          >
            A compact snapshot of the tools and technologies I use most often.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur hover:border-primary-300 dark:hover:border-neon-600/50 hover:shadow-sm transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
      </div>
    </section>
  );
}