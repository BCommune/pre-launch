import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, CircuitBoard, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import logo from './assets/logo.png'; 

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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header */}
      <header className="fixed w-full px-8 py-6 flex justify-between items-center z-50 bg-slate-900/80 backdrop-blur-md">
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        
        <motion.div 
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  className="flex items-center gap-2"
>
  {/* <CircuitBoard className="w-8 h-8 text-blue-400" /> */}
  <span 
    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
    style={{ fontFamily: "'Warnes', cursive" }}
  >
    Bcommune
  </span>
</motion.div>


        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/b-commune/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/bcommune.online?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <Instagram />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-7xl font-bold space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"
            >
              Connect. Collaborate. Build.
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-400"
            >
              Tomorrow-Together
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            A platform revolutionizing how businesses, individuals & ideas connect to shape the future of work and business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Show Interest
            </button>
            <p className="text-sm text-slate-400">Signup for early access & invites</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Coming Soon Section with Scroll Reveal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.4
        }}
        className="relative z-10 py-20 text-center"
      >
        <motion.div
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          animate={{ 
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          COMING SOON!!!
        </motion.div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              What is Bcommune?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Bcommune is a groundbreaking platform designed to bridge the gap between businesses, individuals, and innovation. Whether you're an entrepreneur seeking co-founders, a company hiring top talent, an investor exploring opportunities, or a professional looking to collaborate, Bcommune empowers you to connect, grow, and build a better future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Our Mission
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To create a unified platform that bridges the gap between businesses, individuals, and innovation, empowering them to achieve their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Contact Us
          </h2>
          <p className="text-xl text-slate-300">
            Have any questions or want to get in touch? Reach out to us via the following ways:
          </p>
          <div className="space-y-4 text-lg">
            <p>Email: <a href="mailto:thebcommunityforu@gmail.com" className="text-blue-400 hover:underline">thebcommunityforu@gmail.com</a></p>
            <p>Phone: <a href="tel:+919030393909" className="text-blue-400 hover:underline">+91-9030393909</a></p>
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 p-8 rounded-2xl w-full max-w-md relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
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
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 
                   formStatus === 'success' ? 'Sent Successfully!' : 
                   formStatus === 'error' ? 'Error Sending' : 
                   'Submit'}
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