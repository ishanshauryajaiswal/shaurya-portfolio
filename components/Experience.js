import { motion } from 'framer-motion';

/**
 * The Experience component renders a chronological list of professional
 * positions. Each entry summarises responsibilities and achievements.
 */
export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'SDE‑3 / Platform Lead',
      company: 'Slice',
      period: 'Apr 2023 – Present',
      details: [
        'Architected and developed in‑house frameworks to optimise performance and scalability.',
        'Enhanced CI/CD pipelines, significantly reducing build times and improving release reliability.',
        'Mentored junior engineers and enforced best practices across the Android platform team.',
      ],
    },
    {
      id: 2,
      role: 'Senior Android Developer / Team Lead',
      company: 'PhonePe',
      period: 'Feb 2020 – Jan 2023',
      details: [
        'Led development of the Merchant Listing module and collaborated closely with backend and design.',
        'Drove modularisation of the Movies and Events features, resulting in faster build times.',
        'Implemented architectural improvements and performance optimisations for a smoother user experience.',
      ],
    },
    {
      id: 3,
      role: 'Senior Android Developer',
      company: 'Paytm',
      period: 'Sep 2018 – Feb 2020',
      details: [
        'Designed and implemented scalable solutions focusing on performance and user experience.',
        'Improved platform responsiveness through architectural enhancements.',
        'Ensured seamless integration with backend services and adhered to agile processes.',
      ],
    },
    {
      id: 4,
      role: 'Android Developer',
      company: 'Newgen Software',
      period: 'Jan 2017 – Sep 2018',
      details: [
        'Built and maintained feature‑rich native Android applications addressing key business needs.',
        'Collaborated with cross‑functional teams to deliver intuitive mobile experiences.',
      ],
    },
  ];
  return (
    <section id="experience" className="py-16 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600"
        >
          A snapshot of my roles across different companies and the impact I’ve made.
        </motion.p>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">{exp.role}</h3>
                  <p className="text-sm text-gray-700">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-1">
                {exp.details.map((line) => (
                  <li key={line} className="text-sm text-gray-700">
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}