import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  TrophyIcon,
  DocumentTextIcon,
  LightBulbIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface AchievementsProps {
  isDarkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  const achievements = [
    {
      category: 'Academic',
      icon: <AcademicCapIcon className="w-6 h-6" />,
      items: [
        {
          title: 'Dean\'s List',
          description: 'Achieved Dean\'s List recognition for outstanding academic performance',
          year: '2023'
        },
        {
          title: 'Research Publication',
          description: 'Published research paper on AI applications in business process automation',
          year: '2024'
        }
      ]
    },
    {
      category: 'Professional',
      icon: <TrophyIcon className="w-6 h-6" />,
      items: [
        {
          title: 'Best Intern Award',
          description: 'Recognized as the top performing intern at PT. Artha Telekomindo',
          year: '2024'
        },
        {
          title: 'Hackathon Winner',
          description: 'First place in UMN Hackathon for innovative AI solution',
          year: '2023'
        }
      ]
    },
    {
      category: 'Certifications',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      items: [
        {
          title: 'AWS Certified Developer',
          description: 'Associate level certification for AWS cloud development',
          year: '2024'
        },
        {
          title: 'Google Cloud Professional',
          description: 'Professional certification for Google Cloud Platform',
          year: '2023'
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Achievements
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of my academic and professional accomplishments, certifications, and recognition.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              {/* Category Header */}
              <div className={`p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {category.icon}
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.category}
                  </h2>
                </div>
              </div>

              {/* Achievement Items */}
              <div className="p-6 space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (itemIndex * 0.1) }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`mt-1 p-1 rounded ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                        <StarIcon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.description}
                        </p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>15+</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>10+</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</div>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>5+</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Awards Received</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements; 