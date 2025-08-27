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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0b1020] dark:to-[#0f172a] px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build Something
            <span className="block text-primary-600 dark:text-neon-500">Amazing Together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your mobile app vision to life? I'm here to help you create 
            exceptional Android and Flutter experiences that users love.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Have a project or opportunity you'd like to discuss? I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-neon-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600 dark:text-neon-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">shauryajaiswal@live.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-neon-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600 dark:text-neon-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary-500 dark:focus:border-neon-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-neon-500/20 transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary-500 dark:focus:border-neon-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-neon-500/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary-500 dark:focus:border-neon-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-neon-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 dark:from-neon-600 dark:to-neon-700 hover:from-primary-700 hover:to-primary-800 dark:hover:from-neon-700 dark:hover:to-neon-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-neon-500/50"
              >
                Send Message
              </button>
            </form>
          </div>

          {status && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
            >
              <p className="text-center text-sm text-green-700 dark:text-green-400 font-medium">{status}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}