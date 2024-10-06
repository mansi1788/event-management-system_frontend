// src/contexts/WishlistContext.js
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (event) => {
    setWishlistItems((prevItems) => [...prevItems, event]);
  };

  const removeFromWishlist = (index) => {
    setWishlistItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
