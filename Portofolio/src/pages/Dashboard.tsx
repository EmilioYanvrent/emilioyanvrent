import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface DashboardProps {
  isDarkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  const languages = [
    { name: 'English', level: 'Professional', flag: '🇺🇸' },
    { name: 'Indonesian', level: 'Native', flag: '🇮🇩' },
    { name: 'Chinese', level: 'Basic', flag: '🇨🇳' },
  ];

  const stats = [
    {
      title: 'Total Projects',
      value: '15',
      change: '+2 this month',
      trend: 'up',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      title: 'Active Projects',
      value: '4',
      change: 'Currently in progress',
      trend: 'neutral',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      title: 'Client Satisfaction',
      value: '98%',
      change: '+5% from last month',
      trend: 'up',
      icon: <UserGroupIcon className="w-6 h-6" />
    }
  ];

  const recentProjects = [
    {
      name: 'E-Commerce Platform',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-05-01'
    },
    {
      name: 'AI Image Generator',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-03-15'
    },
    {
      name: 'Task Management App',
      status: 'In Progress',
      progress: 60,
      dueDate: '2024-06-30'
    }
  ];

  const activities = [
    {
      action: 'Completed milestone',
      project: 'E-Commerce Platform',
      time: '2 hours ago'
    },
    {
      action: 'Added new feature',
      project: 'Task Management App',
      time: '5 hours ago'
    },
    {
      action: 'Deployed update',
      project: 'AI Image Generator',
      time: '1 day ago'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Dashboard
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Overview of your portfolio and project statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  {stat.icon}
                </div>
                {stat.trend === 'up' && (
                  <ArrowTrendingUpIcon className={`w-5 h-5 ${
                    isDarkMode ? 'text-green-400' : 'text-green-500'
                  }`} />
                )}
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </p>
              <p className={`text-sm mt-1 ${
                stat.trend === 'up'
                  ? isDarkMode ? 'text-green-400' : 'text-green-600'
                  : isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {stat.change}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden`}
          >
            <div className={`p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Projects
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Due: {project.dueDate}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'Completed'
                            ? isDarkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-600'
                            : isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="w-24">
                      <div className="relative pt-1">
                        <div className={`overflow-hidden h-2 text-xs flex rounded ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <div
                            style={{ width: `${project.progress}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                              project.progress === 100
                                ? isDarkMode ? 'bg-green-500' : 'bg-green-500'
                                : isDarkMode ? 'bg-blue-500' : 'bg-blue-500'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden`}
          >
            <div className={`p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Activity
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`mt-1 p-1 rounded ${
                      isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                    }`}>
                      <ChatBubbleLeftRightIcon className={`w-4 h-4 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.action}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.project}
                      </p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 