import React from 'react';
import { Shield, CheckCircle2, XCircle } from 'lucide-react';

export default function Insurance() {
  const breakdown = [
    { title: 'Cardiology Consultation', covered: '80% covered', cost: '$ 40', status: 'yes' },
    { title: 'Blood Work Panel', covered: '100% covered', cost: '$ 0', status: 'yes' },
    { title: 'MRI Scan', covered: '60% covered', cost: '$ 120', status: 'yes' },
    { title: 'Dental Checkup', covered: '0% covered', cost: '$ 200', status: 'no' },
  ];

  return (
    <div className="p-6 pb-40">
      <header className="mb-6">
        <h1 className="text-[22px] font-bold text-slate-800">Insurance Analyzer</h1>
        <p className="text-slate-500 text-[14px]">Understand your coverage in seconds</p>
      </header>

      {/* Hero Card */}
      <div className="bg-gradient-to-r from-[#6366f1] to-[#38bdf8] rounded-[24px] p-6 text-white shadow-[0_8px_20px_rgba(99,102,241,0.2)] mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6" strokeWidth={1.5} />
          <div>
            <h2 className="font-bold text-[16px]">HealthGuard Premium</h2>
            <p className="text-[#e0e7ff] text-[12px]">Plan ID: HG-2026-4821</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div>
            <div className="text-[32px] font-bold leading-none mb-1">82%</div>
            <div className="text-[#e0e7ff] text-[12px] font-medium">Avg Coverage</div>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div>
            <div className="text-[32px] font-bold leading-none mb-1">$163</div>
            <div className="text-[#e0e7ff] text-[12px] font-medium">Est. Out-of-Pocket</div>
          </div>
        </div>
      </div>

      {/* Coverage Breakdown */}
      <div>
        <h3 className="text-[15px] font-bold text-slate-800 mb-4">Coverage Breakdown</h3>
        <div className="space-y-3">
          {breakdown.map((item, i) => (
            <div key={i} className="bg-white rounded-[20px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {item.status === 'yes' ? (
                  <CheckCircle2 className="w-6 h-6 text-[#10b981]" strokeWidth={1.5} />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" strokeWidth={1.5} />
                )}
                <div>
                  <h4 className="font-bold text-slate-800 text-[15px] mb-0.5">{item.title}</h4>
                  <p className="text-slate-400 text-[12px] font-medium">{item.covered}</p>
                </div>
              </div>
              <span className={`font-bold text-[16px] ${item.status === 'yes' ? 'text-slate-800' : 'text-red-500'}`}>
                {item.cost}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
