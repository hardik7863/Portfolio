import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, (error) => {
        console.log('FAILED...', error);
        setIsSubmitting(false);
      });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-dark-200/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">hardikbatwal@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ratlam, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 8305647687</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold font-display mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/hardik7863" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-300 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a 
                  href="www.linkedin.com/in/hardik-batwal-888427239" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-300 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-300 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-dark-200 rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold font-display mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-gray-700 dark:text-gray-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-gray-700 dark:text-gray-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input w-full px-4 py-3 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-gray-700 dark:text-gray-300"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;