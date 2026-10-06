import React, { useState } from 'react';
import { 
  School, 
  Upload, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe2, 
  Calendar, 
  ShieldCheck, 
  Save 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SchoolProfile() {
  const { currentSchool, setCurrentSchool, showToast } = useApp();
  const [profile, setProfile] = useState({ ...currentSchool });

  const handleSave = (e) => {
    e.preventDefault();
    setCurrentSchool({ ...profile });
    showToast('School institutional profile updated successfully!', 'success');
  };

  return (
    <div className="space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#272630] tracking-tight">School Profile & Institutional Settings</h1>
          <p className="text-xs text-slate-500">Configure your institution's public branding, official contacts, and academic sessions.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Identity & Crest Branding Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-[#272630] border-b border-slate-200 pb-3">Institutional Branding</h3>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-[#FFF9C2] border-2 border-dashed border-[#FCD34D] flex flex-col items-center justify-center text-[#D97706] relative overflow-hidden group">
              <School className="w-10 h-10 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold mt-1">School Logo</span>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => showToast('Logo uploaded and optimized for report card watermarks', 'info')}
                  className="px-4 py-2 rounded-xl bg-[#272630] hover:bg-[#1E1D24] text-white font-bold text-xs"
                >
                  Upload School Crest
                </button>
                <button
                  type="button"
                  onClick={() => showToast('Default emblem restored', 'info')}
                  className="px-3 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#272630] text-xs font-semibold"
                >
                  Reset
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Recommended: 500x500 PNG with transparent background. Appears on watermarked PDF report cards and bursary receipts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Official Institution Name</label>
              <input 
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Motto / Tagline</label>
              <input 
                type="text"
                value={profile.motto}
                onChange={(e) => setProfile({...profile, motto: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Institution Code</label>
              <input 
                type="text"
                disabled
                value={profile.code}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 font-mono font-bold text-xs cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Category</label>
              <input 
                type="text"
                value={profile.category}
                onChange={(e) => setProfile({...profile, category: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Information & Physical Headquarters */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-[#272630] border-b border-slate-200 pb-3">Official Communication Channels</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Official Email</label>
              <input 
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone / WhatsApp</label>
              <input 
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Website</label>
              <input 
                type="url"
                value={profile.website}
                onChange={(e) => setProfile({...profile, website: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Headquarters Physical Address</label>
            <input 
              type="text"
              value={profile.address}
              onChange={(e) => setProfile({...profile, address: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Academic Session & Terms Configuration */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-[#272630] border-b border-slate-200 pb-3">Academic Term & Sessions</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Active Term</label>
              <input 
                type="text"
                value={profile.activeTerm}
                onChange={(e) => setProfile({...profile, activeTerm: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Default Currency</label>
              <select 
                value={profile.currency}
                onChange={(e) => setProfile({...profile, currency: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
              >
                <option value="NGN">NGN (₦) - Nigerian Naira</option>
                <option value="USD">USD ($) - US Dollar</option>
                <option value="GBP">GBP (£) - British Pound</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-extrabold text-xs shadow-sm transition-all"
          >
            <Save className="w-4 h-4 text-[#D97706]" />
            <span>Save Profile Changes</span>
          </button>
        </div>

      </form>

    </div>
  );
}
