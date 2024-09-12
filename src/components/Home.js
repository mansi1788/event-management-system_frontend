// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {/* Vendor Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Vendor</h2>
          <p className="text-gray-700 mb-6">Access vendor-specific tools and management options.</p>
          <button 
            onClick={() => navigate('/vendor')} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Vendor Portal
          </button>
        </div>

        {/* User Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">User</h2>
          <p className="text-gray-700 mb-6">Explore user-specific features and services.</p>
          <button 
            onClick={() => navigate('/user')} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            User Portal
          </button>
        </div>

        {/* Admin Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Admin</h2>
          <p className="text-gray-700 mb-6">Manage the entire platform from the admin dashboard.</p>
          <button 
            onClick={() => navigate('/admin')} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
