import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorDashboard = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch items on component mount
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/items'); // Adjust endpoint
        setItems(response.data.items);
      } catch (err) {
        console.error('Failed to fetch items:', err);
        setError('Failed to fetch items.');
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = async (e) => {
    e.preventDefault();
    
    // Simple validation check
    if (!newItem || !contact || !date) {
      setError('All fields are required.');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/items', {
        name: newItem,
        contact,
        date
      });
      
      if (response.data.success) {
        setItems([...items, response.data.item]);
        setNewItem('');
        setContact('');
        setDate('');
      } else {
        setError('Failed to add item.');
      }
    } catch (err) {
      console.error('Failed to add item:', err);
      setError('Failed to add item.');
    }
  };
  

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/items/${itemId}`);
      setItems(items.filter(item => item._id !== itemId));
    } catch (err) {
      console.error('Failed to delete item:', err);
      setError('Failed to delete item.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Vendor Dashboard</h1>
          <div>
            <a href="/" className="mr-4">Home</a>
            <a href="/logout" className="mr-4">Logout</a>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 p-4">
          <form onSubmit={handleAddItem} className="mb-4">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Item Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
            />
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact Details"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Item
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        </aside>

        {/* Main content */}
        <main className="w-3/4 p-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Added Items</h2>
            {items.length > 0 ? (
              <ul>
                {items.map(item => (
                  <li key={item._id} className="flex justify-between items-center mb-2">
                    <div>
                      <p><strong>Name:</strong> {item.name}</p>
                      <p><strong>Contact:</strong> {item.contact}</p>
                      <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items available.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
