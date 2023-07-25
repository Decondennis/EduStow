import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderH from './pages/HeaderH';
import Footer from './pages/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EditContact from './pages/EditContact';
import EditUser from './pages/EditUser';
import Features from './pages/Features';
import User from './pages/User';
import Pricing from './pages/Pricing';
import TechClub from './pages/TechClub';
import Missing from './pages/Missing';

import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  return (
    <div>
      <Router>
        <HeaderH /> {/* Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/User" element={<User />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/TechClub" element={<TechClub />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EditContact/:id" element={<EditContact />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Missing" element={<Missing />} />
        </Routes>
        <Footer /> {/* Footer component */}
      </Router>
    </div>
  );
}
