import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const { eventName } = useParams();

  const eventDetails = {
    wedding: {
      name: 'Wedding',
      description: 'Your wedding deserves the best. Our vendors provide exquisite decor, food, and entertainment.',
      images: ['https://example.com/wedding1.jpg', 'https://example.com/wedding2.jpg'],
    },
    birthday: {
      name: 'Birthday Party',
      description: 'Make your birthday party unforgettable with our top-notch services.',
      images: ['https://example.com/birthday1.jpg', 'https://example.com/birthday2.jpg'],
    },
    anniversary: {
      name: 'Anniversary',
      description: 'Celebrate your anniversary in style with elegant arrangements.',
      images: ['https://example.com/anniversary1.jpg', 'https://example.com/anniversary2.jpg'],
    },
  };

  const event = eventDetails[eventName.toLowerCase()];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">{event.name} Details</h1>
      <p className="text-lg mb-6 text-center">{event.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((image, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={`${event.name} ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetailPage;
