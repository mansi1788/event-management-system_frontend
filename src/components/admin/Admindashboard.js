import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
 <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
          <div className="flex items-center">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 mr-6">Home</a>
            <button
              onClick={() => navigate('/admin/register')}
              className="text-gray-700 hover:text-pink-600 transition mr-6 duration-300"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/admin/login')}
              className="text-gray-700 hover:text-pink-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    <div className="flex flex-col justify-center items-center min-h-screen  space-y-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Admin Dashboard!</h1>
      
      {/* Section for User Dashboard */}
      <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center">
        <h2 className="text-2xl font-semibold mb-4">User Section</h2>
        <p className="mb-4">Manage all user-related tasks here.</p>
        <button
          onClick={() => navigate('/user/dashboard')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go to User Dashboard
        </button>
      </div>

      {/* Section for Vendor Dashboard */}
      <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center">
        <h2 className="text-2xl font-semibold mb-4">Vendor Section</h2>
        <p className="mb-4">Manage all vendor-related tasks here.</p>
        <button
          onClick={() => navigate('/vendor/dashboard')}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Go to Vendor Dashboard
        </button>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
