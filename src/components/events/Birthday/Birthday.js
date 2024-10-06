import React from 'react';
import { useNavigate } from 'react-router-dom';

const Birthday = () => {
  const navigate = useNavigate();

  const handleDetailRedirect = (type) => {
    navigate(`/birthday/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
          <div className="flex items-center">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 mr-6">Home</a>
            <button
              onClick={() => navigate('/vendor-events')}
              className="text-gray-700 hover:text-pink-600 transition duration-300"
            >
              Vendor Events
            </button>
          </div>
        </div>
      </nav>
      
      {/* Content Section */}
      <section className="relative pt-24 text-center text-white">
        <div className="container mx-auto p-8">
          <h2 className="text-5xl font-bold mb-4">Birthday Event</h2>
          <p className="text-lg mb-8">Explore the beauty and elegance of our Birthday packages.</p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <img src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 1" className="rounded-lg w-96 h-80" />
            <img src="https://images.pexels.com/photos/7180612/pexels-photo-7180612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 2" className="rounded-lg w-96 h-80" />
            <img src="https://images.pexels.com/photos/20016143/pexels-photo-20016143/free-photo-of-white-birthday-cake.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Wedding 3" className="rounded-lg w-96 h-80" />
            <img src="https://media.istockphoto.com/id/1405876768/photo/decoration-for-a-childrens-party.webp?s=1024x1024&w=is&k=20&c=HS-5InVtFqhz-lFI0uCmVkXR9ECIA3hpyl-3eJEY5gs=" alt="Wedding 4" className="rounded-lg w-96 h-80" />
          </div>

          {/* Wedding Types Section */}
          <h2 className="text-3xl font-bold mt-12 mb-6">Types of Birthday</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Destination Wedding */}
            <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://frillx.com/cdn/shop/products/first-birthday-pastel-balloon-decoration-pack-of-64-pcs-diy-kit-kids-birthday-137167_360x.jpg?v=1646290475)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">Children’s Birthday Party</h3>
                <p className="text-sm mb-4">
                     A fun-filled day with themed games, activities, and entertainment designed for kids.
                </p>
                <button onClick={() => handleDetailRedirect('children-birthday')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  More Details
                </button>
              </div>
            </div>

            {/* Beach Wedding */}
            <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://www.emrgmedia.com/wp-content/uploads/2023/06/pexels-nataliya-vaitkevich-7859956.jpg.webp)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">Milestone Birthday Party</h3>
                <p className="text-sm mb-4"> 
                A grand celebration marking a significant life event, like turning 30, 50, or beyond.</p>
                <button onClick={() => handleDetailRedirect('milestone-birthday')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  More Details
                </button>
              </div>
            </div>

            {/* Traditional Wedding */}
            <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://blog.venuelook.com/wp-content/uploads/2020/09/Next-Camping-Destination.webp)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">Destination Birthday Party</h3>
                <p className="text-sm mb-4">
It is a celebration at a travel location, combining adventure and relaxation for a memorable getaway.</p>
                <button onClick={() => handleDetailRedirect('destination-birthday')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Birthday;
