import { FiSearch, FiMail, FiBell } from 'react-icons/fi';
import { BsCalendar4Week } from 'react-icons/bs';

export default function Topbar() {
  return (
    <header className="h-20 bg-[#0B3954] shadow-sm flex items-center justify-between px-6 z-10">
      
      {/* Left side: Date (Text updated to white) */}
      <div className="flex items-center text-white font-semibold text-sm">
        <BsCalendar4Week className="mr-3 text-xl text-gray-300" />
        Monday Feb 23, 2026
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xl px-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here.."
            className="w-full pl-5 pr-10 py-2.5 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8A00] text-sm text-gray-800 shadow-inner"
          />
          <FiSearch className="absolute right-4 top-3 text-[#FF8A00] text-lg" />
        </div>
      </div>

      {/* Right side: Actions, Profile, Weather */}
      <div className="flex items-center space-x-6">
        
        {/* Notification Icons */}
        <div className="flex items-center space-x-5">
          <FiMail className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors" />
          <div className="relative cursor-pointer hover:text-gray-300 transition-colors">
            <FiBell className="text-white text-xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#FF3B30] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#0B3954]">
              9+
            </span>
          </div>
        </div>

        {/* Profile Part in this div*/}
        <div className="flex items-center space-x-3 pl-6 cursor-pointer border-l border-white/20">
          <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-sm flex items-center justify-center text-sm font-bold text-[#0B3954]">BS</div>
          <span className="font-bold text-white text-sm">Bilal Shabbir ▼</span>
        </div>

        {/* Weather Widget */}
        <div className="flex items-center space-x-2 pl-4 border-l border-white/20">
          <div className="text-right">
             <div className="text-[#FF8A00] font-bold text-2xl flex items-center">
                <span className="text-lg mr-1">☀️</span> 21°C
             </div>
             <p className="text-[10px] text-gray-300">📍 Lahore, Pakistan</p>
          </div>
        </div>

      </div>
    </header>
  );
}