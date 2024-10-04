// UserNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">User Portal</h1>
        <div>
      
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
         
          <Link to="/user/login" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            User Login
          </Link>
          <Link to="/user/register" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            User Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
