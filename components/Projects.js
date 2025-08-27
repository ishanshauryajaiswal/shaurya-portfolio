import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: 'SDE-3 - Slice',
      url: 'https://sliceit.com',
      description:
        '04/2023 - Present, Bangalore. India\'s first truly digital bank. Architected and developed a custom in-house chatbot using MQTT protocol for real-time chat capabilities with customer support, improving customer engagement and reducing response times. Built AudioBot on top of this architecture with real time streaming and transcription. Refactored the app\'s network layer to enhance API performance and enable granular observability of API calls. These optimizations reduced overall latency by 19% and increased API success rates from 92.5% to 97.3%. Leading android platform team to build central frameworks that optimize performance, improve scalability, and boost developer productivity. Additionally, enhanced the CI/CD pipeline for faster deployments and streamlined releases. Automated release and on-call operations by building a Slack release bot and integrating releases with observability/alerting pipelines to automate runbooks and escalations, cutting MTTR for the mobile app team by 50% and removing manual release toil. Developed a comprehensive BFF framework for Android and iOS, enabling backend-driven, configurable UI. Adopted across 30+ new screens, reducing development time for basic screens from days to just hours.',
    },
    {
      name: 'Senior Android Developer - PhonePe',
      url: 'https://phonepe.com',
      description:
        '02/2020 - 01/2023, Bangalore, India. India\'s leading payments and wealth management company. Led feature development in multiple pods at PhonePe, collaborating closely with product, backend, and design teams to ship customer-centric features, enabling new business use cases. Worked in the core pod. Implemented multiple frameworks used across the PhonePe ecosystem. Designed and built scalable robust frameworks from scratch like Hurdles, Consent and Yatra framework which were externalized as libraries and integrated with other sister apps. Designed and implemented multiple frameworks from scratch. Built the permission framework for the Phonepe app which manages all android runtime permissions at a central place. Externalized this framework to enable integration with Phonepe\'s sister apps. Worked on modularising our app code base and enabling multi-module integration in our app. Created a base framework module that reduced code redundancy by 13% and helped shrink the APK size by 5%. Spearheaded CI/CD and code-quality initiatives by integrating static analysis (Detekt) and test-coverage tooling (JaCoCo), and implementing GitHub Actions workflows to enforce PR gates, auto-generate builds and coverage reports — improving code quality and reducing manual review overhead.',
    },
    {
      name: 'Android Developer - Paytm',
      url: 'https://paytm.com',
      description:
        '09/2018 - 02/2020, Delhi, India. India\'s leading payments and wealth management company. Worked in the Movies and Events module of the Paytm app. Implement new features and flows in our module. Designed and implemented the Movie-Pass feature from scratch. Led the development of the Merchant-Listing module in the Paytm app. Worked with backend, product, and design teams to make this module from scratch and bring it live on production. Worked on modularization of the movies and merchant listing module in the Paytm app, enabling dynamic delivery of both modules to enable on-demand module installation on consumer\'s device. Modularizing the code to reduce app size and build time.',
    },
    {
      name: 'Android Developer - Newgen Software',
      url: 'https://newgensoft.com',
      description:
        '01/2017 - 09/2018, Delhi, India. Worked together with multiple teams to build native mobile applications which provide solutions to their business problems.',
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
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600 dark:text-gray-300"
        >
          Professional journey building and scaling Android applications across fintech and enterprise domains.
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