import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  KeyRound, 
  CheckCircle2, 
  Mail, 
  Trash2, 
  X,
  Lock,
  Building2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function UserManagement() {
  const { currentSchool, addUser, showToast } = useApp();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Teacher / Faculty',
    branch: 'All Branches',
    permissions: ['Attendance', 'Grading']
  });

  const rolesList = [
    { title: 'School Admin', desc: 'Full institutional authority, billing, users & branch configuration' },
    { title: 'Bursar & Finance Lead', desc: 'Tuition collection, bank reconciliation, fee schedules & payroll' },
    { title: 'Head Registrar', desc: 'Admissions, student records, transfers & documentation' },
    { title: 'Academic Director', desc: 'Examinations, continuous assessments, timetable & grade approval' },
    { title: 'Teacher / Faculty', desc: 'Daily attendance, grade submission & parent messaging' }
  ];

  const handleAddUser = (e) => {
    e.preventDefault();
    addUser(newUser);
    setShowInviteModal(false);
    setNewUser({
      name: '',
      email: '',
      role: 'Teacher / Faculty',
      branch: 'All Branches',
      permissions: ['Attendance', 'Grading']
    });
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#272630] tracking-tight">User Administration & RBAC Roles</h1>
          <p className="text-xs text-slate-500">Manage administrator accounts, bursary personnel, teachers, and security permissions.</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
        >
          <UserPlus className="w-4 h-4 text-[#D97706]" />
          <span>Invite School Staff</span>
        </button>
      </div>

      {/* Users Directory Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#272630]">Active Authorized Users</h3>
          <span className="text-xs text-[#854D0E] font-bold bg-[#FFF9C2] px-2.5 py-0.5 rounded-full">{currentSchool.users.length} Team Members</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="pb-3">Name & Email</th>
                <th className="pb-3">Assigned Role</th>
                <th className="pb-3">Assigned Campus</th>
                <th className="pb-3">Permissions Scope</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentSchool.users.map(u => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#272630] text-[#FFE468] flex items-center justify-center font-extrabold text-xs shadow-sm">
                        {u.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[#272630] font-bold">{u.name}</div>
                        <div className="text-[11px] text-slate-500">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-slate-700">{u.role}</td>
                  <td className="py-4 text-slate-600">{u.branch}</td>
                  <td className="py-4">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(u.permissions) ? u.permissions.map((p, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-medium">
                          {p}
                        </span>
                      )) : (
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-medium">
                          {u.permissions}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/40 font-bold text-[10px]">
                      {u.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => showToast(`Security permissions updated for ${u.name}`, 'info')}
                      className="text-xs text-[#272630] hover:text-[#D97706] font-bold"
                    >
                      Edit Roles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INVITE USER MODAL */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h3 className="text-lg font-extrabold text-[#272630]">Invite Institutional Staff</h3>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-[#272630]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Mrs. Funmi Daniels"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Official School Email</label>
                <input 
                  type="email"
                  required
                  placeholder="f.daniels@greenwoodhall.edu.ng"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Assigned Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                  >
                    <option value="School Admin">School Admin</option>
                    <option value="Bursar & Finance Lead">Bursar & Finance Lead</option>
                    <option value="Head Registrar">Head Registrar</option>
                    <option value="Academic Director">Academic Director</option>
                    <option value="Teacher / Faculty">Teacher / Faculty</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Campus Branch</label>
                  <select
                    value={newUser.branch}
                    onChange={(e) => setNewUser({...newUser, branch: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                  >
                    <option value="All Branches">All Campuses (Universal)</option>
                    {currentSchool.branches.map(b => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#272630] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
