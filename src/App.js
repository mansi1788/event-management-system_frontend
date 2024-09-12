// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Vendor from './components/Vendor';
import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/vendor/*" element={<Vendor />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
