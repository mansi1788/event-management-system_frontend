// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full h-16 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/" className="text-3xl font-bold text-pink-600">
          Eventify!
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Home
          </Link>
          <Link to="/vendor-events" className="text-gray-700 hover:text-pink-600 transition duration-300">
            Vendor Events
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-pink-600 transition duration-300">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="/wishlist" className="relative text-gray-700 hover:text-pink-600 transition duration-300">
            <FontAwesomeIcon icon={faHeart} size="lg" />
            {wishlistItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
