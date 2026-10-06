import React, { useState } from 'react';
import { 
  Building2, 
  Plus, 
  MapPin, 
  Users, 
  School, 
  CheckCircle2, 
  ChevronRight, 
  X,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BranchManagement() {
  const { currentSchool, addBranch } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBranch, setNewBranch] = useState({
    name: '',
    code: '',
    type: 'Primary & High School',
    students: 150,
    staff: 15,
    principal: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBranch(newBranch);
    setShowAddModal(false);
    setNewBranch({
      name: '',
      code: '',
      type: 'Primary & High School',
      students: 150,
      staff: 15,
      principal: '',
      address: ''
    });
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#272630] tracking-tight">Multi-Campus & Branch Management</h1>
          <p className="text-xs text-slate-500">Manage satellite campuses, annexes, student capacity, and local principals.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
        >
          <Plus className="w-4 h-4 text-[#D97706]" />
          <span>Add Satellite Campus</span>
        </button>
      </div>

      {/* Campus Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentSchool.branches.map(branch => (
          <div 
            key={branch.id}
            className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 hover:border-[#FFE468] shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-[#272630] text-[#FFE468] flex items-center justify-center font-extrabold font-mono text-xs shadow-sm">
                  {branch.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/40 font-bold text-[10px]">
                  {branch.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#272630] mb-1">{branch.name}</h3>
              <div className="text-xs text-[#588820] font-bold mb-3">{branch.type}</div>

              <div className="space-y-2 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Principal: <strong className="text-[#272630] font-bold">{branch.principal}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#272630] font-extrabold text-sm">{branch.students}</span>
                <span className="text-slate-500 text-[11px] block font-medium">Students</span>
              </div>
              <div className="text-right">
                <span className="text-[#272630] font-extrabold text-sm">{branch.staff}</span>
                <span className="text-slate-500 text-[11px] block font-medium">Staff Faculty</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD BRANCH MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h3 className="text-lg font-extrabold text-[#272630]">Add New Satellite Campus</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-[#272630]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Campus Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Ikeja GRA Annex"
                  value={newBranch.name}
                  onChange={(e) => setNewBranch({...newBranch, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Branch Code</label>
                  <input 
                    type="text"
                    required
                    placeholder="IKJ-04"
                    value={newBranch.code}
                    onChange={(e) => setNewBranch({...newBranch, code: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Initial Students</label>
                  <input 
                    type="number"
                    value={newBranch.students}
                    onChange={(e) => setNewBranch({...newBranch, students: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Campus Coordinator / Principal</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Mrs. Ngozi Okonjo"
                  value={newBranch.principal}
                  onChange={(e) => setNewBranch({...newBranch, principal: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Campus Location Address</label>
                <input 
                  type="text"
                  required
                  placeholder="Street address, city"
                  value={newBranch.address}
                  onChange={(e) => setNewBranch({...newBranch, address: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#272630] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
                >
                  Create Campus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
