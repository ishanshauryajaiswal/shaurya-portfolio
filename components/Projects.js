import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: 'Slice Android',
      url: 'https://sliceit.com',
      description:
        'Led the Android platform team at Slice, India\'s first digital bank. Architected a real-time chatbot using MQTT, enhanced API performance (reducing latency by 19% and raising success rates to 97.3%), automated releases with Slack bots, and built central frameworks improving scalability and developer productivity.',
    },
    {
      name: 'PhonePe Android',
      url: 'https://phonepe.com',
      description:
        'Contributed as Senior Android Developer at PhonePe, India\'s leading payments platform. Built core frameworks (Hurdles, Consent, Yatra, Permission Manager) used across the ecosystem and sister apps. Spearheaded modularisation, reducing redundancy by 13% and shrinking APK size by 5%, while leading CI/CD and code quality initiatives.',
    },
    {
      name: 'Paytm Android',
      url: 'https://paytm.com',
      description:
        'Worked on Movies & Events and Merchant-Listing modules in the Paytm app. Designed and launched the Movie-Pass feature from scratch, built the Merchant-Listing module end-to-end, and modularised features for on-demand delivery — reducing app size and improving build times.',
    },
    {
      name: 'Newgen Software',
      url: 'https://newgensoft.com',
      description:
        'Developed native enterprise mobile applications, collaborating across teams to deliver scalable business solutions for global clients.',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-[#0b1020] px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600 dark:text-gray-300"
        >
          Highlights from my 8+ years building and scaling Android apps used by
          millions of people.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg h-full flex flex-col justify-between bg-gray-50 dark:bg-white/5 backdrop-blur border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
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