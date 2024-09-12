// VendorNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const VendorNavbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Vendor Portal</h1>
        <div>
     
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
       
          <Link to="/vendor/login" className="text-white px-4 py-2 hover:bg-green-700 rounded">
            Vendor Login
          </Link>
          <Link to="/vendor/register" className="text-white px-4 py-2 hover:bg-green-700 rounded">
            Vendor Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default VendorNavbar;
