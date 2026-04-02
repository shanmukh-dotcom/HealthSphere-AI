import React from 'react';
import { User, FileText, Heart, Shield, ChevronRight, Calendar } from 'lucide-react';

export default function Profile() {
  return (
    <div className="p-6 pb-40">
      <header className="mb-6 flex flex-col items-center">
        <div className="w-[84px] h-[84px] bg-gradient-to-tr from-accent to-accent-indigo rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_20px_rgba(99,102,241,0.25)]">
          <User className="w-10 h-10" />
        </div>
        <h1 className="text-[22px] font-bold text-slate-800">Shanmukh</h1>
        <p className="text-slate-500 text-[14px]">shanmukh@email.com</p>

        <div className="flex items-center justify-between mt-6 w-full max-w-[240px]">
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold text-slate-800">28</span>
            <span className="text-[11px] font-medium text-slate-400">Age</span>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold text-slate-800">O+</span>
            <span className="text-[11px] font-medium text-slate-400">Blood</span>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold text-slate-800">72kg</span>
            <span className="text-[11px] font-medium text-slate-400">Weight</span>
          </div>
        </div>
      </header>

      {/* Cards List */}
      <div className="bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 mb-8 overflow-hidden divide-y divide-slate-50">
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-primary">
              <FileText className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-slate-800 text-[15px]">Stored Reports</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-slate-400">3 reports</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-primary">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-slate-800 text-[15px]">Medical History</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-slate-400">4 entries</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-primary">
              <Shield className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-slate-800 text-[15px]">Insurance Info</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-slate-400">Active</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>
        </div>
      </div>

      {/* Medical Timeline */}
      <div>
        <h2 className="text-[15px] font-bold text-slate-800 mb-6">Medical Timeline</h2>
        
        <div className="relative pl-6 pb-2 border-l-2 border-slate-100 ml-3">
          {/* Dot */}
          <div className="absolute -left-[5px] top-1 w-[8px] h-[8px] rounded-full bg-primary ring-[4px] ring-white"></div>
          
          <div className="flex items-center gap-1.5 mb-1 -mt-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] font-bold text-slate-400">Mar 2026</span>
          </div>
          <h3 className="font-bold text-slate-800 text-[14px]">Blood Work Analysis</h3>
        </div>

        <div className="relative pl-6 pb-2 border-l-2 border-slate-100 ml-3 mt-6 border-transparent">
          {/* Dot */}
          <div className="absolute -left-[5px] top-1 w-[8px] h-[8px] rounded-full bg-primary ring-[4px] ring-white"></div>
          
          <div className="flex items-center gap-1.5 mb-1 -mt-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] font-bold text-slate-400">Feb 2026</span>
          </div>
          <h3 className="font-bold text-slate-800 text-[14px]">Hypertension Diagnosed</h3>
        </div>
      </div>
    </div>
  );
}
