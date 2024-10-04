import React from 'react';

const Anniversary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Anniversary Event</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM72kUw15QSO_uuhV5UGgrg6mW9sHc9YF02Q&s" alt="Wedding 3" className="rounded-lg w-96 h-80" />
        <img src="https://images.pexels.com/photos/16879007/pexels-photo-16879007/free-photo-of-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 3" className="rounded-lg w-96 h-80" />
        <img src="https://images.pexels.com/photos/17023005/pexels-photo-17023005/free-photo-of-beautifully-decorated-tables-in-a-luxury-restaurant-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 3" className="rounded-lg w-96 h-80" />
        <img src="https://images.pexels.com/photos/12846023/pexels-photo-12846023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 3" className="rounded-lg w-96 h-80" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWDkVnRQwID1nsNEXlJ8ZQ5deNNdRmtTqSA&s" alt="Wedding 3" className="rounded-lg w-96 h-80" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ERb9QvoSt_D4MHidEULdwdnilOiLzt53lQ&s" alt="Wedding 3" className="rounded-lg w-96 h-80" />


        
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Wedding Packages</h2>
        <ul>
          <li className="flex justify-between items-center mb-4">
            <span>Package 1: Basic Wedding - $1000</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </li>
          <li className="flex justify-between items-center mb-4">
            <span>Package 2: Premium Wedding - $2500</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </li>
          <li className="flex justify-between items-center mb-4">
            <span>Package 3: Luxury Wedding - $5000</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Manage Your Wedding Event</h2>
        <p>We provide complete wedding management services, including venue, catering, decorations, etc.</p>
        <p>Total Price: $5000</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
      </div>
    </div>
  );
};

export default Anniversary;
