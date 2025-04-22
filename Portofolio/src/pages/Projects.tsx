import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ServerIcon, BeakerIcon } from '@heroicons/react/24/outline';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'PKM UMKM Kuliner E-Commerce',
      description: 'Developed a comprehensive e-commerce website for SMEs in Legok to manage sales documentation and transactions. Implemented both front-end and back-end solutions.',
      image: '/images/projects/umkm-kuliner.jpg',
      tags: ['Web Development', 'E-Commerce', 'Full Stack'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Bank Sampah Information System',
      description: 'Created an information system for recording Bank Sampah transactions, focusing on user interface design and transaction management.',
      image: '/images/projects/bank-sampah.jpg',
      tags: ['Web Development', 'UI/UX', 'Frontend'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'CV Reviewer AI',
      description: 'Developed an AI-powered CV review system using DeepSeek as the base model, automating the candidate evaluation process for HR teams.',
      image: '/images/projects/cv-reviewer.jpg',
      tags: ['AI', 'DeepSeek', 'Machine Learning'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'AI Chatbot for Analytics',
      description: 'Built and optimized an AI chatbot using DeepSeek to provide quick answers and advanced analytics for company decision-making.',
      image: '/images/projects/ai-chatbot.jpg',
      tags: ['AI', 'Chatbot', 'DeepSeek', 'Analytics'],
      github: '#',
      demo: '#'
    }
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <CodeBracketIcon className="h-5 w-5" />;
      case 'ai':
        return <BeakerIcon className="h-5 w-5" />;
      case 'data':
        return <ServerIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of projects I've worked on, showcasing my skills and experience.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? isDarkMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isDarkMode ? 'bg-gray-900/50' : 'bg-gray-900/30'
                } opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } text-gray-800 hover:scale-110 transition-transform`}
                  >
                    <CodeBracketIcon className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } text-gray-800 hover:scale-110 transition-transform`}
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 