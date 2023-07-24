import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderH from './pages/HeaderH';
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
import Footer from './pages/Footer';


import UserAdmin from './components/UserAdmin';
import NewsletterAdmin from './components/NewsletterAdmin';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AdminRap from './components/AdminRap';
import AdminDashboard from './components/AdminDashboard';
import UpdatePayment from './components/UpdatePayment';
import UserPaymentForm from './components/UserPaymentForm';
import SideBar from './components/SideBar'; 
import AdminTransaction from './components/AdminTransaction';
import UserTransactionHistory from './components/UserTransactionHistory';

function LayoutWithHeaderFooter({ children }) {
  return (
    <>
      <HeaderH />
      {children}
      <Footer />
    </>
  );
}

function LayoutWithAdminRap({ children }) {
  return (
    <>
      <AdminRap />
      {children}
    </>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWithHeaderFooter><Home /></LayoutWithHeaderFooter>} />
          <Route path="/About" element={<LayoutWithHeaderFooter><About /></LayoutWithHeaderFooter>} />
          <Route path="/Features" element={<LayoutWithHeaderFooter><Features /></LayoutWithHeaderFooter>} />
          <Route path="/User" element={<LayoutWithHeaderFooter><User /></LayoutWithHeaderFooter>} />
          <Route path="/Pricing" element={<LayoutWithHeaderFooter><Pricing /></LayoutWithHeaderFooter>} />
          <Route path="/TechClub" element={<LayoutWithHeaderFooter><TechClub /></LayoutWithHeaderFooter>} />
          <Route path="/Contact" element={<LayoutWithHeaderFooter><Contact /></LayoutWithHeaderFooter>} />
          <Route path="/EditContact/:id" element={<LayoutWithHeaderFooter><EditContact /></LayoutWithHeaderFooter>} />
          <Route path="/EditUser/:id" element={<LayoutWithHeaderFooter><EditUser /></LayoutWithHeaderFooter>} />
          <Route path="/Login" element={<LayoutWithHeaderFooter><Login /></LayoutWithHeaderFooter>} />
          <Route path="/ForgotPassword" element={<LayoutWithHeaderFooter><ForgotPassword /></LayoutWithHeaderFooter>} />
          <Route path="/Missing" element={<LayoutWithHeaderFooter><Missing /></LayoutWithHeaderFooter>} />

          <Route path="/UserAdmin" element={<UserAdmin />} />
          <Route path="/NewsletterAdmin" element={<NewsletterAdmin />} />
          <Route path="/UpdatePayment" element={<UpdatePayment />} />
          <Route path="/UserPaymentForm" element={<UserPaymentForm />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/AdminRap" element={<AdminRap />} />
          <Route path="/AdminTransaction" element={<AdminTransaction />} />
          <Route path="/UserTransactionHistory" element={<UserTransactionHistory />} />

          <Route path="/AdminDashboard/*" element={<AdminDashboard />} />
          {/* <Route path="/AdminDashboard/*" element={<LayoutWithAdminRap><AdminDashboard /></LayoutWithAdminRap>} /> */}
        </Routes>
      </Router>
    </div>
  );
}
