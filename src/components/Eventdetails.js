import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventName } = useParams();

  const eventDetails = {
    wedding: {
      name: 'Wedding',
      description: 'Make your wedding a grand celebration with elegant arrangements, catering, and entertainment.',
      packages: [
        {
          name: 'Basic Package',
          description: 'Catering for 100 guests, decoration, and basic entertainment.',
          price: '$5000',
        },
        {
          name: 'Premium Package',
          description: 'Catering for 200 guests, premium decoration, entertainment, and photographer.',
          price: '$10000',
        },
      ],
      images: [
        'https://example.com/wedding1.jpg',
        'https://example.com/wedding2.jpg',
        'https://example.com/wedding3.jpg',
      ],
    },
    // Add other events like Birthday, Anniversary here.
  };

  const event = eventDetails[eventName.toLowerCase()];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{event.name} Event Details</h1>
      <p className="text-lg mb-6 text-center">{event.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {event.images.map((image, index) => (
          <div key={index} className="rounded-lg shadow-lg">
            <img src={image} alt={`${event.name} ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Packages</h2>
        {event.packages.map((pkg, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p className="text-lg font-bold">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
