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
// import Certificate from './components/Certificate';

// Example certificates data - replace with your actual certificates
// const certificates = [
//   {
//     title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
//     issuer: "Oracle",
//     date: "February 2025",
//     credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9C43B4CBD8293B75158D8374318B9DF476E17D57C56E8BDC9C8B747FA4106764",
//     image: "https://techno-soft.com/wp-content/uploads/2018/10/oracle-certified-professional.jpg"
//   },
//   {
//     title: "Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate",
//     issuer: "Oracle",
//     date: "February 2025",
//     credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9C43B4CBD8293B75158D8374318B9DF450E1028B1BF5BF01FA5B356BB3003ADB",
//     image: "https://techno-soft.com/wp-content/uploads/2018/10/oracle-certified-professional.jpg"
//   },
//   {
//     title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
//     issuer: "Oracle",
//     date: "February 2025",
//     credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3B21AD3D326ED2EE7829F8F8EE03A7D6D47BA196F600A672272444F9057AECF",
//     image: "https://techno-soft.com/wp-content/uploads/2018/10/oracle-certified-professional.jpg"
//   }
// ];


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
            {/* <Certificate certificates={certificates} /> */}
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;