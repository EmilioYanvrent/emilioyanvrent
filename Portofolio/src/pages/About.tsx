import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  LightBulbIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const education = [
    {
      school: 'Universitas Multimedia Nusantara',
      degree: 'Bachelor of Information Systems',
      year: '2022 - Present',
      description: 'Faculty of Engineering and Informatics | GPA: 3.55',
      involvement: 'Student Representative for research with lecturers team, helping SMEs develop their business and waste bank systems. Developed skills in website management, data analysis, and team communication.'
    },
    {
      school: 'Stella Maris International School',
      degree: 'High School Diploma',
      year: '2019 - 2021',
      description: 'IGCSE Curriculum | International Baccalaureate Certificate | Average: 90/100',
      involvement: 'Head of Public Relations in Student Council, organized partnerships and sponsorships, created media publications timeline, and managed team members for various events.'
    }
  ];

  const experience = [
    {
      company: 'PT. Artha Telekomindo',
      role: 'Data Scientist Intern',
      period: 'Feb - May 2025',
      description: 'Research and Development Division. Responsibilities include: data labeling and annotation, data collection and cleaning from various sources, fine-tuning and deploying language models, developing custom ML/DL models, and documenting processes and outcomes.',
      achievements: [
        'Developed and optimized language models for text classification and question-answering',
        'Created high-quality datasets for machine learning applications',
        'Implemented data collection and cleaning pipelines from multiple sources',
        'Documented best practices and processes for team knowledge sharing'
      ]
    },
    {
      company: 'Universitas Multimedia Nusantara',
      role: 'Student Representative & Researcher',
      period: '2022 - Present',
      description: 'Collaborated with lecturers on research projects, developed websites for SMEs and waste banks, managed data systems, and improved business processes through technology.'
    },
    {
      company: 'Stella Maris International School',
      role: 'Head of Public Relations',
      period: '2019 - 2021',
      description: 'Led the public relations team in the Student Council, organized events and partnerships, managed media publications, and coordinated team activities.'
    }
  ];

  const skills = [
    {
      category: 'Technical Skills',
      items: ['Website Development', 'Data Analysis', 'Data Management', 'System Design', 'Machine Learning', 'Deep Learning', 'Data Labeling', 'Model Fine-tuning']
    },
    {
      category: 'Leadership & Management',
      items: ['Team Leadership', 'Project Management', 'Event Organization', 'Public Relations', 'Research Collaboration']
    },
    {
      category: 'Soft Skills',
      items: ['Communication', 'Problem Solving', 'Time Management', 'Team Collaboration', 'Documentation']
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
            About Me
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a passionate developer with a focus on creating innovative solutions using modern technologies.
            My journey in tech has led me to explore various domains, from web development to artificial intelligence.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <AcademicCapIcon className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
          </div>
          <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {edu.school}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
                  {edu.degree} • {edu.year}
                </p>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <BriefcaseIcon className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.role}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
                  {exp.company} • {exp.period}
                </p>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <CodeBracketIcon className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 