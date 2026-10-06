import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  CreditCard, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  ShieldCheck,
  Calendar,
  FileText,
  School
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function OverviewDashboard() {
  const { currentSchool, notifications } = useApp();

  return (
    <div className="space-y-8">
      
      {/* Top Banner: Formal Yellow Academic SaaS Hero */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFE468] border-2 border-[#FCD34D] text-[#272630] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8CC641] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-wider text-[#272630]">Active SaaS Subscription</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#272630] text-[#FFE468] text-[10px] font-extrabold">
              {currentSchool.plan} Tier
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#272630] tracking-tight">
            {currentSchool.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#272630]/80 font-medium max-w-xl leading-relaxed">
            Your institutional subscription is active with <strong className="text-[#272630] font-bold">{currentSchool.daysRemaining} days remaining</strong> (Renews on {currentSchool.subscriptionExpiry}). 3 Campuses synchronized.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/billing"
            className="px-5 py-2.5 rounded-xl bg-[#272630] hover:bg-[#1E1D24] text-white font-bold text-xs shadow-sm transition-all"
          >
            Manage Billing & Plan
          </Link>
          <Link
            to="/dashboard/branches"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#272630] font-bold text-xs border border-slate-200 shadow-sm transition-colors"
          >
            Add Campus
          </Link>
        </div>
      </div>

      {/* Primary KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Metric 1: Students */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-[#FFE468] transition">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Enrolled Students</span>
            <div className="w-8 h-8 rounded-lg bg-[#FFF9C2] flex items-center justify-center text-[#D97706]">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#272630]">
            {currentSchool.studentCount.toLocaleString()}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-500 font-medium">
              <span>Seat Allocation</span>
              <span>{currentSchool.studentCount} / {currentSchool.studentLimit}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div 
                className="h-full bg-[#FFE468] rounded-full" 
                style={{ width: `${(currentSchool.studentCount / currentSchool.studentLimit) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Metric 2: Campuses */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-[#8CC641] transition">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Operational Branches</span>
            <div className="w-8 h-8 rounded-lg bg-[#E4F4D9] flex items-center justify-center text-[#588820]">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#272630]">
            {currentSchool.branchCount}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span className="text-[#588820] font-bold">100% active</span> across state campuses
          </div>
        </div>

        {/* Metric 3: Tuition Collection */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-[#8CC641] transition">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Term Tuition Collection</span>
            <div className="w-8 h-8 rounded-lg bg-[#E4F4D9] flex items-center justify-center text-[#588820]">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#272630]">
            ₦{(currentSchool.termFeeCollected / 1000000).toFixed(1)}M
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span>Target: ₦{(currentSchool.termFeeExpected / 1000000).toFixed(1)}M (87.7% collected)</span>
          </div>
        </div>

        {/* Metric 4: Daily Attendance */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-[#FFE468] transition">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Today's Attendance</span>
            <div className="w-8 h-8 rounded-lg bg-[#FFF9C2] flex items-center justify-center text-[#D97706]">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#272630]">
            {currentSchool.attendanceRateToday}%
          </div>
          <div className="text-xs text-[#588820] flex items-center gap-1 font-bold">
            <span>+1.2% higher vs last week</span>
          </div>
        </div>

      </div>

      {/* Two Column Layout: Branches Snapshot & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Campus Distribution */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-[#272630]">Campus & Branch Operations</h3>
                <span className="text-xs text-slate-500">Real-time enrollment distribution</span>
              </div>
              <Link to="/dashboard/branches" className="text-xs text-[#272630] font-bold hover:text-[#D97706] hover:underline">
                Manage Campuses →
              </Link>
            </div>

            <div className="space-y-4">
              {currentSchool.branches.map(b => (
                <div key={b.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4 hover:border-slate-300 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#272630] text-[#FFE468] flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
                      {b.code}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#272630]">{b.name}</h4>
                      <span className="text-xs text-slate-500">{b.type} • {b.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-[#272630]">{b.students} Students</div>
                    <span className="text-[11px] text-slate-500 font-medium">{b.staff} Staff Members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Shortcuts */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-[#272630] mb-4">Institutional Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link 
                to="/dashboard/users" 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFE468] hover:bg-[#FFF9C2]/30 text-center transition-all group"
              >
                <Users className="w-5 h-5 text-[#272630] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#272630] block">Invite Staff</span>
              </Link>

              <Link 
                to="/dashboard/billing" 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFE468] hover:bg-[#FFF9C2]/30 text-center transition-all group"
              >
                <CreditCard className="w-5 h-5 text-[#8CC641] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#272630] block">Renew Plan</span>
              </Link>

              <Link 
                to="/dashboard/branches" 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFE468] hover:bg-[#FFF9C2]/30 text-center transition-all group"
              >
                <Building2 className="w-5 h-5 text-[#D97706] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#272630] block">Add Branch</span>
              </Link>

              <Link 
                to="/dashboard/profile" 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFE468] hover:bg-[#FFF9C2]/30 text-center transition-all group"
              >
                <School className="w-5 h-5 text-[#272630] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-[#272630] block">School Profile</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Activity Stream & System Alerts */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#272630]">System & Audit Alerts</h3>
              <span className="text-[11px] text-[#272630] font-bold bg-[#FFF9C2] px-2 py-0.5 rounded-full">{notifications.length} updates</span>
            </div>

            <div className="space-y-3">
              {notifications.map(n => (
                <div key={n.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-[#272630] font-bold">{n.title}</strong>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{n.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Health Card */}
          <div className="p-6 rounded-3xl bg-[#272630] text-white shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFE468]" />
              <h4 className="text-xs font-bold text-white">Enterprise SLA Guarantee</h4>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Your tenant cluster is operating on dedicated encrypted nodes with automated hourly cold storage snapshots.
            </p>
            <div className="pt-1 text-[11px] text-[#8CC641] font-mono font-semibold">
              Database Uptime: 99.98% • Latency: 24ms
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
