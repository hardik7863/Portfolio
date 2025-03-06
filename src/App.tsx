import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import Certificate from './components/Certificate';

// Example certificates data - replace with your actual certificates
const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "March 2024",
    credentialLink: "https://www.coursera.org/verify/specialization/ML",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Deep Learning Professional Certificate",
    issuer: "IBM",
    date: "February 2024",
    credentialLink: "https://www.coursera.org/verify/professional-cert/DL",
    image: "https://images.unsplash.com/photo-1677442136019-21c1f4b1ec0f?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "AI Engineering Certificate",
    issuer: "Microsoft",
    date: "January 2024",
    credentialLink: "https://learn.microsoft.com/verify/AI",
    image: "https://images.unsplash.com/photo-1677442136019-21c1f4b1ec0f?w=800&auto=format&fit=crop&q=60"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Apply dark mode class to body
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading ? (
        <Preloader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <ThreeScene />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Certificate certificates={certificates} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;