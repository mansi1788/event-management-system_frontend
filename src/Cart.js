// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold mb-6 text-white">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-xl">
                    Price: <FontAwesomeIcon icon="rupee-sign" /> {item.price}
                  </p>
                  {/* Display customization options if any */}
                  {item.decoration && <p>Decoration: {item.decoration}</p>}
                  {item.lighting && <p>Lighting: {item.lighting}</p>}
                  {item.catering && <p>Catering: {item.catering}</p>}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
              </li>
            ))}
          </ul>
          <div className="text-3xl font-bold mt-6">Total: <FontAwesomeIcon icon="rupee-sign" /> {totalPrice}</div>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-white">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
