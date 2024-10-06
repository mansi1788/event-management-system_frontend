// src/components/Wishlist.js
import React, { useContext } from 'react';
import { WishlistContext } from './contexts/WishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleMoveToCart = (item, index) => {
    // Implement move to cart functionality here if desired
    // For simplicity, we'll navigate to the Cart page
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold mb-6 text-white">Your Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul>
            {wishlistItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-xl">
                    Price: <FontAwesomeIcon icon="rupee-sign" /> {item.price}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleMoveToCart(item, index)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
