import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello Shanmukh! I am your AI Health Assistant. Based on your recent vitals, you seem a bit stressed today. How are you feeling?', time: '09:41 AM' },
    { role: 'user', text: 'Yeah, I have been feeling a lot of pressure lately and getting mild headaches.', time: '09:43 AM' },
    { role: 'ai', text: 'I understand. Mild headaches combined with your recent mild hypertension can be a sign of stress. I recommend maintaining a low-sodium diet and perhaps trying 10 minutes of guided meditation. Would you like me to log this mood in your tracker?', time: '09:44 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: 'I have noted that down. Please get some rest and reach out if your symptoms worsen.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  return (
    <div className="h-[75vh] flex flex-col p-6 max-w-3xl mx-auto pb-32">
      <header className="mb-6 pb-4 border-b border-slate-100">
        <h1 className="text-[22px] font-bold text-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-accent to-accent-indigo text-white rounded-full flex items-center justify-center shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          HealthSphere Assistant
        </h1>
        <p className="text-slate-500 text-[13px] mt-1 ml-[52px]">Mood Detector & Health Guide</p>
      </header>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm ${msg.role === 'user' ? 'bg-slate-800 text-white' : 'bg-primary text-white'}`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={`p-4 rounded-[20px] shadow-sm ${msg.role === 'user' ? 'bg-slate-800 text-white rounded-tr-[4px]' : 'bg-white border border-slate-100 rounded-tl-[4px]'}`}>
              <p className={`text-[14px] leading-relaxed ${msg.role === 'user' ? 'text-slate-100' : 'text-slate-700'}`}>{msg.text}</p>
              <span className={`text-[10px] mt-2 block ${msg.role === 'user' ? 'text-slate-400 text-right' : 'text-slate-400'}`}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="mt-4 relative">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share how you're feeling..." 
          className="w-full bg-white border border-slate-200 shadow-sm rounded-full py-4 pl-6 pr-14 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-[14px] text-slate-700"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors shadow-sm">
          <Send className="w-4 h-4 ml-[-2px]" />
        </button>
      </form>
    </div>
  );
}
