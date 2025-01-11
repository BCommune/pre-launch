import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import logo from './assets/Bcommune_logo.png';

function App() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('sending');
    try {
      await emailjs.sendForm(
        'service_jv2agbk',
        'template_ckarzp4',
        formRef.current,
        'zdqVgVUS2k5zjMRgj'
      );
      setFormStatus('success');
      setTimeout(() => {
        setShowForm(false);
        setFormStatus('idle');
      }, 2000);
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Header */}
      <header className="fixed w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center z-50 bg-slate-900/80 backdrop-blur-md">
        <nav className="flex gap-4 md:gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors text-sm md:text-base">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors text-sm md:text-base">
            Contact
          </a>
        </nav>

        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-45 h-auto object-contain" />
        </motion.div>

        <div className="flex gap-3 md:gap-4">
          <a
            href="https://www.linkedin.com/company/b-commune/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/bcommune.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Instagram />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 className="text-4xl md:text-7xl font-bold space-y-4">
            <motion.div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600">
              Connect. Collaborate. Build.
            </motion.div>
            <motion.div className="text-blue-400">Tomorrow-Together</motion.div>
          </motion.h1>
          <motion.p className="text-base md:text-xl text-slate-300 max-w-xl md:max-w-2xl mx-auto">
            A platform revolutionizing how businesses, individuals & ideas connect to shape the future of work and business.
          </motion.p>

          <motion.div className="space-y-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transition-all transform hover:scale-105"
            >
              Show Interest
            </button>
            <p className="text-xs md:text-sm text-slate-400">Signup for early access & invites</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <motion.div className="relative z-10 py-16 text-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          COMING SOON!!!
        </motion.div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              What is Bcommune?
            </h2>
            <p className="text-base md:text-xl text-slate-300 leading-relaxed">
              Bcommune is a groundbreaking platform designed to bridge the gap between businesses, individuals, and innovation. Whether you're an entrepreneur seeking co-founders, a company hiring top talent, or a professional looking to collaborate, Bcommune empowers you to connect, grow, and build a better future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 relative z-10">
        <motion.div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Contact Us
          </h2>
          <p className="text-base md:text-xl text-slate-300">Have any questions or want to get in touch? Reach out to us:</p>
          <div className="space-y-4 text-sm md:text-lg">
            <p>
              Email:{' '}
              <a href="mailto:thebcommunityforu@gmail.com" className="text-blue-400 hover:underline">
                thebcommunityforu@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+919030393909" className="text-blue-400 hover:underline">
                +91-9030393909
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Interest Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div className="bg-slate-800 p-6 md:p-8 rounded-2xl w-full max-w-md relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Show Interest
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending'
                    ? 'Sending...'
                    : formStatus === 'success'
                    ? 'Sent Successfully!'
                    : formStatus === 'error'
                    ? 'Error Sending'
                    : 'Submit'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;