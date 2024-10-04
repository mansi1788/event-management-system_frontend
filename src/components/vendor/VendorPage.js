import React from 'react';
import { Link } from 'react-router-dom';

const VendorPage = () => {
  const events = [
    {
      name: 'Wedding',
      description: 'Make your wedding a grand celebration with our expert vendors.',
      imageUrl: 'https://example.com/wedding.jpg',
    },
    {
      name: 'Birthday Party',
      description: 'Celebrate your birthday with joy and amazing decor.',
      imageUrl: 'https://example.com/birthday.jpg',
    },
    {
      name: 'Anniversary',
      description: 'A beautiful anniversary celebration for your special day.',
      imageUrl: 'https://example.com/anniversary.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Vendor Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Link key={index} to={`/event/${event.name.toLowerCase()}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VendorPage;
