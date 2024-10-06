import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/user/User';
import Vendor from './components/vendor/Vendor';
import Admin from './components/admin/Admin';
import UserDashboard from './components/user/Userdashboard';
import AdminDashboard from './components/admin/Admindashboard';
import ViewItem from './components/vendor/ViewItem';
import VendorPage from './components/vendor/VendorPage';
import EventDetailPage from './components/vendor/EvemtDetails';
import Wedding from './components/events/Wedding';

import DestinationWedding from './components/events/DestinationWedding';
import Navbar from './components/Navbar';
import BeachDestination from './components/events/BeachDestination';
import TraditionalDestination from './components/events/TraditionalDestination';
import './FontAwesome'; 
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Birthday from './components/events/Birthday/Birthday';
import Anniversary from './components/events/anniversary/Anniversary';
import Childrenbirthday from './components/events/Birthday/Childrenbirthday';
import Milestonebirthday from './components/events/Birthday/Milestonebirthday';
import Destinationbirthday from './components/events/Birthday/Destinationbirthday';
import VendorLogin from './components/vendor/VendorLogin';
import VendorRegister from './components/vendor/VendorRegister';
import VendorDashboard from './components/vendor/Vendordashboard';




const App = () => {
  return (
    <CartProvider>
    <WishlistProvider>
    <Router>
      <div className="min-h-screen">
        {/* Navbar Component */}
        <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />  
         
        {/* user routes */}
        <Route path="/user/*" element={<User />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />


        {/* event route */}
        <Route path="/events/Wedding" element={<Wedding />} />
        <Route path="/events/Birthday" element={<Birthday/>} />
        <Route path="/birthday/children-birthday" element={<Childrenbirthday />} />
        <Route path="/birthday/milestone-birthday" element={<Milestonebirthday />} />
        <Route path="/birthday/destination-birthday" element={<Destinationbirthday />} />

        {/* <Route path="/events/Anniversary" element={<Anniversary/>} />   */}
        <Route path="/events/Anniversary" element={<Anniversary/>} /> 

        {/* vendor routes */}
        <Route path="/vendor/*" element={<Vendor />} />
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/event/:eventName" element={<EventDetailPage />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard/>} />


        {/* admin routes */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/weddings/destination-wedding" element={<DestinationWedding />} />
        <Route path="/weddings/beach-wedding" element={<BeachDestination />} />
        <Route path="/weddings/traditional-wedding" element={<TraditionalDestination />} />

        <Route path="/cart" element={<Cart/>} />
              <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
      </div>

    </Router>
    </WishlistProvider>
    </CartProvider>
  );
};

export default App;
