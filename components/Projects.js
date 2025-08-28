import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

export default function Projects() {
  const [tab, setTab] = useState('All');
  const projects = [
    {
      name: 'PhonePe Android',
      url: 'https://phonepe.com',
      description:
        'Helped architect and develop key modules within the PhonePe app, focusing on merchant listing, modularisation and performance optimisations.',
      tags: ['Fintech'],
    },
    {
      name: 'Paytm Android',
      url: 'https://paytm.com',
      description:
        'Contributed to the Movies & Events module, leading modularisation efforts and enhancing scalability for millions of users.',
      tags: ['Fintech', 'Commerce'],
    },
    {
      name: 'Slice Android',
      url: 'https://sliceit.com',
      description:
        'Led platform initiatives and frameworks powering the Slice app, enabling seamless mobile payments and enhanced customer experience.',
      tags: ['Fintech'],
    },
  ];

  const filtered = useMemo(() => {
    if (tab === 'All') return projects;
    return projects.filter((p) => p.tags.includes(tab));
  }, [tab]);

  return (
    <section id="projects" className="py-16 bg-white px-4 dark:bg-[#0b1020]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          Featured Apps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600 dark:text-gray-300"
        >
          A selection of consumer‑facing applications I’ve helped build and
          scale to millions of users.
        </motion.p>
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', 'Fintech', 'Commerce'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm ${tab === t ? 'bg-primary-600 text-white' : 'bg-pastel-purple text-gray-800 dark:bg-white/10 dark:text-gray-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-white/10 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-neon-500">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-primary-600 dark:text-neon-500 hover:underline text-sm font-medium"
              >
                Visit Site &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}