import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ChatRoom from './pages/ChatRoom';
import { Bars3Icon } from '@heroicons/react/24/outline'; // Import hamburger icon

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router basename="/emilioyanvrent">
      <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Header (for sidebar toggle on small screens) */}
          <div className={`sticky top-0 z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-sm lg:hidden`}>
            <div className="px-4 py-3">
              <button onClick={toggleSidebar} className={`${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-gray-100`}>
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
              <Route path="/achievements" element={<Achievements isDarkMode={isDarkMode} />} />
              <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
              <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
              <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
              <Route path="/chatroom" element={<ChatRoom isDarkMode={isDarkMode} />} />
            </Routes>
            <Footer isDarkMode={isDarkMode} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 