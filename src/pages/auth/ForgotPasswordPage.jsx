import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { showToast } = useApp();

  const handleReset = (e) => {
    e.preventDefault();
    setSent(true);
    showToast('Password recovery instructions sent to your email!', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#272630] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
        <div className="text-center space-y-3 mb-6">
          <Link to="/" className="inline-flex items-center justify-center text-decoration-none">
            <EduStowLogo variant="default" size="lg" showTagline={true} />
          </Link>
          <h2 className="text-xl font-bold text-[#272630] tracking-tight">
            Account Recovery
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Enter your institutional email address to receive password reset instructions.
          </p>
        </div>

        {sent ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E4F4D9] border border-[#8CC641]/50 flex items-center justify-center text-[#2d5f12] mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#8CC641]" />
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We've emailed a secure password reset link to <strong className="text-[#272630]">{email}</strong>. Please check your inbox and spam folder.
            </p>
            <div className="pt-2">
              <Link 
                to="/login"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#272630] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Login</span>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#272630] mb-1">Official School Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input 
                  type="email"
                  required
                  placeholder="admin@school.edu.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-bold text-xs shadow-sm transition-all border border-[#f5d547]"
            >
              Send Recovery Link
            </button>

            <div className="text-center pt-2">
              <Link to="/login" className="text-xs text-slate-500 hover:text-[#272630] font-medium inline-flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to sign in</span>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
