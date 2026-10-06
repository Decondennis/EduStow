import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Current logged in user (can switch between roles easily for presentation & testing)
  const [currentUser, setCurrentUser] = useState({
    id: 'usr_001',
    name: 'Dr. Dennis Okafor',
    email: 'dennis@greenwoodhall.edu.ng',
    role: 'admin', // 'admin' | 'superadmin' | 'staff' | 'guest'
    roleLabel: 'School Super Administrator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    schoolId: 'sch_9021',
    schoolName: 'Greenwood Hall International'
  });

  // Active School Tenant Information
  const [currentSchool, setCurrentSchool] = useState({
    id: 'sch_9021',
    name: 'Greenwood Hall International Academy',
    motto: 'Knowledge, Character & Global Leadership',
    code: 'GHI-9021-LAG',
    category: 'K-12 & Cambridge College',
    foundedYear: 2012,
    email: 'admissions@greenwoodhall.edu.ng',
    phone: '+234 803 892 4019',
    address: 'Plot 14, Admirals Way, Lekki Phase 1, Lagos, Nigeria',
    website: 'https://greenwoodhall.edu.ng',
    logo: '/edustow-mark.png',
    currency: 'NGN',
    symbol: '₦',
    plan: 'Professional',
    planTier: 'pro',
    billingCycle: 'Annual',
    status: 'Active',
    subscriptionExpiry: '2027-09-30',
    daysRemaining: 360,
    studentCount: 1420,
    studentLimit: 2500,
    staffCount: 88,
    branchCount: 3,
    activeTerm: 'First Term 2026/2027',
    termFeeCollected: 84200000,
    termFeeExpected: 96000000,
    attendanceRateToday: 96.8,
    branches: [
      { id: 'b1', name: 'Main Campus (Ikoyi Heights)', code: 'IKY-01', type: 'Secondary & Cambridge A-Levels', students: 820, staff: 48, status: 'Active', principal: 'Dr. Dennis Okafor', address: '12 Bourdillon Rd, Ikoyi' },
      { id: 'b2', name: 'Lekki Phase 1 Annex', code: 'LEK-02', type: 'Primary & Junior Secondary', students: 430, staff: 26, status: 'Active', principal: 'Mrs. Chidinma Eze', address: 'Plot 14 Admirals Way, Lekki' },
      { id: 'b3', name: 'Victoria Island Preschool', code: 'VI-03', type: 'Early Years & Kindergarten', students: 170, staff: 14, status: 'Active', principal: 'Mr. Tunde Lawal', address: '8 Kofo Abayomi St, VI' }
    ],
    invoices: [
      { id: 'INV-2026-009', date: '2026-09-15', dueDate: '2026-09-25', amount: 85000, plan: 'Professional (Annual Plan)', status: 'Paid', method: 'Flutterwave Direct Card (•••• 4092)', txRef: 'FLW-EDUSTOW-93821034', downloadName: 'Receipt-INV-2026-009.pdf' },
      { id: 'INV-2025-004', date: '2025-09-15', dueDate: '2025-09-25', amount: 85000, plan: 'Professional (Annual Plan)', status: 'Paid', method: 'Flutterwave Bank Transfer', txRef: 'FLW-EDUSTOW-78419203', downloadName: 'Receipt-INV-2025-004.pdf' },
      { id: 'INV-2024-001', date: '2024-09-15', dueDate: '2024-09-25', amount: 40000, plan: 'Starter Setup Package', status: 'Paid', method: 'Mastercard Debit', txRef: 'FLW-EDUSTOW-10293847', downloadName: 'Receipt-INV-2024-001.pdf' }
    ],
    users: [
      { id: 'u1', name: 'Dr. Dennis Okafor', email: 'dennis@greenwoodhall.edu.ng', role: 'School Admin', permissions: ['Full Access', 'Billing', 'User Mgmt', 'Branch Mgmt'], branch: 'All Branches', status: 'Active', lastActive: 'Just now' },
      { id: 'u2', name: 'Olumide Adeleke', email: 'bursar@greenwoodhall.edu.ng', role: 'Bursar & Finance Lead', permissions: ['Billing', 'Fee Invoicing', 'Payroll'], branch: 'Main Campus', status: 'Active', lastActive: '12 mins ago' },
      { id: 'u3', name: 'Sarah Alabi', email: 's.alabi@greenwoodhall.edu.ng', role: 'Head Registrar', permissions: ['Admissions', 'Student Records'], branch: 'Lekki Phase 1', status: 'Active', lastActive: '1 hour ago' },
      { id: 'u4', name: 'Patrick Bassey', email: 'p.bassey@greenwoodhall.edu.ng', role: 'Academic Director', permissions: ['Exams', 'Timetable', 'Grading'], branch: 'All Branches', status: 'Active', lastActive: 'Yesterday' },
      { id: 'u5', name: 'Zainab Bello', email: 'z.bello@greenwoodhall.edu.ng', role: 'Branch Coordinator', permissions: ['Daily Attendance', 'Parent Messaging'], branch: 'VI Preschool', status: 'Active', lastActive: '3 days ago' }
    ]
  });

  // Super Admin Platform Oversight Directory
  const [platformSchools, setPlatformSchools] = useState([
    { id: 'sch_9021', name: 'Greenwood Hall International', plan: 'Professional', students: 1420, branches: 3, state: 'Lagos', status: 'Active', mrr: 85000, renewalDate: '2027-09-30', contact: 'Dr. Dennis Okafor' },
    { id: 'sch_9022', name: 'St. Saviour’s British College', plan: 'Enterprise', students: 2890, branches: 4, state: 'Lagos', status: 'Active', mrr: 195000, renewalDate: '2027-01-14', contact: 'Hon. Alistair Finch' },
    { id: 'sch_9023', name: 'Corona Memorial Schools', plan: 'Enterprise', students: 4100, branches: 6, state: 'Ogun/Lagos', status: 'Active', mrr: 310000, renewalDate: '2027-04-01', contact: 'Lady Folashade Balogun' },
    { id: 'sch_9024', name: 'Hillcrest Horizon Academy', plan: 'Professional', students: 950, branches: 2, state: 'Abuja FCT', status: 'Active', mrr: 85000, renewalDate: '2026-11-20', contact: 'Engr. Haruna Danladi' },
    { id: 'sch_9025', name: 'Bright Stars Foundation School', plan: 'Starter', students: 380, branches: 1, state: 'Rivers', status: 'Active', mrr: 40000, renewalDate: '2026-12-05', contact: 'Pastor Tamuno Briggs' },
    { id: 'sch_9026', name: 'Crown Heights International', plan: 'Professional', students: 1100, branches: 2, state: 'Oyo', status: 'Pending Review', mrr: 85000, renewalDate: '2026-10-10', contact: 'Prof. Wole Oladipo' },
    { id: 'sch_9027', name: 'Silverstone High School', plan: 'Starter', students: 240, branches: 1, state: 'Edo', status: 'Suspended (Overdue)', mrr: 40000, renewalDate: '2026-08-30', contact: 'Mrs. Osas Igbinedion' }
  ]);

  // Notifications State
  const [notifications, setNotifications] = useState([
    { id: 'nt_1', title: 'Annual Subscription Active', message: 'Your Professional Plan is active with 360 days remaining.', time: '10 mins ago', type: 'success', read: false },
    { id: 'nt_2', title: 'New Student Batch Enrolled', message: '54 new students registered in Ikoyi Campus for 2026/2027.', time: '2 hours ago', type: 'info', read: false },
    { id: 'nt_3', title: 'Term Fee Invoicing Triggered', message: 'Bursary sent automated fee schedules to 1,320 parents.', time: '1 day ago', type: 'info', read: true },
    { id: 'nt_4', title: 'SMS Gateway Balance', message: '12,450 SMS units remaining for WhatsApp and SMS notifications.', time: '2 days ago', type: 'warning', read: true }
  ]);

  // Global Toast Message System
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Helper actions
  const switchRole = (newRole) => {
    if (newRole === 'superadmin') {
      setCurrentUser({
        id: 'sa_001',
        name: 'Alexander Vane',
        email: 'alexander@edustow.com',
        role: 'superadmin',
        roleLabel: 'EduStow Platform Executive Owner',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        schoolId: 'global',
        schoolName: 'EduStow Global Cloud Infrastructure'
      });
      showToast('Switched to EduStow Super Admin Panel', 'info');
    } else if (newRole === 'admin') {
      setCurrentUser({
        id: 'usr_001',
        name: 'Dr. Dennis Okafor',
        email: 'dennis@greenwoodhall.edu.ng',
        role: 'admin',
        roleLabel: 'School Super Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        schoolId: 'sch_9021',
        schoolName: 'Greenwood Hall International Academy'
      });
      showToast('Switched to School Admin Tenant Dashboard', 'info');
    } else if (newRole === 'staff') {
      setCurrentUser({
        id: 'usr_002',
        name: 'Olumide Adeleke',
        email: 'bursar@greenwoodhall.edu.ng',
        role: 'staff',
        roleLabel: 'Bursar & Finance Lead',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        schoolId: 'sch_9021',
        schoolName: 'Greenwood Hall International Academy'
      });
      showToast('Switched to Staff / Bursar Role View', 'info');
    } else {
      setCurrentUser(null);
      showToast('Signed out to Public Guest View', 'info');
    }
  };

  const updateSchoolPlan = (planName, billingCycle = 'Annual', amount = 85000) => {
    setCurrentSchool(prev => {
      const newInvoice = {
        id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
        date: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
        amount: amount,
        plan: `${planName} (${billingCycle} Plan)`,
        status: 'Paid',
        method: 'Flutterwave / Stripe Instant Checkout',
        txRef: `FLW-EDUSTOW-${Math.floor(10000000 + Math.random() * 90000000)}`,
        downloadName: `Receipt-${planName}.pdf`
      };

      return {
        ...prev,
        plan: planName,
        billingCycle: billingCycle,
        status: 'Active',
        subscriptionExpiry: '2027-10-05',
        daysRemaining: 365,
        invoices: [newInvoice, ...prev.invoices]
      };
    });
    showToast(`Successfully upgraded to ${planName} Plan!`, 'success');
  };

  const addBranch = (branchData) => {
    setCurrentSchool(prev => ({
      ...prev,
      branchCount: prev.branchCount + 1,
      branches: [
        ...prev.branches,
        {
          id: `b_${Date.now()}`,
          name: branchData.name,
          code: branchData.code || `BR-${Math.floor(10 + Math.random() * 90)}`,
          type: branchData.type || 'Satellite Campus',
          students: Number(branchData.students) || 0,
          staff: Number(branchData.staff) || 0,
          status: 'Active',
          principal: branchData.principal || 'Pending Assignment',
          address: branchData.address || 'Address provided during setup'
        }
      ]
    }));
    showToast(`Branch "${branchData.name}" added successfully!`, 'success');
  };

  const addUser = (userData) => {
    setCurrentSchool(prev => ({
      ...prev,
      users: [
        ...prev.users,
        {
          id: `u_${Date.now()}`,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          permissions: userData.permissions || ['Standard Access'],
          branch: userData.branch || 'All Branches',
          status: 'Active',
          lastActive: 'Just invited'
        }
      ]
    }));
    showToast(`New user "${userData.name}" added and invitation sent!`, 'success');
  };

  const toggleSchoolStatusInSuperAdmin = (schoolId) => {
    setPlatformSchools(prev => prev.map(s => {
      if (s.id === schoolId) {
        const nextStatus = s.status.includes('Active') ? 'Suspended (Manual)' : 'Active';
        return { ...s, status: nextStatus };
      }
      return s;
    }));
    showToast('School subscription status updated by Super Admin', 'info');
  };

  const approveSchoolInSuperAdmin = (schoolId) => {
    setPlatformSchools(prev => prev.map(s => {
      if (s.id === schoolId) {
        return { ...s, status: 'Active' };
      }
      return s;
    }));
    showToast('School approved and activated on cloud cluster!', 'success');
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      setCurrentUser,
      currentSchool,
      setCurrentSchool,
      platformSchools,
      setPlatformSchools,
      notifications,
      setNotifications,
      toast,
      showToast,
      switchRole,
      updateSchoolPlan,
      addBranch,
      addUser,
      toggleSchoolStatusInSuperAdmin,
      approveSchoolInSuperAdmin
    }}>
      {children}
      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
          <div className={`px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border text-sm font-medium ${
            toast.type === 'success' 
              ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200' 
              : toast.type === 'error'
              ? 'bg-rose-950/90 border-rose-500/40 text-rose-200'
              : 'bg-brand-950/90 border-cyan-500/40 text-cyan-200'
          }`}>
            <span className="w-2 h-2 rounded-full animate-ping bg-current" />
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
