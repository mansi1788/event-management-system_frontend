import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';

const VendorDashboard = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    price: '',
    images: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Fetch vendor-specific events from the backend
  const fetchVendorEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/events/vendor', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you're storing JWT token in localStorage
        }
      });
      setEvents(response.data);
      setError(''); // Clear error message
    } catch (error) {
      console.error( error);
     // setError('Failed to fetch vendor events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle input change for new event
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle adding a new event
 
  
    const handleAddEvent = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      setSuccessMessage('');
  
      try {
          const response = await axios.post('http://localhost:8080/events/add', {
              ...newEvent,
              images: newEvent.images.split(',') // Convert comma-separated string to array
          }, {
              headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`
              }
          });
  
          console.log('Event added:', response.data); // Log the response data
          fetchVendorEvents(); // Refresh events after adding
          setNewEvent({ title: '', description: '', price: '', images: '' }); // Reset form
          setSuccessMessage('Event added successfully!');
      } catch (error) {
          // Improved error handling
          if (error.response) {
              setError(`Error: ${error}`);
          } else if (error.request) {
              setError(error);
          } else {
              setError(error,'add');
          }
      } finally {
          setLoading(false);
      }

    };



  useEffect(() => {
    fetchVendorEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
          <div className="flex items-center">
            <div className="mr-6">
              <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/">Home</a>
              <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/vendor/register">Register</a>
              <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/vendor/login">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 pt-24">
        {/* Add Event Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center">
            <FaPlusCircle className="mr-2" /> Add New Event
          </h2>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              placeholder="Event Title"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-500"
              required
            />
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              placeholder="Event Description"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-500"
              required
            />
            <input
              type="number"
              name="price"
              value={newEvent.price}
              onChange={handleInputChange}
              placeholder="Event Price"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-500"
              required
            />
            <input
              type="text"
              name="images"
              value={newEvent.images}
              onChange={handleInputChange}
              placeholder="Image URLs (comma-separated)"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-500"
              required
            />
            <button
              type="submit"
              className={`bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Event'}
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Events List Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event._id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                    <p className="text-gray-800">Price: ${event.price}</p>
                  </div>
                  <img src={event.images[0]} alt={event.title} className="w-20 h-20 object-cover rounded-md" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No events added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;