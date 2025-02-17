import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import logo from './assets/Bcommune_logo.png';
import Profile1 from './photos/preetham.jpg'
import Profile2 from './photos/Mohan.jpeg'
import Profile3 from './photos/vc.jpeg'
import Profile4 from './photos/HARI.jpg'
import video from './assets/b-vid.mp4';

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  photo: string; // path or URL to their photo
}

function App() {
  // Form states
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Team member popup state
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Example team data: replace with your real info
  const teamMembers: TeamMember[] = [
    {
      name: 'Venkat Charan',
      role: 'Founder',
      phone: '+91 9030393909',
      email: 'venkat.charan@bcommune.com',
      website: 'www.example.com',
      address: 'Hayathnagar, Hyderabad',
      photo: '/project/src/photos/vc.jpeg',
      photo: Profile3,
    },
    {
      name: 'Haridhar Reddy',
      role: 'Project Manager',
      phone: '+91 85005 74929',
      email: 'haridharreddy@gmail.com',
      website: 'www.example.com',
      address: 'Champapet, Hyderabad',
      photo: '/project/src/photos/HARI.jpg',
      photo: Profile4,
    },
    {
      name: 'Mohan Varma',
      role: 'Developer',
      phone: '+91 93472 01829',
      email: 'mohanvarmaa22@gmail.com',
      website: 'www.example.com',
      address: 'Vanasthalipuram, Hyderabad',
      photo: '/project/src/photos/Mohan.jpeg',
      photo: Profile2,
    },
    {
      name: 'Preetham Sagar',
      role: 'Designer',
      phone: '+91 9502095440',
      email: 'sandapreetham@gmail.com',
      website: 'www.example.com',
      address: 'Vanasthalipuram, Hyderabad',
      photo: '/project/src/photos/preetham.jpg', // placeholder
      photo: Profile1,
    },
  ];

  // Handle the Interest Form submission
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
          <source src={video} type="video/mp4" />
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

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Logo" className="w-45 h-auto object-contain" />
        </motion.div>

        <div className="flex gap-3 md:gap-4">
          <a
            href="https://www.instagram.com/bcommune.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Instagram />
          </a>

          <a
            href="https://www.linkedin.com/company/b-commune/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin />
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
            A platform revolutionizing how businesses, individuals & ideas connect to shape the
            future of work and business.
          </motion.p>

          <motion.div className="space-y-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transition-all transform hover:scale-105"
            >
              Show Interest
            </button>
            <p className="text-xs md:text-sm text-slate-400">
              Signup for early access & invites
            </p>
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
              Bcommune is a groundbreaking platform designed to bridge the gap between businesses,
              individuals, and innovation. Whether you're an entrepreneur seeking co-founders, a
              company hiring top talent, or a professional looking to collaborate, Bcommune empowers
              you to connect, grow, and build a better future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-8">
            Meet Our Team
          </h2>
          {/* Grid of 4 team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2"
              >
                {/* Rounded photo (80% radius) */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-[80%] cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                />
                <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                <p className="text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 relative z-10">
        <motion.div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Contact Us
          </h2>
          <p className="text-base md:text-xl text-slate-300">
            Have any questions or want to get in touch? Reach out to us:
          </p>
          <div className="space-y-4 text-sm md:text-lg">
            <p>
              Email:{' '}
              <a
                href="mailto:thebcommunityforu@gmail.com"
                className="text-blue-400 hover:underline"
              >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-1"
                  >
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

      {/* Team Member Info Card Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            key="team-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-slate-800 p-6 md:p-8 rounded-2xl w-full max-w-md relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-32 h-32 object-cover rounded-[80%] mb-4"
                />
                {/* Name & Role */}
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-slate-400 mb-4">{selectedMember.role}</p>
                {/* Card Details */}
                <div className="text-sm md:text-base space-y-2 bg-slate-700 p-4 rounded-xl w-full">
                  <p>
                    <strong>Phone:</strong> {selectedMember.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedMember.email}
                  </p>
                  <p>
                    <strong>Website:</strong> {selectedMember.website}
                  </p>
                  <p>
                    <strong>Address:</strong> {selectedMember.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
