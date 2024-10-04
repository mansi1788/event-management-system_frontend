// import React, { useState } from 'react';

// const UserDashboard = () => {
//   const [selectedEvents, setSelectedEvents] = useState([]);
//   const [guestList, setGuestList] = useState([]);
//   const [orderStatus, setOrderStatus] = useState('Pending');
//   const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false); // State for Vendor Events dropdown
//   const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false); // State for Cart dropdown
//   const [newGuest, setNewGuest] = useState(''); // State for new guest input

//   const events = ['Wedding', 'Birthday Party', 'Anniversary'];

//   const handleSelectEvent = (event) => {
//     if (!selectedEvents.includes(event)) {
//       setSelectedEvents([...selectedEvents, event]);
//     }
//   };

//   const handleRemoveEvent = (event) => {
//     setSelectedEvents(selectedEvents.filter(e => e !== event));
//   };

//   const handleAddGuest = (e) => {
//     e.preventDefault();
//     if (newGuest.trim() !== '') {
//       setGuestList([...guestList, newGuest]);
//       setNewGuest(''); // Reset input field
//     }
//   };

//   const handleRemoveGuest = (guest) => {
//     setGuestList(guestList.filter(g => g !== guest));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-white text-2xl font-bold">User Dashboard</h1>
//           <div className="flex items-center">
//             {/* Vendor Dropdown */}
//             <div className='m-3'  >
//             <a className=" block w-full px-4 py-2 text-left  hover:bg-gray-200 text-white bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none" href="/" >Home</a>
//           </div>
//             <div className="relative">
//               <button
//                 onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)} // Toggle Vendor Events dropdown
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
//               >
//                 Vendor Events
//               </button>
//               {isEventDropdownOpen && ( // Conditional rendering of Vendor Events dropdown
//                 <div className="absolute mt-2 w-48 bg-white rounded shadow-lg">
//                   {events.map((event) => (
//                     <button
//                       key={event}
//                       onClick={() => handleSelectEvent(event)}
//                       className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
//                     >
//                       {event}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Cart Dropdown */}
//             <div className="ml-6 relative">
//               <button
//                 onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)} // Toggle Cart dropdown
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
//               >
//                 Cart ({selectedEvents.length})
//               </button>
//               {isCartDropdownOpen && ( // Conditional rendering of Cart dropdown
//                 <div className="absolute mt-2 w-64 bg-white rounded shadow-lg">
//                   {selectedEvents.length > 0 ? (
//                     <ul>
//                       {selectedEvents.map((event) => (
//                         <li key={event} className="flex justify-between px-4 py-2">
//                           <span>{event}</span>
//                           <button
//                             onClick={() => handleRemoveEvent(event)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="px-4 py-2">No events selected.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Guest List */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold mb-4">Guest List</h2>
//           <form onSubmit={handleAddGuest} className="flex mb-4">
//             <input
//               type="text"
//               value={newGuest}
//               onChange={(e) => setNewGuest(e.target.value)}
//               placeholder="Enter guest name"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mr-2"
//             />
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Add Guest
//             </button>
//           </form>
//           {guestList.length > 0 ? (
//             <ul>
//               {guestList.map((guest, index) => (
//                 <li key={index} className="flex justify-between items-center border-b py-2">
//                   {guest}
//                   <button
//                     onClick={() => handleRemoveGuest(guest)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No guests added.</p>
//           )}
//         </div>

//         {/* Order Status */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Order Status</h2>
//           <p className="text-gray-600">{orderStatus}</p>
//           <button
//             onClick={() => setOrderStatus('Confirmed')}
//             className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Confirm Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const UserDashboard = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [guestList, setGuestList] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [newGuest, setNewGuest] = useState('');

  const navigate = useNavigate(); // Replaces useHistory

  const events = ['Wedding', 'Birthday Party', 'Anniversary'];

  const handleSelectEvent = (event) => {
    if (event === 'Wedding') {
      // Redirect to the wedding page when Wedding is selected
      navigate('/events/Wedding');
    } else if (!selectedEvents.includes(event)) {
      setSelectedEvents([...selectedEvents, event]);
    }

    if (event === 'Birthday Party') {
      // Redirect to the wedding page when Wedding is selected
      navigate('/events/Birthday');
    } else if (!selectedEvents.includes(event)) {
      setSelectedEvents([...selectedEvents, event]);
    }

    if (event === 'Anniversary') {
      // Redirect to the wedding page when Wedding is selected
      navigate('/events/Anniversary');
    } else if (!selectedEvents.includes(event)) {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const handleRemoveEvent = (event) => {
    setSelectedEvents(selectedEvents.filter(e => e !== event));
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
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">User Dashboard</h1>
          <div className="flex items-center">
            <div className='m-3'>
              <a className="block w-full px-4 py-2 text-left hover:bg-gray-200 text-white bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none" href="/" >Home</a>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              >
                Vendor Events
              </button>
              {isEventDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded shadow-lg">
                  {events.map((event) => (
                    <button
                      key={event}
                      onClick={() => handleSelectEvent(event)}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                    >
                      {event}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-6 relative">
              <button
                onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              >
                Cart ({selectedEvents.length})
              </button>
              {isCartDropdownOpen && (
                <div className="absolute mt-2 w-64 bg-white rounded shadow-lg">
                  {selectedEvents.length > 0 ? (
                    <ul>
                      {selectedEvents.map((event) => (
                        <li key={event} className="flex justify-between px-4 py-2">
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="px-4 py-2">No events selected.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Guest List</h2>
          <form onSubmit={handleAddGuest} className="flex mb-4">
            <input
              type="text"
              value={newGuest}
              onChange={(e) => setNewGuest(e.target.value)}
              placeholder="Enter guest name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mr-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
            <p>No guests added.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Status</h2>
          <p className="text-gray-600">{orderStatus}</p>
          <button
            onClick={() => setOrderStatus('Confirmed')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
