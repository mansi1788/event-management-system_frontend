// Admin.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminLogin from './AdminLogin'; // Create AdminLogin component similarly
import AdminRegister from './AdminRegister'; // Create AdminRegister component similarly
import Home from '../Home';

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />
      </Routes>
    </div>
  );
};

export default Admin;
