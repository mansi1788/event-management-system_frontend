// Vendor.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VendorNavbar from './VendorNavbar';
import VendorLogin from './VendorLogin'; // Create VendorLogin component similarly
import VendorRegister from './VendorRegister'; // Create VendorRegister component similarly
import Home from '../Home';

const Vendor = () => {
  return (
    <div>
      <VendorNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<VendorLogin />} />
        <Route path="/register" element={<VendorRegister />} />
      </Routes>
    </div>
  );
};

export default Vendor;
