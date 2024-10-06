import React from 'react';
import { Link } from 'react-router-dom';
import VendorNavbar from './VendorNavbar'; // Assuming this contains the navbar component
import { motion } from 'framer-motion';

const Vendor = () => {
  return (
    <div className="flex mt-16 w-screen flex-col items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-200">
      <VendorNavbar />

      {/* Animated Container */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center mt-10 w-full max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Welcome to Your Vendor Portal</h2>
        <p className="text-gray-600 mb-6">
          We are excited to have you on board! Start managing your rental items and connecting with customers.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Link
            to="/vendor/register"
            className="bg-pink-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-500 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/vendor/login"
            className="bg-pink-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </motion.div>

      {/* About Us Section - No Box */}
      <div className="mt-10 max-w-4xl px-6 text-center md:text-left">
        <h3 className="text-2xl font-bold text-pink-800 mb-4">About Us</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At our Vendor Portal, we aim to simplify the rental process, making it easier for vendors to manage their offerings
          and connect with customers. Our goal is to provide a seamless and enjoyable experience for everyone involved. We
          believe that by streamlining these processes, we can transform the rental market and help vendors succeed in a
          competitive landscape.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Join us and explore how our tools can empower your business to thrive in the rental industry. Together, we can
          create meaningful connections and make rental management hassle-free!
        </p>
      </div>
    </div>
  );
};

export default Vendor;
