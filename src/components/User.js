// User.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Home from './Home';

const User = () => {
  return (
    <div>
      <UserNavbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </div>
  );
};

export default User;
