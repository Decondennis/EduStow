import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Building2, 
  Users, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Upload, 
  Sparkles, 
  HelpCircle,
  Clock,
  Layers,
  Check,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import EduStowLogo from '../../components/common/EduStowLogo';

export default function SchoolOnboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { setCurrentSchool, setCurrentUser, showToast, updateSchoolPlan } = useApp();

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: School Info
    schoolName: 'St. Jude International Academy',
    motto: 'Knowledge, Integrity & Future Innovation',
    category: 'K-12 & Cambridge College',
    curriculum: 'British & National Hybrid',
    state: 'Lagos',
    address: 'Block 8, Admiralty Circle, Lekki Phase 1',
    phone: '+234 802 345 6789',
    website: 'https://stjude-academy.org',
    logo: '/edustow-mark.png',
    branchesCount: 2,

    // Step 2: Plan & Capacity
    studentVolume: 1200,
    plan: 'Professional',
    billingCycle: 'Annual',
    addons: {
      biometrics: true,
      whatsapp: true,
      techclub: true
    },

    // Step 3: Admin User
    adminName: 'Dr. Dennis Okafor',
    adminTitle: 'Executive Director / Principal',
    adminEmail: 'dennis.okafor@stjude-academy.org',
    adminPhone: '+234 803 892 4019',
    adminPassword: 'Password123!',
    enable2FA: true,

    // Step 4: Payment
    paymentMethod: 'card', // 'card' | 'bank_transfer' | 'ussd'
    cardNumber: '4084 •••• •••• 9920',
    cardExp: '12/28',
    cardCvc: '•••',
    isProcessingPayment: false,
    paymentCompleted: false,
    txRef: ''
  });

  // Calculate pricing dynamically
  const baseCost = formData.plan === 'Starter' 
    ? (formData.billingCycle === 'Annual' ? 100000 : 40000) 
    : formData.plan === 'Professional' 
    ? (formData.billingCycle === 'Annual' ? 200000 : 85000) 
    : 450000;
  
  const addonsCost = (formData.addons.biometrics ? 15000 : 0) +
                     (formData.addons.whatsapp ? 12000 : 0) +
                     (formData.addons.techclub ? 25000 : 0);
  
  const totalAmount = baseCost + addonsCost;

  const triggerSuccessCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleProcessPayment = () => {
    setFormData(prev => ({ ...prev, isProcessingPayment: true }));
    
    // Simulate real Flutterwave / Stripe webhook callback latency
    setTimeout(() => {
      const generatedTxRef = `FLW-EDUSTOW-${Math.floor(10000000 + Math.random() * 90000000)}`;
      setFormData(prev => ({
        ...prev,
        isProcessingPayment: false,
        paymentCompleted: true,
        txRef: generatedTxRef
      }));

      // Update tenant state in global context
      setCurrentSchool({
        id: `sch_${Date.now()}`,
        name: formData.schoolName,
        motto: formData.motto,
        code: `STJ-${Math.floor(1000 + Math.random() * 9000)}-LAG`,
        category: formData.category,
        foundedYear: 2026,
        email: formData.adminEmail,
        phone: formData.phone,
        address: formData.address,
        website: formData.website,
        logo: formData.logo,
        currency: 'NGN',
        symbol: '₦',
        plan: formData.plan,
        planTier: formData.plan.toLowerCase(),
        billingCycle: formData.billingCycle,
        status: 'Active',
        subscriptionExpiry: '2027-10-05',
        daysRemaining: 365,
        studentCount: formData.studentVolume,
        studentLimit: formData.plan === 'Starter' ? 500 : 2500,
        staffCount: 45,
        branchCount: formData.branchesCount,
        activeTerm: 'First Term 2026/2027',
        termFeeCollected: 0,
        termFeeExpected: formData.studentVolume * 85000,
        attendanceRateToday: 98.2,
        branches: [
          { id: 'b1', name: 'Main Campus (Lekki)', code: 'LEK-01', type: 'Primary & High School', students: Math.round(formData.studentVolume * 0.7), staff: 32, status: 'Active', principal: formData.adminName, address: formData.address },
          { id: 'b2', name: 'Annex Campus (Ikoyi)', code: 'IKY-02', type: 'Early Years & Junior', students: Math.round(formData.studentVolume * 0.3), staff: 13, status: 'Active', principal: 'Mrs. Folake Davies', address: 'Bourdillon Road, Ikoyi' }
        ],
        invoices: [
          {
            id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
            date: new Date().toISOString().split('T')[0],
            dueDate: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
            amount: totalAmount,
            plan: `${formData.plan} (${formData.billingCycle} Subscription)`,
            status: 'Paid',
            method: 'Flutterwave / Card Instant Payment',
            txRef: generatedTxRef,
            downloadName: `Receipt-${formData.plan}.pdf`
          }
        ],
        users: [
          {
            id: 'u1',
            name: formData.adminName,
            email: formData.adminEmail,
            role: 'School Admin',
            permissions: ['Full Access', 'Billing', 'User Mgmt', 'Branch Mgmt'],
            branch: 'All Branches',
            status: 'Active',
            lastActive: 'Just registered'
          }
        ]
      });

      // Update current logged-in user
      setCurrentUser({
        id: 'usr_onboarded',
        name: formData.adminName,
        email: formData.adminEmail,
        role: 'admin',
        roleLabel: 'School Super Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        schoolId: 'sch_new',
        schoolName: formData.schoolName
      });

      triggerSuccessCelebration();
      showToast('School registered, verified & cloud ERP activated!', 'success');
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#272630] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress header */}
        <div className="mb-8 text-center space-y-3">
          <div className="flex justify-center mb-3">
            <Link to="/" className="text-decoration-none">
              <EduStowLogo variant="default" size="lg" showTagline={true} />
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9C2] border border-[#FFE468] text-[#745704] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#c29606]" />
            <span>EduStow Rapid Cloud Onboarding</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#272630] tracking-tight">
            Register Your School on EduStow
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Step {step} of 4 — {
              step === 1 ? 'School Identity & Campus Structure' :
              step === 2 ? 'Capacity & Subscription Plan' :
              step === 3 ? 'Administrator & Security Access' :
              'Review & Instant Cloud Activation'
            }
          </p>

          {/* Stepper bar */}
          <div className="flex items-center justify-center gap-2 pt-4 max-w-md mx-auto">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className="flex-1 flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    s === step 
                      ? 'bg-[#FFE468] text-[#272630] ring-4 ring-[#FFE468]/30 shadow-sm' 
                      : s < step 
                      ? 'bg-[#8CC641] text-[#272630]' 
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {s < step ? <Check className="w-4 h-4 stroke-[3]" /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full ${s < step ? 'bg-[#8CC641]' : 'bg-slate-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          
          {/* STEP 1: SCHOOL IDENTITY */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-[#272630]">School Profile & Institutional Details</h3>
                <p className="text-xs text-slate-500 font-medium">Tell us about your educational institution so we can configure your tenant workspace.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Official School Name</label>
                  <input 
                    type="text" 
                    value={formData.schoolName}
                    onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="e.g. Greenwood Hall International"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">School Motto / Tagline</label>
                  <input 
                    type="text" 
                    value={formData.motto}
                    onChange={(e) => setFormData({...formData, motto: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="e.g. Excellence, Integrity & Character"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Institution Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                  >
                    <option value="K-12 & Cambridge College">K-12 & Cambridge College</option>
                    <option value="Primary & Nursery Only">Primary & Nursery Only</option>
                    <option value="Secondary / High School Only">Secondary / High School Only</option>
                    <option value="Multi-Campus Group of Schools">Multi-Campus Group of Schools</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Curriculum Standard</label>
                  <select 
                    value={formData.curriculum}
                    onChange={(e) => setFormData({...formData, curriculum: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                  >
                    <option value="British & National Hybrid">British & National Hybrid (WAEC/Cambridge)</option>
                    <option value="Pure Cambridge IGCSE / A-Levels">Pure Cambridge IGCSE / A-Levels</option>
                    <option value="Nigerian National NERDC">Nigerian National NERDC / WAEC</option>
                    <option value="American AP & Montessori">American AP & Montessori</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Campuses / Branches</label>
                  <input 
                    type="number" 
                    min="1"
                    max="10"
                    value={formData.branchesCount}
                    onChange={(e) => setFormData({...formData, branchesCount: Number(e.target.value)})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#272630] mb-1.5">Main Campus Physical Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                  placeholder="Plot number, street name, city, state"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-bold text-xs shadow-sm transition-all border border-[#f5d547]"
                >
                  <span>Continue to Plan Selection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PLAN SELECTION & STUDENT VOLUME */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-[#272630]">Select Institutional Plan & Capacity</h3>
                <p className="text-xs text-slate-500 font-medium">Choose a package tailored to your student body size and branch requirements.</p>
              </div>

              {/* Student Volume Slider */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Estimated Enrolled Students:</span>
                  <span className="text-base font-extrabold text-[#272630]">{formData.studentVolume} Students</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="3500" 
                  step="50"
                  value={formData.studentVolume}
                  onChange={(e) => setFormData({...formData, studentVolume: Number(e.target.value)})}
                  className="w-full accent-[#272630] h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>100</span>
                  <span>1,000</span>
                  <span>2,000</span>
                  <span>3,500+</span>
                </div>
              </div>

              {/* Plan Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  onClick={() => setFormData({...formData, plan: 'Starter'})}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    formData.plan === 'Starter' 
                      ? 'bg-[#FFF9C2]/40 border-2 border-[#FFE468] shadow-sm' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-[#272630] font-bold text-sm">Starter Package</h4>
                      <span className="text-[11px] text-slate-500 font-medium">Up to 500 Students • 1 Campus</span>
                    </div>
                    <span className="text-base font-extrabold text-[#272630]">
                      {formData.billingCycle === 'Annual' ? '₦100k' : '₦40k'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 font-medium">Basic attendance, CA gradebook, and digital report cards.</p>
                  <div className="text-[11px] text-[#745704] font-bold">
                    {formData.plan === 'Starter' ? '✓ Selected Plan' : 'Click to select'}
                  </div>
                </div>

                <div 
                  onClick={() => setFormData({...formData, plan: 'Professional'})}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all relative ${
                    formData.plan === 'Professional' 
                      ? 'bg-[#FFF9C2]/40 border-2 border-[#FFE468] shadow-sm' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[#272630] font-bold text-sm">Professional Tier</h4>
                        <span className="px-2 py-0.5 rounded bg-[#272630] text-[#FFE468] text-[9px] font-extrabold tracking-wider">POPULAR</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">Up to 2,500 Students • 3 Campuses</span>
                    </div>
                    <span className="text-base font-extrabold text-[#272630]">
                      {formData.billingCycle === 'Annual' ? '₦200k' : '₦85k'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 font-medium">Full Bursary, Biometrics, WhatsApp alerts, Parent app & Tech Club.</p>
                  <div className="text-[11px] text-[#745704] font-bold">
                    {formData.plan === 'Professional' ? '✓ Selected Plan' : 'Click to select'}
                  </div>
                </div>
              </div>

              {/* Add-on Modules */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-[#272630] uppercase tracking-wider block">
                  Recommended Add-on Integrations
                </span>
                
                <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox" 
                      checked={formData.addons.biometrics}
                      onChange={(e) => setFormData({
                        ...formData, 
                        addons: { ...formData.addons, biometrics: e.target.checked }
                      })}
                      className="accent-[#272630] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-[#272630] font-semibold">Biometric Gate Hardware Sync & Turnstile Bridge</span>
                  </div>
                  <span className="text-[#272630] font-bold bg-[#E4F4D9] text-[#2d5f12] px-2 py-0.5 rounded-md">+₦15,000 / term</span>
                </label>

                <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox" 
                      checked={formData.addons.whatsapp}
                      onChange={(e) => setFormData({
                        ...formData, 
                        addons: { ...formData.addons, whatsapp: e.target.checked }
                      })}
                      className="accent-[#272630] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-[#272630] font-semibold">Official WhatsApp & SMS Parent Alert Gateway (5,000 units)</span>
                  </div>
                  <span className="text-[#272630] font-bold bg-[#E4F4D9] text-[#2d5f12] px-2 py-0.5 rounded-md">+₦12,000 / term</span>
                </label>

                <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox" 
                      checked={formData.addons.techclub}
                      onChange={(e) => setFormData({
                        ...formData, 
                        addons: { ...formData.addons, techclub: e.target.checked }
                      })}
                      className="accent-[#272630] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-[#272630] font-semibold">EduStow STEM & Coding Tech Club Curriculum Pack</span>
                  </div>
                  <span className="text-[#272630] font-bold bg-[#E4F4D9] text-[#2d5f12] px-2 py-0.5 rounded-md">+₦25,000 / term</span>
                </label>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-bold text-xs shadow-sm transition-all border border-[#f5d547]"
                >
                  <span>Continue to Admin Security</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ADMIN CREDENTIALS & SECURITY */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-[#272630]">Administrator Credentials & Access Security</h3>
                <p className="text-xs text-slate-500 font-medium">This account will hold primary tenant ownership over your school's data.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Admin Full Name</label>
                  <input 
                    type="text" 
                    value={formData.adminName}
                    onChange={(e) => setFormData({...formData, adminName: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="e.g. Dr. Dennis Okafor"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Institutional Role / Title</label>
                  <input 
                    type="text" 
                    value={formData.adminTitle}
                    onChange={(e) => setFormData({...formData, adminTitle: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="Principal / Executive Director"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Official Administrator Email</label>
                  <input 
                    type="email" 
                    value={formData.adminEmail}
                    onChange={(e) => setFormData({...formData, adminEmail: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="principal@school.edu.ng"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#272630] mb-1.5">Primary Mobile / WhatsApp</label>
                  <input 
                    type="tel" 
                    value={formData.adminPhone}
                    onChange={(e) => setFormData({...formData, adminPhone: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                    placeholder="+234 803 892 4019"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#272630] mb-1.5">Secure Password</label>
                <input 
                  type="password" 
                  value={formData.adminPassword}
                  onChange={(e) => setFormData({...formData, adminPassword: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#272630] text-xs font-medium focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none transition-all"
                />
                <span className="text-[11px] text-slate-400 mt-1 block font-medium">Minimum 8 characters with letters, numbers and special symbols.</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#8CC641]" />
                  <div>
                    <span className="text-[#272630] font-bold block">Enable Two-Factor Authentication (2FA)</span>
                    <span className="text-slate-500 text-[11px] font-medium">Require OTP verification upon every login for bank-grade protection.</span>
                  </div>
                </div>
                <input 
                  type="checkbox" 
                  checked={formData.enable2FA}
                  onChange={(e) => setFormData({...formData, enable2FA: e.target.checked})}
                  className="accent-[#272630] w-4 h-4 rounded cursor-pointer"
                />
              </div>

              <div className="flex justify-between items-center pt-4">
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-bold text-xs shadow-sm transition-all border border-[#f5d547]"
                >
                  <span>Continue to Verification & Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: VERIFICATION & PAYMENT SYSTEM */}
          {step === 4 && (
            <div className="space-y-6">
              {!formData.paymentCompleted ? (
                <>
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-[#272630]">Subscription Setup & Payment</h3>
                    <p className="text-xs text-slate-500 font-medium">Integrated Flutterwave & Stripe Billing. Instant automated tenant activation.</p>
                  </div>

                  {/* Summary order invoice widget */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex justify-between items-start text-xs border-b border-slate-200 pb-3">
                      <div>
                        <strong className="text-[#272630] text-sm block font-bold">{formData.schoolName}</strong>
                        <span className="text-slate-500 font-medium">{formData.plan} Plan • {formData.studentVolume} Student Seats</span>
                      </div>
                      <span className="text-[#745704] bg-[#FFF9C2] border border-[#FFE468] px-2.5 py-0.5 rounded-full font-bold text-[11px]">Annual Cycle</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <div className="flex justify-between">
                        <span>Base {formData.plan} Plan ({formData.billingCycle})</span>
                        <span className="font-bold text-[#272630]">₦{baseCost.toLocaleString()}</span>
                      </div>
                      {formData.addons.biometrics && (
                        <div className="flex justify-between text-slate-500">
                          <span>• Biometric Gate Sync</span>
                          <span>₦15,000</span>
                        </div>
                      )}
                      {formData.addons.whatsapp && (
                        <div className="flex justify-between text-slate-500">
                          <span>• WhatsApp Parent Alert Gateway</span>
                          <span>₦12,000</span>
                        </div>
                      )}
                      {formData.addons.techclub && (
                        <div className="flex justify-between text-slate-500">
                          <span>• EduStow STEM Tech Club Pack</span>
                          <span>₦25,000</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-[#272630]">
                        <span>Total Due Today:</span>
                        <span className="text-base text-[#272630] font-extrabold">₦{totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-[#272630] uppercase tracking-wider block">
                      Select Payment Method (Flutterwave Secured)
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'card', name: 'Debit Card', icon: CreditCard },
                        { id: 'bank_transfer', name: 'Bank Transfer', icon: Building2 },
                        { id: 'ussd', name: 'USSD Code', icon: Sparkles }
                      ].map(method => {
                        const Icon = method.icon;
                        return (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({...formData, paymentMethod: method.id})}
                            className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                              formData.paymentMethod === method.id
                                ? 'bg-[#FFE468] border-[#f5d547] text-[#272630] shadow-sm'
                                : 'bg-white border-slate-200 text-slate-600 hover:text-[#272630] hover:bg-slate-50'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{method.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#272630] mb-1">Card Number</label>
                          <input 
                            type="text" 
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#272630] font-mono text-xs font-bold focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-semibold text-[#272630] mb-1">Expiry Date</label>
                            <input 
                              type="text" 
                              value={formData.cardExp}
                              onChange={(e) => setFormData({...formData, cardExp: e.target.value})}
                              className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#272630] font-mono text-xs font-bold focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-[#272630] mb-1">CVC / CVV</label>
                            <input 
                              type="text" 
                              value={formData.cardCvc}
                              onChange={(e) => setFormData({...formData, cardCvc: e.target.value})}
                              className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#272630] font-mono text-xs font-bold focus:border-[#FFE468] focus:ring-2 focus:ring-[#FFE468]/30 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === 'bank_transfer' && (
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                        <span className="text-slate-600 font-semibold block">Instant Virtual Account (Wema / Flutterwave):</span>
                        <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-sm text-[#272630] font-bold flex justify-between items-center shadow-sm">
                          <span>0284 9102 38</span>
                          <span className="text-[10px] text-slate-500 font-bold uppercase bg-slate-100 px-2 py-0.5 rounded">Wema Bank</span>
                        </div>
                        <span className="text-[11px] text-slate-500 block font-medium">
                          Account Name: <strong className="text-[#272630]">EduStow Technologies - {formData.schoolName.substring(0, 15)}</strong>
                        </span>
                      </div>
                    )}

                    {formData.paymentMethod === 'ussd' && (
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                        <span className="text-slate-600 font-semibold block">Dial USSD string on registered phone:</span>
                        <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-sm text-[#272630] font-bold shadow-sm">
                          *737*000*84920# (GTBank) or *894*000*84920# (FirstBank)
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button 
                      type="button"
                      disabled={formData.isProcessingPayment}
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button 
                      type="button"
                      disabled={formData.isProcessingPayment}
                      onClick={handleProcessPayment}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-extrabold text-xs shadow-sm transition-all border border-[#f5d547]"
                    >
                      {formData.isProcessingPayment ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-[#272630] border-t-transparent animate-spin"></span>
                          <span>Processing via Flutterwave...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4" />
                          <span>Pay ₦{totalAmount.toLocaleString()} & Activate Cloud ERP</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                /* SUCCESS / SEAMLESS REDIRECT VIEW */
                <div className="text-center py-10 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#E4F4D9] border-2 border-[#8CC641] flex items-center justify-center text-[#2d5f12] mx-auto shadow-sm">
                    <Check className="w-10 h-10 stroke-[3] text-[#8CC641]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#272630]">Payment Verified & School Activated!</h3>
                    <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
                      Congratulations! <strong className="text-[#272630]">{formData.schoolName}</strong> is now live on EduStow Cloud. Transaction Ref: <span className="font-mono text-[#745704] bg-[#FFF9C2] px-2 py-0.5 rounded font-bold">{formData.txRef}</span>.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Plan Status:</span>
                      <span className="text-[#2d5f12] font-bold bg-[#E4F4D9] px-2 py-0.5 rounded">Active (365 Days)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Authorized Admin:</span>
                      <span className="text-[#272630] font-bold">{formData.adminName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Allocated Student Seats:</span>
                      <span className="text-[#272630] font-bold">{formData.studentVolume} Students</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => navigate('/dashboard')}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FFE468] hover:bg-[#fed938] text-[#272630] font-extrabold text-sm shadow-md border border-[#f5d547] transition-all transform hover:scale-105"
                    >
                      <span>Launch Your School Dashboard Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
