import React from 'react';
import { Navigation, MapPin, Star, CheckCircle2 } from 'lucide-react';

export default function Hospitals() {
  const hospitals = [
    {
      name: 'Apollo Heart Center',
      distance: '1.2 km',
      rating: '4.8',
      type: 'Cardiology',
      matchText: 'Best match for hypertension',
    },
    {
      name: 'City General Hospital',
      distance: '2.5 km',
      rating: '4.5',
      type: 'Multi-Specialty',
      matchText: 'Affordable care nearby',
    },
    {
      name: 'MedPlus Diagnostics',
      distance: '0.8 km',
      rating: '4.3',
      type: 'Diagnostics',
      matchText: 'Recommended for blood work',
    },
  ];

  return (
    <div className="p-6 pb-40">
      <header className="mb-6">
        <h1 className="text-[22px] font-bold text-slate-800">Find Hospitals</h1>
        <p className="text-slate-500 text-[14px]">AI-recommended based on your condition</p>
      </header>

      {/* Map Preview */}
      <div className="bg-[#eef8fc] rounded-[24px] h-48 flex flex-col items-center justify-center text-[#38bdf8] mb-6 shadow-sm border border-[#e0f2fe] cursor-pointer hover:bg-[#e0f2fe] transition-colors">
        <Navigation className="w-8 h-8 mb-2" strokeWidth={1.5} />
        <span className="text-[14px] font-medium text-slate-600">Map Preview</span>
      </div>

      <div className="space-y-4">
        {hospitals.map((hospital, i) => (
          <div key={i} className="bg-white rounded-[24px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col cursor-pointer hover:border-[#bae6fd] transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-[16px] mb-1">{hospital.name}</h3>
                <div className="flex items-center gap-3 text-slate-500 text-[13px] font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {hospital.distance}
                  </div>
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {hospital.rating}
                  </div>
                </div>
              </div>
              <span className="bg-[#f0f9ff] text-[#0ea5e9] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide">
                {hospital.type}
              </span>
            </div>
            {hospital.matchText && (
              <div className="flex items-center gap-2 text-[#10b981]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[12px] font-semibold">{hospital.matchText}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
