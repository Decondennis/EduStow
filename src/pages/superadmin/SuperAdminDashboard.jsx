import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Building2, 
  Users, 
  CreditCard, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  Sparkles, 
  Eye, 
  AlertTriangle,
  ArrowUpRight,
  Database,
  Activity,
  Layers,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function SuperAdminDashboard() {
  const { 
    platformSchools, 
    toggleSchoolStatusInSuperAdmin, 
    approveSchoolInSuperAdmin, 
    setCurrentSchool, 
    switchRole, 
    showToast 
  } = useApp();
  
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Platform calculations
  const totalStudents = platformSchools.reduce((acc, s) => acc + s.students, 0);
  const totalMonthlyRev = platformSchools
    .filter(s => s.status.includes('Active'))
    .reduce((acc, s) => acc + s.mrr, 0);

  const filteredSchools = platformSchools.filter(school => {
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && school.status.includes('Active')) ||
      (statusFilter === 'pending' && school.status.includes('Pending')) ||
      (statusFilter === 'suspended' && school.status.includes('Suspended'));
    
    const matchesSearch = school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          school.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          school.contact.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const handleImpersonate = (school) => {
    setCurrentSchool(prev => ({
      ...prev,
      name: school.name,
      plan: school.plan,
      studentCount: school.students,
      branchCount: school.branches
    }));
    switchRole('admin');
    navigate('/dashboard');
    showToast(`Impersonating tenant workspace: ${school.name}`, 'info');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#272630] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Super Admin Platform Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-decoration-none">
              <EduStowLogo variant="default" size="lg" showTagline={true} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-[#272630]">Cloud Super Admin Panel</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#272630] text-[#FFE468] text-[10px] font-extrabold tracking-wider">
                  PLATFORM OWNER
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Universal institutional governance, tenant approval, and multi-school MRR oversight.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#272630] hover:bg-slate-100 text-xs font-bold shadow-sm transition-colors"
            >
              School Tenant View
            </Link>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#272630] hover:bg-slate-100 text-xs font-bold shadow-sm transition-colors"
            >
              Marketing Website
            </Link>
          </div>
        </div>

        {/* Global Platform KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Platform Partner Schools</span>
              <Building2 className="w-4 h-4 text-[#272630]" />
            </div>
            <div className="text-3xl font-extrabold text-[#272630]">
              {platformSchools.length}
            </div>
            <span className="text-[11px] text-[#2d5f12] font-semibold bg-[#E4F4D9] px-2 py-0.5 rounded-md inline-block">180+ in production cloud</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Total Active Students</span>
              <Users className="w-4 h-4 text-[#8CC641]" />
            </div>
            <div className="text-3xl font-extrabold text-[#272630]">
              {totalStudents.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-500 font-medium">Across 24 campuses</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Monthly Recurring Rev (MRR)</span>
              <CreditCard className="w-4 h-4 text-[#8CC641]" />
            </div>
            <div className="text-3xl font-extrabold text-[#272630]">
              ₦{(totalMonthlyRev / 1000).toFixed(0)}k
            </div>
            <span className="text-[11px] text-slate-500 font-medium">Annualized ARR: ~₦{(totalMonthlyRev * 12 / 1000000).toFixed(1)}M</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Cloud Cluster Health</span>
              <Activity className="w-4 h-4 text-[#8CC641]" />
            </div>
            <div className="text-3xl font-extrabold text-[#272630]">
              99.98%
            </div>
            <span className="text-[11px] text-[#2d5f12] font-semibold bg-[#E4F4D9] px-2 py-0.5 rounded-md inline-block">All Database Shards Healthy</span>
          </div>

        </div>

        {/* Schools Directory & Approval System */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#272630]">Registered Institutions Directory</h3>
              <p className="text-xs text-slate-500 font-medium">Monitor tenant health, approve new signups, and handle suspension workflows.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input 
                  type="text"
                  placeholder="Search school name, state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none w-56"
                />
              </div>

              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-0.5 text-xs">
                {['all', 'active', 'pending', 'suspended'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setStatusFilter(tab)}
                    className={`px-3 py-1 rounded-lg capitalize font-bold transition-all ${
                      statusFilter === tab 
                        ? 'bg-[#272630] text-[#FFE468] shadow-sm' 
                        : 'text-slate-600 hover:text-[#272630]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                  <th className="pb-3">Institution & Contact</th>
                  <th className="pb-3">Subscription Tier</th>
                  <th className="pb-3">Students</th>
                  <th className="pb-3">Campuses</th>
                  <th className="pb-3">State</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Administrative Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSchools.map(school => (
                  <tr key={school.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4">
                      <div className="font-bold text-[#272630] text-sm">{school.name}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{school.contact}</div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        school.plan === 'Enterprise'
                          ? 'bg-[#272630] text-[#FFE468] border-[#272630]'
                          : school.plan === 'Professional'
                          ? 'bg-[#FFF9C2] text-[#745704] border-[#FFE468]'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {school.plan}
                      </span>
                    </td>
                    <td className="py-4 font-bold text-[#272630]">{school.students.toLocaleString()}</td>
                    <td className="py-4 text-slate-600 font-medium">{school.branches} Branch{school.branches > 1 ? 'es' : ''}</td>
                    <td className="py-4 text-slate-600 font-medium">{school.state}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        school.status.includes('Active')
                          ? 'bg-[#E4F4D9] text-[#2d5f12] border-[#8CC641]/50'
                          : school.status.includes('Pending')
                          ? 'bg-[#FFF9C2] text-[#745704] border-[#FFE468]'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                      }`}>
                        {school.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {school.status.includes('Pending') && (
                          <button
                            onClick={() => approveSchoolInSuperAdmin(school.id)}
                            className="px-2.5 py-1 rounded-lg bg-[#E4F4D9] hover:bg-[#d5edc4] border border-[#8CC641] text-[#2d5f12] text-[11px] font-bold transition-colors"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => toggleSchoolStatusInSuperAdmin(school.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                            school.status.includes('Active')
                              ? 'bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-700'
                              : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                          }`}
                        >
                          {school.status.includes('Active') ? 'Suspend' : 'Activate'}
                        </button>
                        <button
                          onClick={() => handleImpersonate(school)}
                          title="Impersonate School Admin"
                          className="px-2.5 py-1 rounded-lg bg-[#FFE468] hover:bg-[#fed938] border border-[#f5d547] text-[#272630] text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Audit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
