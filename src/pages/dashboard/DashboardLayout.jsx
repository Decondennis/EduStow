import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  Building2, 
  Users, 
  Bell, 
  Settings, 
  ShieldCheck, 
  ExternalLink, 
  LogOut, 
  ChevronDown, 
  Search, 
  Sparkles, 
  GraduationCap, 
  Menu, 
  X,
  Plus,
  Compass,
  ArrowUpRight,
  School
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [branchDropdown, setBranchDropdown] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('All Campuses');
  const [notifDropdown, setNotifDropdown] = useState(false);
  const { currentSchool, currentUser, switchRole, notifications } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Subscription & Billing', path: '/dashboard/billing', icon: CreditCard },
    { label: 'School Profile', path: '/dashboard/profile', icon: School },
    { label: 'Branch Management', path: '/dashboard/branches', icon: Building2 },
    { label: 'User & Role Access', path: '/dashboard/users', icon: Users },
    { label: 'Notifications Center', path: '/dashboard/notifications', icon: Bell, badge: notifications.filter(n=>!n.read).length },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-[#272630] flex flex-col lg:flex-row">
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-[#272630] border-b border-[#3A3948] p-4 flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2 text-decoration-none">
          <EduStowLogo variant="dark" size="md" showTagline={false} />
        </Link>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-[#1E1D24] text-slate-200 hover:text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#272630] border-r border-[#3A3948] flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:static'
      }`}>
        <div>
          {/* Logo & School tenant branding */}
          <div className="p-6 border-b border-[#3A3948]">
            <Link to="/" className="inline-flex items-center gap-2 text-decoration-none hover:opacity-95 transition-opacity">
              <EduStowLogo variant="dark" size="lg" showTagline={true} />
            </Link>

            {/* School identifier card */}
            <div className="mt-5 p-3.5 rounded-2xl bg-[#1E1D24] border border-[#3A3948]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFE468] text-[#272630] font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {currentSchool.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">{currentSchool.name}</div>
                  <div className="text-[10px] text-[#FFE468] font-mono font-semibold">{currentSchool.code}</div>
                </div>
              </div>

              {/* Active Plan Pill */}
              <div className="mt-2.5 pt-2 border-t border-[#3A3948] flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/50 font-bold text-[10px]">
                  {currentSchool.plan} Plan
                </span>
                <span className="text-slate-400 text-[10px]">{currentSchool.daysRemaining} days left</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Institution Portal
            </div>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#FFE468] text-[#272630] font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge > 0 && (
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      isActive ? 'bg-[#272630] text-[#FFE468]' : 'bg-[#8CC641] text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom User Profile & Switcher */}
        <div className="p-4 border-t border-[#3A3948] bg-[#1E1D24]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FFE468] text-[#272630] font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                {currentUser?.name?.split(' ').map(n=>n[0]).join('') || 'AD'}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">{currentUser?.name}</div>
                <div className="text-[10px] text-[#FFE468] truncate font-medium">{currentUser?.roleLabel}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex-1 text-center py-1.5 rounded-lg bg-white/10 hover:bg-[#FFE468] hover:text-[#272630] text-slate-200 text-[11px] font-semibold transition-colors"
            >
              Public Website
            </Link>
            <button
              onClick={() => {
                switchRole('guest');
                navigate('/login');
              }}
              title="Sign Out"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-900/60 text-slate-300 hover:text-rose-200 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar inside Dashboard */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 shadow-sm">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#272630] hover:bg-slate-200 transition"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>

            {/* Branch Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setBranchDropdown(!branchDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#272630] hover:border-[#FFE468] transition"
              >
              <Building2 className="w-3.5 h-3.5 text-[#8CC641]" />
              <span>Campus: {selectedBranch}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {branchDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50">
                <button
                  onClick={() => { setSelectedBranch('All Campuses'); setBranchDropdown(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#FFF9C2] text-[#272630] font-bold"
                >
                  All Campuses (Consolidated)
                </button>
                {currentSchool.branches.map(b => (
                  <button
                    key={b.id}
                    onClick={() => { setSelectedBranch(b.name); setBranchDropdown(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-slate-50 text-slate-700"
                  >
                    {b.name} ({b.students} students)
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & Live Indicator */}
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard/billing"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF9C2] border border-[#FCD34D] text-[#854D0E] text-xs font-bold hover:bg-[#FFE468] transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{currentSchool.plan} Active</span>
            </Link>

            <Link
              to="/superadmin"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#272630] hover:bg-[#1E1D24] text-white text-xs font-semibold transition"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFE468]" />
              <span>Super Admin Oversight</span>
            </Link>
          </div>
        </header>

        {/* Render nested dashboard views */}
        <div className="p-6 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
          <Outlet />
        </div>
      </main>

    </div>
  );
}
