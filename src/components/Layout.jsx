import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FAB from './FAB';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center w-full sm:py-6 lg:py-10">
      <div className="w-full max-w-4xl min-h-screen sm:min-h-[90vh] bg-white relative pb-40 overflow-y-auto overflow-x-hidden shadow-xl sm:rounded-[32px] border border-slate-100 mx-auto transition-all">
        <div className="pt-6 px-2 sm:px-6 w-full">
          <Outlet />
        </div>
        <FAB />
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
