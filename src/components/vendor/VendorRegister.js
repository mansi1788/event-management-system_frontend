import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      await axios.post('http://localhost:8080/api/v1/auth/register', formData);
      setSuccessMessage('Registration successful! You can log in now.');
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
      });
    } catch (error) {
      console.error('Error registering:', error);
      setError('Registration failed. Please check your inputs and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Vendor Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
           <input
            type="text"
            name="role"
            value="2"
            onChange={handleChange}
            placeholder="role"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            readOnly
          />
          <button
            type="submit"
            className={`bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="mt-4">
          Already have an account? <a href="/vendor/login" className="text-pink-600 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
