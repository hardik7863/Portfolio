import React from 'react';
import { BrainCircuit, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <BrainCircuit className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-xl font-bold font-display text-gradient">Hardik Batwal</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              &copy; {currentYear} Hardik Batwal. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart size={14} className="mx-1 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;