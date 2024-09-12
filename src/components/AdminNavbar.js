// AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Admin Portal</h1>
        <div>
      
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
         
          <Link to="/admin/login" className="text-white px-4 py-2 hover:bg-red-700 rounded">
            Admin Login
          </Link>
          <Link to="/admin/register" className="text-white px-4 py-2 hover:bg-red-700 rounded">
            Admin Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
