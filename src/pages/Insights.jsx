import React from 'react';
import { TrendingUp, Activity, BarChart3, PieChart, Info } from 'lucide-react';

export default function Insights() {
  return (
    <div className="p-6 pb-40 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-[26px] font-bold text-slate-800">Health Insights</h1>
        <p className="text-slate-500 text-[14px] mt-1">Analytics and historical trends</p>
      </header>

      <div className="space-y-6">
        {/* Blood Pressure Trend */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-slate-800 text-[16px] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Blood Pressure Trend
            </h2>
            <select className="text-[12px] bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none text-slate-600">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="h-48 flex items-end justify-between gap-2 px-2">
            {[135, 130, 140, 128, 125, 128].map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full relative bg-slate-100 rounded-t-lg flex items-end justify-center transition-all group-hover:bg-slate-200" style={{ height: '100%' }}>
                  <div className={`w-full rounded-t-lg transition-all duration-500 ${i === 5 ? 'bg-primary' : 'bg-teal-200 group-hover:bg-primary'}`} style={{ height: `${(val / 160) * 100}%` }}></div>
                  <div className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {val} mmHg
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Breakdown */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-slate-800 text-[16px] flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-500" />
              Activity Breakdown
            </h2>
            <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
          
          <div className="flex items-center justify-center gap-8 py-3">
            <div className="relative w-32 h-32 rounded-full border-[12px] border-slate-100 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-[12px] border-purple-400 border-t-purple-600 border-r-purple-500 rotate-45"></div>
              <div className="text-center z-10">
                <span className="block text-[20px] font-bold text-slate-800">75%</span>
                <span className="block text-[10px] text-slate-400 font-medium">Active</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <span className="text-[13px] text-slate-600 font-medium">Cardio (40%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-[13px] text-slate-600 font-medium">Walking (35%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-[13px] text-slate-600 font-medium">Sedentary (25%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Risk Score */}
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[24px] p-6 shadow-xl lg:col-span-2 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-[80px] -mr-10 -mt-10"></div>
          <h2 className="font-bold text-white text-[18px] mb-2 z-10 relative">Overall Risk Score</h2>
          <p className="text-slate-400 text-[13px] mb-6 max-w-sm z-10 relative">Based on your recent lab results and vitals, your 10-year cardiovascular risk is quite low.</p>
          
          <div className="flex items-end gap-3 z-10 relative">
            <span className="text-5xl font-black text-primary">12</span>
            <span className="text-slate-400 text-lg mb-1 font-bold">/ 100</span>
          </div>
          
          <div className="mt-6 h-2 w-full max-w-lg bg-slate-700 rounded-full overflow-hidden z-10 relative">
            <div className="h-full bg-primary rounded-full" style={{ width: '12%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
