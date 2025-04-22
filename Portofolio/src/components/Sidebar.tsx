import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  TrophyIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleDarkMode, isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const profileImage = "/images/Pas Foto Emilio.jpg"; // Updated path to profile image

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-5 w-5" /> },
    { name: 'About', path: '/about', icon: <UserIcon className="h-5 w-5" /> },
    { name: 'Projects', path: '/projects', icon: <FolderIcon className="h-5 w-5" /> },
    { name: 'Achievements', path: '/achievements', icon: <TrophyIcon className="h-5 w-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <ChartBarIcon className="h-5 w-5" /> },
    { name: 'Chat Room', path: '/chatroom', icon: <ChatBubbleLeftRightIcon className="h-5 w-5" /> },
    { name: 'Contact', path: '/contact', icon: <EnvelopeIcon className="h-5 w-5" /> },
  ];

  return (
    <motion.div
      transition={{ type: "tween", duration: 0.3 }}
      className={`fixed lg:relative inset-y-0 left-0 z-30 flex flex-col w-64 h-full 
                 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
                 shadow-lg lg:shadow-none 
                 transform transition-transform duration-300 ease-in-out
                 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                 lg:translate-x-0`}
    >
      <button 
        onClick={toggleSidebar} 
        className="absolute top-4 right-4 lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      <div className={`p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className={`w-24 h-24 rounded-full mb-4 border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}
          />
          <h2 className="text-xl font-semibold">Emilio Yanvrent</h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            @emilioyanvrent
          </p>
          <button 
            className={`mt-4 px-4 py-2 text-sm rounded-lg font-medium ${
              isDarkMode 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
            }`}
          >
            Hire me
          </button>
        </motion.div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={toggleSidebar}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                : isDarkMode ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={toggleDarkMode}
          className={`w-full flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium mb-4 transition-colors ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5 mr-2" />
          ) : (
            <MoonIcon className="h-5 w-5 mr-2" />
          )}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <p className={`text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          COPYRIGHT © {new Date().getFullYear()} Emilio Yanvrent. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Sidebar; 