import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layouts
import WebsiteLayout from './components/layout/WebsiteLayout';
import DashboardLayout from './pages/dashboard/DashboardLayout';

// Website Pages
import LandingPage from './pages/website/LandingPage';
import FeaturesPage from './pages/website/FeaturesPage';
import PricingPage from './pages/website/PricingPage';
import TechClubPage from './pages/website/TechClubPage';
import AboutPage from './pages/website/AboutPage';
import ContactPage from './pages/website/ContactPage';

// Onboarding & Auth
import SchoolOnboarding from './pages/onboarding/SchoolOnboarding';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Dashboard Views
import OverviewDashboard from './pages/dashboard/OverviewDashboard';
import SubscriptionBilling from './pages/dashboard/SubscriptionBilling';
import SchoolProfile from './pages/dashboard/SchoolProfile';
import BranchManagement from './pages/dashboard/BranchManagement';
import UserManagement from './pages/dashboard/UserManagement';
import NotificationsCenter from './pages/dashboard/NotificationsCenter';

// Super Admin
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard';

import UserJoinPage from './pages/website/UserJoinPage';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Marketing Website */}
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/Features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/Pricing" element={<PricingPage />} />
            <Route path="/tech-club" element={<TechClubPage />} />
            <Route path="/TechClub" element={<TechClubPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/user" element={<UserJoinPage />} />
            <Route path="/User" element={<UserJoinPage />} />
            <Route path="/solutions/k12" element={<FeaturesPage />} />
            <Route path="/solutions/multi-branch" element={<FeaturesPage />} />
          </Route>

          {/* School Onboarding & Registration */}
          <Route path="/register" element={<SchoolOnboarding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* School Admin SaaS Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<OverviewDashboard />} />
            <Route path="billing" element={<SubscriptionBilling />} />
            <Route path="profile" element={<SchoolProfile />} />
            <Route path="branches" element={<BranchManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="notifications" element={<NotificationsCenter />} />
          </Route>

          {/* Platform Super Admin Oversight */}
          <Route path="/superadmin" element={<SuperAdminDashboard />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
