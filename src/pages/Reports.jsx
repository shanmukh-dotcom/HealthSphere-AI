import React from 'react';
import { Upload, Stethoscope, ChevronDown, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export default function Reports() {
  const parameters = [
    { name: 'Hemoglobin', value: '11.2 g/dL', normal: '12.0-17.5', status: 'low' },
    { name: 'WBC Count', value: '7,500 /μL', normal: '4,500-11,000', status: 'normal' },
    { name: 'Cholesterol', value: '242 mg/dL', normal: '< 200', status: 'high' },
    { name: 'Blood Sugar', value: '98 mg/dL', normal: '70-100', status: 'normal' },
    { name: 'Creatinine', value: '1.8 mg/dL', normal: '0.7-1.3', status: 'high' },
  ];

  return (
    <div className="p-6 pb-40">
      <header className="mb-6">
        <h1 className="text-[22px] font-bold text-slate-800">Report Analyzer</h1>
        <p className="text-slate-500 text-[13px] mt-0.5">AI-powered medical report analysis</p>
      </header>

      {/* Upload Section */}
      <div className="border border-dashed border-[#a5f3fc] rounded-[24px] p-6 flex flex-col items-center justify-center bg-white mb-6">
        <div className="w-[52px] h-[52px] rounded-[18px] bg-primary flex items-center justify-center text-white mb-4 shadow-sm">
          <Upload className="w-6 h-6" strokeWidth={2} />
        </div>
        <h3 className="font-bold text-slate-800 text-[15px] mb-1">Upload Medical Report</h3>
        <p className="text-[12px] text-slate-500 mb-4 text-center">
          Drag & drop or tap to scan/upload PDF, image
        </p>
        <button className="bg-[#2dd4bf] text-white px-6 py-2.5 rounded-full text-[13px] font-bold shadow-sm hover:scale-105 transition-transform">
          Choose File
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 mb-6">
        <Stethoscope className="w-5 h-5 text-purple-500" strokeWidth={2} />
        <button className="bg-[#f3e8ff] text-[#9333ea] px-4 py-1.5 rounded-full text-[13px] font-semibold">
          Cardiology
        </button>
        <button className="bg-[#f0f9ff] text-primary px-4 py-1.5 rounded-full text-[13px] font-semibold">
          Blood Work
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 mb-4 overflow-hidden">
        <div className="grid grid-cols-[2fr_1.5fr_1fr] px-5 py-3 border-b border-slate-100 bg-slate-50/50">
          <span className="text-[11px] font-bold text-slate-400">Parameter</span>
          <span className="text-[11px] font-bold text-slate-400">Value</span>
          <span className="text-[11px] font-bold text-slate-400 text-right">Normal</span>
        </div>
        
        <div className="divide-y divide-slate-50">
          {parameters.map((param, i) => (
            <div key={i} className="grid grid-cols-[2fr_1.5fr_1fr] px-5 py-4 items-center">
              <span className="text-[13px] font-bold text-slate-700">{param.name}</span>
              <div className="flex items-center gap-1.5">
                <span className={`text-[13px] font-bold ${param.status !== 'normal' ? 'text-red-500' : 'text-[#10b981]'}`}>
                  {param.value}
                </span>
                {param.status !== 'normal' && (
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                )}
              </div>
              <span className="text-[12px] font-medium text-slate-500 text-right">{param.normal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Explanation Accordion Expended */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 mb-4 p-5 flex flex-col items-start justify-start transition-colors">
        <div className="flex items-center justify-between w-full mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f0f9ff] flex items-center justify-center text-primary">
              <FileText className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-800 text-[14px]">AI Explanation</span>
          </div>
        </div>
        <div className="text-[13px] text-slate-600 space-y-2 pl-11 w-full text-left">
          <p>Your blood work shows overall good health, but there are a few areas of concern that require attention:</p>
          <ul className="list-disc pl-4 space-y-1 mt-2 text-slate-500">
            <li><strong className="text-slate-700">Hemoglobin (11.2)</strong> is slightly below normal range. Consider adding more iron-rich foods like leafy greens to your diet.</li>
            <li><strong className="text-slate-700">Cholesterol (242)</strong> is elevated. Reducing saturated fats and increasing cardiovascular exercise will help improve the levels naturally.</li>
            <li><strong className="text-slate-700">Creatinine (1.8)</strong> is slightly elevated. Ensure you are well hydrated and consult a specialist if it persists.</li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 p-4 flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
        <p className="text-[13px] text-slate-700 font-medium">
          <span className="font-bold">3 of 5</span> parameters are within normal range
        </p>
      </div>
    </div>
  );
}
