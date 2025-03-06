import React, { useEffect, useState } from 'react';

const greetings = [
  '. Hello', // English
  '. Hola', // Spanish
  '. Bonjour', // French
  '. Hallo', // German
  '. Ciao', // Italian
  '. こんにちは', // Japanese
  '. 안녕하세요', // Korean
  '. 你好', // Chinese
  '. Привет', // Russian
  '. مرحبا', // Arabic
];

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 100); // Change greeting every second

    // Simulate loading complete after 3 seconds
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{greetings[greetingIndex]}</h1>
    </div>
  );
};

export default Preloader;