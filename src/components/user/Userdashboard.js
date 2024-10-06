import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';

const UserDashboard = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [guestList, setGuestList] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [newGuest, setNewGuest] = useState('');

  const navigate = useNavigate();

  const events = [
    { name: 'Wedding', img: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?b=1&s=612x612&w=0&k=20&c=M9fUJtk8veFCZjE96JEKe-p3fpuwg8wutyMzfqSBTd0=' },
    { name: 'Birthday Party', img:
     'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Anniversary', img: 'https://images.pexels.com/photos/11219290/pexels-photo-11219290.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  // Function to handle event selection
  const handleSelectEvent = (eventName) => {
    switch (eventName) {
      case 'Wedding':
        navigate('/events/wedding');
        break;
      case 'Birthday Party':
        navigate('/events/birthday');
        break;
      case 'Anniversary':
        navigate('/events/anniversary');
        break;
      default:
        break;
    }
  };

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (newGuest.trim() !== '') {
      setGuestList([...guestList, newGuest]);
      setNewGuest('');
    }
  };

  const handleRemoveGuest = (guest) => {
    setGuestList(guestList.filter(g => g !== guest));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
          <div className="flex items-center">
            <div className="mr-6">
              <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/">Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 text-center text-white">
        <div className="container mx-auto p-8">
          <h2 className="text-5xl font-bold mb-4">Let's Plan Your Perfect Event!</h2>
          <p className="text-lg mb-8">Create magical moments with Eventify. Manage events, track guests, and confirm bookings with ease.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleSelectEvent(event.name)}
              >
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
                  <p className="text-gray-600 mt-2">Click to explore the {event.name.toLowerCase()} event ideas.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Guest List Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center"><FaUsers className="mr-2" /> Guest List</h2>
          <form onSubmit={handleAddGuest} className="flex mb-4">
            <input
              type="text"
              value={newGuest}
              onChange={(e) => setNewGuest(e.target.value)}
              placeholder="Enter guest name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-500 mr-2"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Add Guest
            </button>
          </form>
          {guestList.length > 0 ? (
            <ul>
              {guestList.map((guest, index) => (
                <li key={index} className="flex justify-between items-center border-b py-2">
                  {guest}
                  <button
                    onClick={() => handleRemoveGuest(guest)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No guests added yet. Start building your guest list now!</p>
          )}
        </div>

        {/* Order Status Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center"><FaCheckCircle className="mr-2" /> Order Status</h2>
          <p className="text-gray-700 mb-4">{orderStatus}</p>
          <button
            onClick={() => setOrderStatus('Confirmed')}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
