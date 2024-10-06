// VendorNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const VendorNavbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full h-16 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/" className="text-3xl font-bold text-pink-600">
          Eventify!
        </Link>
        </div>
        </nav>
  );
};

export default VendorNavbar;
