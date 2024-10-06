import React from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar'; // Assuming this is your navbar for users
import { motion } from 'framer-motion';
import Register from './UserRegister';

const User = () => {
  return (
    <div className="flex mt-16 w-screen flex-col items-center min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-teal-200">
      <UserNavbar />

      {/* Animated Container */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center mt-10 w-full max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Your User Portal</h2>
        <p className="text-gray-600 mb-6">
          Enjoy exploring a wide range of products and services tailored for you!
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Link
            to="/user/register"
            className="bg-blue-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-500 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/user/login"
            className="bg-blue-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="mt-10 max-w-4xl px-6 text-center md:text-left">
        <h3 className="text-2xl font-bold text-blue-500 mb-4">About Our Services</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our user portal is designed to give you easy access to the best services and products available. Whether you're looking 
          for new products, deals, or ways to manage your purchases, we are here to help you every step of the way.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Join us today and enjoy seamless access to everything you need, tailored just for you. We prioritize your satisfaction
          and aim to deliver the best user experience possible!
        </p>
      </div>
    </div>
  );
};

export default User;
