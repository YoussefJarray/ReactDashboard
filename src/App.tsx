import React, { useState } from 'react';
import Dashboard from './Dashboard';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="bg-gray-200 dark:bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex flex-row justify-center align-bottom items-baseline gap-4'>
          <h1 className="text-black dark:text-white text-xl font-bold">React Dashbord</h1>
          <h3 className="text-gray-500 dark:text-white font-bold">By Youssef Jarray</h3>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded-full bg-gray-800 dark:bg-white dark:text-black text-white"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="container mx-auto p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
