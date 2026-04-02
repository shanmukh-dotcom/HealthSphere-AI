import { NavLink } from 'react-router-dom';
import { Home, FileText, MessageSquare, BarChart2, User } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Reports', path: '/reports', icon: FileText },
    { name: 'Chat', path: '/chat', icon: MessageSquare },
    { name: 'Insights', path: '/insights', icon: BarChart2 },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-max glass-effect rounded-[28px] px-6 lg:px-10 py-3 flex justify-center gap-6 lg:gap-12 items-center z-50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className="flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300"
        >
          {({ isActive }) => (
            <>
              <div
                className={`flex items-center justify-center w-12 h-8 rounded-full mb-1 transition-colors ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
