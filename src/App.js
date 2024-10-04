import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/user/User';
import Vendor from './components/vendor/Vendor';
import Admin from './components/admin/Admin';
import Vendordashboard from './components/vendor/Vendordashboard';
import UserDashboard from './components/user/Userdashboard';
import AdminDashboard from './components/admin/Admindashboard';
import ViewItem from './components/vendor/ViewItem';
import VendorPage from './components/vendor/VendorPage';
import EventDetailPage from './components/vendor/EvemtDetails';
import Wedding from './components/events/Wedding';
import Birthday from './components/events/Birthday';
import Anniversary from './components/events/Anniversary';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        {/* user routes */}
        <Route path="/user/*" element={<User />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        
        {/* event route */}
        <Route path="/events/Wedding" element={<Wedding />} />
        <Route path="/events/Birthday" element={<Birthday />} />   {/* Updated this line */}
        {/* <Route path="/events/Anniversary" element={<Anniversary/>} />   */}
        <Route path="/events/Anniversary" element={<Anniversary/>} /> 


        {/* vendor routes */}
        <Route path="/vendor/*" element={<Vendor />} />
        <Route path="/vendor/dashboard" element={<Vendordashboard />} />
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/event/:eventName" element={<EventDetailPage />} />

        {/* admin routes */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
