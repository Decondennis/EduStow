import React, { useState } from 'react';
import { 
  CreditCard, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Plus, 
  FileText, 
  Check, 
  Building2, 
  AlertTriangle,
  Receipt,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SubscriptionBilling() {
  const { currentSchool, updateSchoolPlan, showToast } = useApp();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [billingCycle, setBillingCycle] = useState('Annual');
  const [isProcessingUpgrade, setIsProcessingUpgrade] = useState(false);

  const handleSelectUpgrade = (planName, amount) => {
    setIsProcessingUpgrade(true);
    setTimeout(() => {
      updateSchoolPlan(planName, billingCycle, amount);
      setIsProcessingUpgrade(false);
      setShowUpgradeModal(false);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#272630] tracking-tight">Subscription & Bursary Billing</h1>
          <p className="text-xs text-slate-500">Manage your EduStow cloud tier, invoice receipts, and Flutterwave payment gateways.</p>
        </div>
        <button
          onClick={() => setShowUpgradeModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          <span>Change Subscription Plan</span>
        </button>
      </div>

      {/* Current Plan Overview Banner (Stripe / Shopify Billing Style) */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold text-[#272630]">{currentSchool.plan} Plan</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/40 text-xs font-bold">
                ● Active Subscription
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Billed {currentSchool.billingCycle} • Next auto-renewal scheduled on <strong className="text-[#272630] font-bold">{currentSchool.subscriptionExpiry}</strong>
            </p>
          </div>

          <div className="text-right">
            <div className="text-2xl font-extrabold text-[#272630]">
              {currentSchool.plan === 'Starter' ? '₦100,000' : currentSchool.plan === 'Professional' ? '₦200,000' : 'Custom'}
              <span className="text-xs text-slate-500 font-normal"> / year</span>
            </div>
            <span className="text-[11px] text-[#588820] font-bold">Automatic Flutterwave reconciliation</span>
          </div>
        </div>

        {/* Seat Usage Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-600 font-semibold">Student Seat Utilization</span>
              <span className="font-extrabold text-[#272630]">{currentSchool.studentCount} / {currentSchool.studentLimit} Students Enrolled</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-[#FFE468] rounded-full"
                style={{ width: `${(currentSchool.studentCount / currentSchool.studentLimit) * 100}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-slate-500 font-medium block">
              {currentSchool.studentLimit - currentSchool.studentCount} student slots still available under this tier.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <button
              onClick={() => showToast('Subscription auto-renewed for another year!', 'success')}
              className="w-full py-2.5 rounded-xl bg-[#272630] hover:bg-[#1E1D24] text-white font-bold text-xs transition-colors"
            >
              Early Renewal (Pay Now)
            </button>
            <button
              onClick={() => setShowUpgradeModal(true)}
              className="w-full py-2.5 rounded-xl bg-[#FFF9C2] hover:bg-[#FFE468] border border-[#FCD34D] text-[#854D0E] font-bold text-xs transition-colors"
            >
              Increase Student Limit
            </button>
          </div>
        </div>
      </div>

      {/* Payment Gateway & Method Manager */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Saved Payment Methods */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#272630]">Payment Methods</h3>
            <span className="text-xs text-[#588820] font-bold">Flutterwave 3D-Secure</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9C2] border border-[#FCD34D] flex items-center justify-center text-[#D97706]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#272630]">Mastercard Corporate Debit •••• 4092</div>
                <span className="text-[11px] text-slate-500">Expires 12/28 • Default for automated renewals</span>
              </div>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/40 font-bold">
              Primary
            </span>
          </div>

          <button 
            onClick={() => showToast('Flutterwave card tokenization window launched', 'info')}
            className="w-full py-2.5 rounded-xl border border-dashed border-slate-300 hover:border-[#FFE468] hover:bg-[#FFF9C2]/20 text-[#272630] text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Plus className="w-4 h-4 text-[#D97706]" />
            <span>Add New Card / Bank Method</span>
          </button>
        </div>

        {/* Billing Contact & Tax Profile */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#272630]">Billing Information</h3>
            <button 
              onClick={() => showToast('Billing profile updated', 'success')}
              className="text-xs text-[#272630] font-bold hover:text-[#D97706] hover:underline"
            >
              Edit Details
            </button>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 font-medium">
            <div className="flex justify-between">
              <span className="text-slate-500">Invoice Recipient:</span>
              <strong className="text-[#272630] font-bold">{currentSchool.name}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Bursar Contact:</span>
              <span>{currentSchool.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Tax Identification (TIN):</span>
              <span className="font-mono font-bold text-[#272630]">TIN-892410-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Currency:</span>
              <span>Nigerian Naira (NGN - ₦)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Invoice History & Payment Receipts (Stripe / Shopify Table Style) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#272630]">Invoice History & Official Receipts</h3>
            <span className="text-xs text-slate-500">Download official tax invoices and payment receipts for your board audit.</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="pb-3">Invoice ID</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Plan / Description</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentSchool.invoices.map(inv => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 font-mono font-bold text-[#272630]">{inv.id}</td>
                  <td className="py-4 text-slate-600">{inv.date}</td>
                  <td className="py-4 text-[#272630] font-semibold">{inv.plan}</td>
                  <td className="py-4 font-extrabold text-[#272630]">₦{inv.amount.toLocaleString()}</td>
                  <td className="py-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#E4F4D9] text-[#2D500E] border border-[#8CC641]/40 font-bold text-[10px]">
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => setSelectedReceipt(inv)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#FFF9C2] text-[#272630] font-bold text-xs border border-slate-200 transition-colors"
                    >
                      <Receipt className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>View Receipt</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PLAN UPGRADE / CHANGE MODAL */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="max-w-3xl w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#272630]">Select New Subscription Tier</h3>
                <span className="text-xs text-slate-500">Upgrade takes effect immediately without service interruption.</span>
              </div>
              <button 
                onClick={() => setShowUpgradeModal(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-[#272630] hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Starter */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#272630]">Starter Package</h4>
                  <div className="text-2xl font-extrabold text-[#272630] mt-1">₦100,000 <span className="text-xs text-slate-500 font-normal">/ yr</span></div>
                  <p className="text-xs text-slate-500 mt-2">Up to 500 Students • 1 Campus • Core gradebook</p>
                </div>
                <button
                  disabled={isProcessingUpgrade || currentSchool.plan === 'Starter'}
                  onClick={() => handleSelectUpgrade('Starter', 100000)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors ${
                    currentSchool.plan === 'Starter'
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-[#272630] hover:bg-[#1E1D24] text-white'
                  }`}
                >
                  {currentSchool.plan === 'Starter' ? 'Current Tier' : 'Downgrade to Starter'}
                </button>
              </div>

              {/* Professional */}
              <div className="p-6 rounded-2xl bg-white border-2 border-[#FFE468] shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#272630]">Professional Tier</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE468] text-[#272630] text-[10px] font-extrabold">RECOMMENDED</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#272630] mt-1">₦200,000 <span className="text-xs text-slate-500 font-normal">/ yr</span></div>
                  <p className="text-xs text-slate-500 mt-2">Up to 2,500 Students • 3 Campuses • Full Bursary, WhatsApp & Biometrics</p>
                </div>
                <button
                  disabled={isProcessingUpgrade || currentSchool.plan === 'Professional'}
                  onClick={() => handleSelectUpgrade('Professional', 200000)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors ${
                    currentSchool.plan === 'Professional'
                      ? 'bg-[#FFF9C2] text-[#854D0E] border border-[#FCD34D] cursor-not-allowed'
                      : 'bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] shadow-sm'
                  }`}
                >
                  {currentSchool.plan === 'Professional' ? 'Current Active Tier' : 'Upgrade to Professional'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RECEIPT VIEW MODAL */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#D97706]" />
                <h3 className="text-base font-bold text-[#272630]">Official Tax Invoice & Receipt</h3>
              </div>
              <button 
                onClick={() => setSelectedReceipt(null)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-[#272630]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4">
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-extrabold text-sm text-[#272630]">EDUSTOW TECHNOLOGIES INC.</h4>
                  <span className="text-[10px] text-slate-500 block">Cloud Education Systems • RC 1892041</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#272630]">{selectedReceipt.id}</span>
              </div>

              <div className="text-xs space-y-1">
                <div className="text-slate-500 text-[10px] uppercase font-bold">Issued To:</div>
                <div className="font-bold text-[#272630]">{currentSchool.name}</div>
                <div className="text-slate-600 text-[11px]">{currentSchool.address}</div>
              </div>

              <div className="border-t border-b border-slate-200 py-3 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">{selectedReceipt.plan}</span>
                  <span className="font-bold text-[#272630]">₦{selectedReceipt.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Payment Gateway:</span>
                  <span className="font-semibold text-slate-700">{selectedReceipt.method}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Tx Reference:</span>
                  <span className="font-mono font-bold text-slate-700">{selectedReceipt.txRef}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="text-[10px] text-[#2D500E] font-bold uppercase tracking-wider bg-[#E4F4D9] px-2.5 py-1 rounded-full border border-[#8CC641]/50">
                  VERIFIED PAID • STAMPED
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">Total Amount Paid</span>
                  <span className="text-base font-black text-[#272630]">₦{selectedReceipt.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  showToast('Receipt printed / exported to PDF', 'success');
                  setSelectedReceipt(null);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE468] hover:bg-[#FCD34D] text-[#272630] font-bold text-xs shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Receipt</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
