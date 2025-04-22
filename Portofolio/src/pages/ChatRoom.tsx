import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ChatRoomProps {
  isDarkMode: boolean;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ isDarkMode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Chat Room</h1>

        {!isSignedIn ? (
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6 text-center`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Welcome to the Chat Room</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Please sign in to start chatting with other users.
            </p>
            <button
              onClick={handleSignIn}
              className={`px-6 py-2 rounded-lg font-medium ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
            <div className="h-96 overflow-y-auto mb-4">
              {/* Example messages */}
              <div className="space-y-4">
                <div className={`flex ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <div className="flex-shrink-0">
                    <img
                      src="https://github.com/emilioyanvrent.png"
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">John Doe</p>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>
                <div className={`flex ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <div className="flex-shrink-0">
                    <img
                      src="https://github.com/emilioyanvrent.png"
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Jane Smith</p>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      I have a question about your projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white placeholder-gray-400' 
                    : 'bg-gray-100 text-gray-800 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg font-medium ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Send
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ChatRoom; 