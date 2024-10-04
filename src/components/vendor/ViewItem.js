import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {}; // Access passed item data

  if (!item) {
    return <p>No item data available.</p>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">View Item</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/vendor/dashboard')}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Back to Dashboard
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Item Details</h2>
          <div className="space-y-4">
            <p className="text-lg font-medium"><strong>Name:</strong> {item.name}</p>
            <p className="text-lg font-medium"><strong>Description:</strong> {item.description}</p>
            <p className="text-lg font-medium"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <p className="text-lg font-medium"><strong>Contact:</strong> {item.contact}</p>
            <p className="text-lg font-medium"><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
            <p className="text-lg font-medium"><strong>Time:</strong> {new Date(item.date).toLocaleTimeString()}</p>
            <p className="text-lg font-medium"><strong>Event Name:</strong> {item.eventName}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewItem;
