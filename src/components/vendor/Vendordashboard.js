// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VendorDashboard = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [contact, setContact] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch items on component mount
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/v1/items'); // Adjust endpoint
//         setItems(response.data.items);
//       } catch (err) {
//         console.error('Failed to fetch items:', err);
//         setError('Failed to fetch items.');
//       }
//     };
//     fetchItems();
//   }, []);

//   const handleAddItem = async (e) => {
//     e.preventDefault();
    
//     // Simple validation check
//     if (!newItem || !contact || !date) {
//       setError('All fields are required.');
//       return;
//     }
    
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/items', {
//         name: newItem,
//         contact,
//         date
//       });
      
//       if (response.data.success) {
//         setItems([...items, response.data.item]);
//         setNewItem('');
//         setContact('');
//         setDate('');
//       } else {
//         setError('Failed to add item.');
//       }
//     } catch (err) {
//       console.error('Failed to add item:', err);
//       setError('Failed to add item.');
//     }
//   };
  

//   const handleDeleteItem = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/v1/items/${itemId}`);
//       setItems(items.filter(item => item._id !== itemId));
//     } catch (err) {
//       console.error('Failed to delete item:', err);
//       setError('Failed to delete item.');
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-xl font-bold">Vendor Dashboard</h1>
//           <div>
//             <a href="/" className="mr-4">Home</a>
//             <a href="/logout" className="mr-4">Logout</a>
//           </div>
//         </div>
//       </nav>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-1/4 bg-gray-200 p-4">
//           <form onSubmit={handleAddItem} className="mb-4">
//             <input
//               type="text"
//               value={newItem}
//               onChange={(e) => setNewItem(e.target.value)}
//               placeholder="Item Name"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
//             />
//             <input
//               type="text"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Contact Details"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
//             />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add Item
//             </button>
//           </form>
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         </aside>

//         {/* Main content */}
//         <main className="w-3/4 p-4">
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-lg font-semibold mb-2">Added Items</h2>
//             {items.length > 0 ? (
//               <ul>
//                 {items.map(item => (
//                   <li key={item._id} className="flex justify-between items-center mb-2">
//                     <div>
//                       <p><strong>Name:</strong> {item.name}</p>
//                       <p><strong>Contact:</strong> {item.contact}</p>
//                       <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
//                     </div>
//                     <button
//                       onClick={() => handleDeleteItem(item._id)}
//                       className="bg-red-500 text-white py-1 px-2 rounded"
//                     >
//                       Delete
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No items available.</p>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VendorDashboard;

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
