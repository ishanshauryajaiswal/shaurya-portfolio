import { motion } from 'framer-motion';

/**
 * A list of flagship applications the developer has worked on. Each project
 * includes a name, brief description and a link to the corresponding
 * product page. Cards animate into view as the user scrolls.
 */
export default function Projects() {
  const projects = [
    {
      name: 'PhonePe Android',
      url: 'https://phonepe.com',
      description: 'Helped architect and develop key modules within the PhonePe app, focusing on merchant listing, modularisation and performance optimisations.',
    },
    {
      name: 'Paytm Android',
      url: 'https://paytm.com',
      description: 'Contributed to the Movies & Events module, leading modularisation efforts and enhancing scalability for millions of users.',
    },
    {
      name: 'Slice Android',
      url: 'https://sliceit.com',
      description: 'Led platform initiatives and frameworks powering the Slice app, enabling seamless mobile payments and enhanced customer experience.',
    },
  ];
  return (
    <section id="projects" className="py-16 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
        >
          Featured Apps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600"
        >
          A selection of consumer‑facing applications I’ve helped build and
          scale to millions of users.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-primary-600 hover:underline text-sm font-medium"
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