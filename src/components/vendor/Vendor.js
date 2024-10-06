// Vendor.js
import React from 'react';
import { Link } from 'react-router-dom';
import VendorNavbar from './VendorNavbar'; // Assuming this contains the navbar component
import { motion } from 'framer-motion';

const Vendor = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <VendorNavbar />

      {/* Animated Container */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center mt-10 w-full max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Welcome to Your Vendor Portal</h2>
        <p className="text-gray-700 mb-6">
          We are excited to have you on board! Start managing your rental items and connecting with customers.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Link to="/vendor/register" className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Register
          </Link>
          <Link to="/vendor/login" className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Login
          </Link>
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">About Us</h3>
          <p className="text-gray-700 mb-4">
            At our Vendor Portal, we strive to streamline the rental process, making it easier for vendors to manage their offerings
            and connect with customers. Our goal is to provide a seamless experience for everyone involved. Join us in transforming
            the rental market!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Vendor;
