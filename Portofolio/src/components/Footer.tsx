import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/emilioyanvrent', icon: '📦' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/emilioyanvrent', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/emilioyanvrent', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com/emilioyanvrent', icon: '📸' },
  ];

  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Emilio Yanvrent is a final-year Information Systems student with expertise in 
              Big Data, Data Science, and Artificial Intelligence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-xl`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>© {currentYear} Emilio Yanvrent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 