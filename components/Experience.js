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
      period: 'Apr 2023 – Present',
      details: [
        'Architected and developed a custom in-house chatbot using MQTT protocol for real-time chat capabilities with customer support, improving customer engagement and reducing response times. Built AudioBot on top of this architecture with real time streaming and transcription.',
        'Refactored the app’s network layer to enhance API performance and enable granular observability of API calls. These optimizations reduced overall latency by 19% and increased API success rates from 92.5% to 97.3%.',
        'Leading android platform team to build central frameworks that optimize performance, improve scalability, and boost developer productivity. Additionally, enhanced the CI/CD pipeline for faster deployments and streamlined releases.',
        'Automated release and on-call operations by building a Slack release bot and integrating releases with observability/alerting pipelines to automate runbooks and escalations, cutting MTTR for the mobile app team by 50% and removing manual release toil.',
        'Developed a comprehensive BFF framework for Android and iOS, enabling backend-driven, configurable UI. Adopted across 30+ new screens, reducing development time for basic screens from days to just hours.',
      ],
    },
    {
      id: 2,
      role: 'Senior Android Developer / Team Lead',
      company: 'PhonePe',
      period: 'Feb 2020 – Jan 2023',
      details: [
        'Led feature development in multiple pods at PhonePe, collaborating closely with product, backend, and design teams to ship customer-centric features, enabling new business use cases.',
        'Worked in the core pod. Implemented multiple frameworks used across the PhonePe ecosystem. Designed and built scalable robust frameworks from scratch like Hurdles, Consent and Yatra framework which were externalized as libraries and integrated with other sister apps.',
        'Designed and implemented multiple frameworks from scratch. Built the permission framework for the Phonepe app which manages all android runtime permissions at a central place. Externalized this framework to enable integration with Phonepe’s sister apps.',
        'Worked on modularising our app code base and enabling multi-module integration in our app. Created a base framework module that reduced code redundancy by 13% and helped shrink the APK size by 5%.',
        'Spearheaded CI/CD and code-quality initiatives by integrating static analysis (Detekt) and test-coverage tooling (JaCoCo), and implementing GitHub Actions workflows to enforce PR gates, auto-generate builds and coverage reports — improving code quality and reducing manual review overhead.',
      ],
    },
    {
      id: 3,
      role: 'Senior Android Developer',
      company: 'Paytm',
      period: 'Sep 2018 – Feb 2020',
      details: [
        'Worked in the Movies and Events module of the Paytm app. Implement new features and flows in our module. Designed and implemented the Movie-Pass feature from scratch.',
        'Led the development of the Merchant-Listing module in the Paytm app. Worked with backend, product, and design teams to make this module from scratch and bring it live on production.',
        'Worked on modularization of the movies and merchant listing module in the Paytm app, enabling dynamic delivery of both modules to enable on-demand module installation on consumer’s device. Modularizing the code to reduce app size and build time.',
      ],
    },
    {
      id: 4,
      role: 'Android Developer',
      company: 'Newgen Software',
      period: 'Jan 2017 – Sep 2018',
      details: [
        'Worked together with multiple teams to build native mobile applications which provide solutions to their business problems.',
      ],
    },
  ];
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-[#0b1020] px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600 dark:text-gray-300"
        >
          A snapshot of my roles across different companies and the impact I've made.
        </motion.p>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/5 backdrop-blur border border-gray-100 dark:border-white/10 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-neon-500">{exp.role}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">{exp.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-1">
                {exp.details.map((line) => (
                  <li key={line} className="text-sm text-gray-700 dark:text-gray-300">
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