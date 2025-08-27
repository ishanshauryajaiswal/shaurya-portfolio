import { motion } from 'framer-motion';
import useContactForm from '../utils/useContactForm';

/**
 * Contact section provides a simple form for visitors to send a message.
 * The form uses a custom hook to manage state and submit data to a
 * serverless API route. Feedback is presented to the user after submission.
 */
export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm();
  return (
    <section id="contact" className="py-16 bg-white dark:bg-[#0b1020] px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-gray-600 dark:text-gray-300 text-center"
        >
          Have a project or opportunity you’d like to discuss? Fill out the form
          below and I’ll get back to you shortly.
        </motion.p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-neon-600 dark:hover:bg-neon-500"
          >
            Submit
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-green-600 dark:text-neon-500">{status}</p>
        )}
      </div>
    </section>
  );
}