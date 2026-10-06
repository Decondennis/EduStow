import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Building2,
  KeyRound,
  UserCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function LoginPage() {
  const [role, setRole] = useState('admin'); // 'admin' | 'staff' | 'superadmin'
  const [email, setEmail] = useState('dennis@greenwoodhall.edu.ng');
  const [password, setPassword] = useState('••••••••••••');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [show2FA, setShow2FA] = useState(false);
  const { switchRole, showToast } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!show2FA) {
      setShow2FA(true);
      showToast('OTP sent to registered administrator phone: 4920', 'info');
      setTwoFactorCode('4920');
      return;
    }

    // Login complete
    switchRole(role);
    if (role === 'superadmin') {
      navigate('/superadmin');
    } else {
      navigate('/dashboard');
    }
  };

  const handleFastDemoSelect = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'admin') {
      setEmail('dennis@greenwoodhall.edu.ng');
    } else if (selectedRole === 'superadmin') {
      setEmail('alexander@edustow.com');
    } else {
      setEmail('bursar@greenwoodhall.edu.ng');
    }
    setShow2FA(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#272630] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-md w-full space-y-8 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative z-10">
        
        {/* Brand identity */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center justify-center text-decoration-none">
            <EduStowLogo variant="default" size="lg" showTagline={true} />
          </Link>
          <h2 className="text-xl font-bold text-[#272630] tracking-tight">
            Sign in to Your Institution
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Access school operations, bursary records, attendance & student rosters
          </p>
        </div>

        {/* Quick Role Selection Tabs for fast evaluation */}
        <div className="p-1 rounded-xl bg-slate-100 border border-slate-200 flex text-xs">
          <button
            type="button"
            onClick={() => handleFastDemoSelect('admin')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              role === 'admin' 
                ? 'bg-[#FFE468] text-[#272630] shadow-sm font-bold' 
                : 'text-slate-600 hover:text-[#272630]'
            }`}
          >
            School Admin
          </button>
          <button
            type="button"
            onClick={() => handleFastDemoSelect('staff')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              role === 'staff' 
                ? 'bg-[#FFE468] text-[#272630] shadow-sm font-bold' 
                : 'text-slate-600 hover:text-[#272630]'
            }`}
          >
            Staff / Bursar
          </button>
          <button
            type="button"
            onClick={() => handleFastDemoSelect('superadmin')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              role === 'superadmin' 
                ? 'bg-[#272630] text-white shadow-sm font-bold' 
                : 'text-slate-600 hover:text-[#272630]'
            }`}
          >
            Super Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#272630] mb-1">Official Account Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-[#272630]">Password</label>
              <Link to="/forgot-password" className="text-[11px] text-[#272630] font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
              />
            </div>
          </div>

          {show2FA && (
            <div className="p-4 rounded-xl bg-[#FFF9C2] border border-[#FFE468] space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-[#745704] text-xs font-bold">
                <KeyRound className="w-4 h-4" />
                <span>Two-Factor Authentication OTP</span>
              </div>
              <input 
                type="text"
                placeholder="Enter 4-digit code (e.g. 4920)"
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#FFE468] text-[#272630] text-center font-mono text-sm tracking-widest font-bold focus:outline-none shadow-sm"
              />
              <span className="text-[10px] text-[#745704] block text-center font-semibold">Simulated code pre-filled for rapid evaluation</span>
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 border border-[#f5d547]"
          >
            <span>{show2FA ? 'Verify 2FA & Access Workspace' : 'Continue to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
          <span>New school not yet registered? </span>
          <Link to="/register" className="text-[#272630] font-bold hover:underline">
            Register Institution
          </Link>
        </div>

      </div>
    </div>
  );
}
