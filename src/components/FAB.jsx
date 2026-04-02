import { Bot } from 'lucide-react';

const FAB = () => {
  return (
    <button className="absolute bottom-28 right-8 lg:right-12 shadow-[0_8px_20px_rgba(99,102,241,0.3)] bg-gradient-to-tr from-accent to-accent-indigo text-white p-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 z-40 active:scale-95 group">
      <Bot className="w-6 h-6 group-hover:animate-pulse" />
    </button>
  );
};

export default FAB;
