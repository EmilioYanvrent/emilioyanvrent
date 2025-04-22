import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  const skills = [
    { name: 'Python', emoji: '🐍' },
    { name: 'JavaScript', emoji: '💛' },
    { name: 'TypeScript', emoji: '💙' },
    { name: 'React', emoji: '⚛️' },
    { name: 'Next.js', emoji: '▲' },
    { name: 'Node.js', emoji: '💚' },
    { name: 'Express', emoji: '🚂' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'MySQL', emoji: '🐬' },
    { name: 'Git', emoji: '📚' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'AWS', emoji: '☁️' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'PT. Artha Telekomindo Team',
      role: 'Research and Development Division',
      content: 'Emilio demonstrated exceptional skills in developing AI solutions, including the CV Reviewer and Chatbot projects. His technical expertise and problem-solving abilities were invaluable to our team.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Universitas Multimedia Nusantara',
      role: 'Lecturer Team',
      content: 'Emilio showed great initiative and technical skills in developing websites and information systems for SMEs, contributing significantly to our community development projects.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Stella Maris International School',
      role: 'Student Council',
      content: 'As Head of Public Relations, Emilio demonstrated strong leadership and organizational skills, successfully managing partnerships and event coordination.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'AI Solutions Development',
      description: 'Development and deployment of AI-driven solutions including CV Reviewers, Chatbots, and Document Analyzers using advanced language models.',
      icon: <CpuChipIcon className="h-8 w-8" aria-hidden="true" />,
    },
    {
      id: 2,
      title: 'Data Analysis & Visualization',
      description: 'Comprehensive data analysis and visualization using tools like Power BI, Tableau, and Python data libraries for business insights.',
      icon: <ChartBarIcon className="h-8 w-8" aria-hidden="true" />,
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Full-stack web development for business solutions, including e-commerce platforms and information systems for SMEs.',
      icon: <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />,
    }
  ];

  return (
    <div className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Hi, I'm <span className="text-indigo-600">Emilio Yanvrent</span>
              </h1>
              <h2 className="text-2xl font-medium mb-6">
                Data Scientist & Web Developer
              </h2>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A final-year Information Systems student at Universitas Multimedia Nusantara with expertise in Big Data, Data Science, and Artificial Intelligence. 
                Experienced in developing AI-driven solutions, data analysis, and website development. 
                Proficient in building systems that process, analyze, and extract insights from complex data, with strong leadership and problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                    isDarkMode 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  View My Work
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 rounded-lg font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <img 
                  src="/images/hero.jpg" 
                  alt="Emilio Yanvrent" 
                  className="w-full h-auto"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode ? 'from-gray-900/70 to-transparent' : 'from-gray-900/50 to-transparent'
                }`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white text-sm">Available for projects</span>
                  </div>
                </div>
              </div>
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${
                isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
              } opacity-20 blur-xl`}></div>
              <div className={`absolute -top-6 -left-6 w-32 h-32 rounded-full ${
                isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
              } opacity-20 blur-xl`}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills
            </h2>
            <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My professional skills.
            </p>
            <div className="relative w-full overflow-hidden">
              <motion.div 
                className="flex whitespace-nowrap gap-6"
                animate={{ 
                  x: ["-50%", "0%"]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{
                  width: "fit-content"
                }}
              >
                {/* Double the skills for continuous scrolling */}
                {[...Array(4)].map((_, setIndex) => (
                  <React.Fragment key={`set-${setIndex}`}>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={`${setIndex}-${skill.name}`}
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
                          isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        } transition-all duration-300 ease-in-out transform hover:scale-105`}
                      >
                        <span className="text-2xl">{skill.emoji}</span>
                        <span className={`text-lg font-medium ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              What I can do for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              What people say about my work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-indigo-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link 
              to="/contact" 
              className={`px-8 py-3 rounded-lg font-medium inline-flex items-center ${
                isDarkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              Get In Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;