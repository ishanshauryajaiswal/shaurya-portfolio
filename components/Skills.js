import { motion } from 'framer-motion';

/**
 * The Skills component displays a grid of technologies and tools that the
 * developer is proficient in. Each item fades into view as the user scrolls.
 */
export default function Skills() {
  const skills = [
    'Kotlin',
    'Android',
    'Jetpack Compose',
    'Retrofit',
    'OkHttp',
    'Gradle',
    'Java',
    'Git',
    'Design Patterns',
    'MVVM/MVI',
    'Room',
    'Mockito',
    'High‑Level Design (HLD)',
    'Android Architecture Components',
    'Glide',
    'Data Binding',
    'Modularisation',
    'JUnit'
  ];
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-[#0b1020] px-4">
      <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-gray-600 dark:text-gray-300"
          >
            A snapshot of the technologies, frameworks and methodologies I rely on
            to build scalable, performant mobile applications.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded shadow-sm hover:shadow-md transition-shadow text-center bg-white dark:bg-white/5 backdrop-blur border border-gray-100 dark:border-white/10"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}