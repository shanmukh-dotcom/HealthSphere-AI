import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Pill, Upload, Building2, Shield, Bot, Activity, ChevronRight, Clock } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6 pb-40">
      <header className="mb-6">
        <p className="text-slate-500 text-xs mb-1 font-medium">Good Evening</p>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center">
          Shanmukh <span className="ml-1 w-6 h-6 leading-none">👋</span>
        </h1>
      </header>

      <div className="space-y-5">
        {/* Detected Condition Card */}
        <div className="bg-white rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-medium">Detected Condition</p>
                <h3 className="font-bold text-slate-800 text-[15px]">Mild Hypertension</h3>
              </div>
            </div>
            <span className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-[10px] font-bold">
              Medium
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full w-[55%]"></div>
            </div>
            <span className="text-[11px] font-bold text-slate-400">55%</span>
          </div>
        </div>

        {/* Next Medicine Card */}
        <div className="bg-white rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center text-[#10b981]">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Next Medicine</p>
              <h3 className="font-bold text-slate-800 text-[15px] mb-1">Amlodipine 5mg</h3>
              <div className="flex items-center gap-1 text-primary">
                <Clock className="w-3 h-3" />
                <span className="text-[11px] font-bold">In 2h 15m</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>

        {/* Quick Actions */}
        <div className="pt-2">
          <h2 className="text-[15px] font-bold text-slate-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: Upload, label: 'Upload Report', color: 'from-[#2dd4bf] to-primary', solid: false, path: '/reports' },
              { icon: Building2, label: 'Find Hospital', color: 'bg-primary', solid: true, path: '/hospitals' },
              { icon: Shield, label: 'Check Insurance', color: 'from-accent to-accent-indigo', solid: false, path: '/insurance' },
              { icon: Bot, label: 'Talk to AI', color: 'from-accent to-accent-indigo', solid: false, path: '/chat' },
            ].map((action, i) => (
              <div key={i} onClick={() => navigate(action.path)} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className={`w-[52px] h-[52px] rounded-[18px] flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all ${action.solid ? action.color : `bg-gradient-to-tr ${action.color}`}`}>
                  <action.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-medium text-slate-500 text-center leading-tight w-16">
                  {action.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Vitals */}
        <div className="pt-2">
          <h2 className="text-[15px] font-bold text-slate-800 mb-4">Today's Vitals</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between h-[90px]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-red-400" strokeWidth={2} />
                <span className="text-[11px] text-slate-500 font-medium">Heart Rate</span>
              </div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-[26px] font-bold text-slate-800 leading-none">72</span>
                <span className="text-xs text-slate-400 font-medium">bpm</span>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between h-[90px]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-[11px] text-slate-500 font-medium">Blood Pressure</span>
              </div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-[26px] font-bold text-slate-800 leading-none">128</span>
                <span className="text-[15px] font-bold text-slate-400">/84</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="bg-[#f0f9ff] rounded-[20px] p-4 flex gap-4 mt-2 border border-[#e0f2fe]">
          <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center flex-shrink-0 text-accent-indigo mt-0.5">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-[13px] mb-1">AI Insight</h3>
            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
              Your condition is common in <span className="text-slate-700">18%</span> of people nearby. Maintaining a low-sodium diet can reduce risk by up to <span className="text-slate-700">30%</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
