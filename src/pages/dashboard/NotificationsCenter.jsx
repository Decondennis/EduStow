import React from 'react';
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  CreditCard, 
  Clock, 
  Sparkles,
  CheckCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function NotificationsCenter() {
  const { notifications, setNotifications, showToast } = useApp();

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast('All alerts marked as read', 'info');
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#272630] tracking-tight">Notifications & Broadcast Center</h1>
          <p className="text-xs text-slate-500 font-medium">Institutional system alerts, automated billing warnings, and broadcast updates.</p>
        </div>
        <button
          onClick={markAllAsRead}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#272630] hover:bg-[#1a1921] text-white text-xs font-bold transition-all shadow-sm"
        >
          <CheckCheck className="w-4 h-4 text-[#FFE468]" />
          <span>Mark All Read</span>
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map(notif => (
          <div 
            key={notif.id}
            className={`p-5 rounded-2xl border transition-all ${
              notif.read 
                ? 'bg-slate-50/70 border-slate-200 opacity-75' 
                : 'bg-white border-l-4 border-l-[#FFE468] border-t border-r border-b border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                notif.type === 'success' 
                  ? 'bg-[#E4F4D9] text-[#2d5f12] border border-[#8CC641]/50' 
                  : notif.type === 'warning'
                  ? 'bg-[#FFF9C2] text-[#745704] border border-[#FFE468]'
                  : 'bg-slate-100 text-[#272630] border border-slate-200'
              }`}>
                {notif.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-[#8CC641]" /> :
                 notif.type === 'warning' ? <AlertTriangle className="w-5 h-5 text-[#c29606]" /> :
                 <Info className="w-5 h-5 text-[#272630]" />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#272630]">{notif.title}</h4>
                  <span className="text-[11px] text-slate-400 font-semibold">{notif.time}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{notif.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
