import { FiSearch, FiMail, FiBell, FiChevronDown } from 'react-icons/fi';
import { BsCalendar4Week } from 'react-icons/bs';
import { IoSunnyOutline, IoLocationOutline } from 'react-icons/io5';
import { WiWindy, WiRaindrops } from 'react-icons/wi';

export default function Topbar() {
  return (
    <header className="w-full shadow-sm z-10">
      {/* Top Row: Dark Blue Navigation */}
      <div className="h-20 bg-[#002B3D] flex items-center justify-between px-8">
        
        {/* Center-aligned Search Bar */}
        <div className="flex-1 flex justify-center max-w-2xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-6 pr-12 py-3 rounded-xl bg-[#F8FAFC] focus:outline-none text-gray-500 placeholder-gray-400"
            />
            <FiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-[#002B3D] text-xl" />
          </div>
        </div>

        {/* Right side: Actions & Profile */}
        <div className="flex items-center space-x-8">
          {/* Notification Icons with Red Badges */}
          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer">
              <FiMail className="text-white text-3xl" />
              <span className="absolute -top-1 -right-1 bg-[#FF0000] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#002B3D]">
                25
              </span>
            </div>
            <div className="relative cursor-pointer">
              <FiBell className="text-white text-3xl" />
              <span className="absolute -top-1 -right-1 bg-[#FF0000] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#002B3D]">
                25
              </span>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center bg-[#E8F0FE] rounded-xl px-3 py-2 space-x-3 cursor-pointer">
            <div className="relative">
              <img 
                src="https://via.placeholder.com/40" 
                alt="Profile" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#E8F0FE] rounded-full"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 text-sm mr-2">Bilal</span>
                <FiChevronDown className="text-gray-800" />
              </div>
              <span className="text-[10px] text-gray-500 font-medium">Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Date & Weather */}
      <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-between px-8">
        {/* Left: Date */}
        <div className="flex items-center text-gray-400 font-medium">
          <BsCalendar4Week className="mr-3 text-2xl" />
          <span>Friday 27 February, 2026</span>
        </div>

        {/* Right: Weather Widget */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
             <IoSunnyOutline className="text-[#FF8A00] text-5xl mr-2" />
             <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#FF8A00] leading-none">26<span className="text-xl align-top">°</span></span>
             </div>
          </div>
          
          <div className="flex flex-col text-[11px] text-gray-800 font-semibold space-y-0.5">
            <div className="flex items-center">
              <WiWindy className="text-lg mr-1" /> 28 km/h
            </div>
            <div className="flex items-center">
              <WiRaindrops className="text-lg mr-1" /> 42%
            </div>
            <div className="flex items-center text-[#FF8A00] mt-1">
              <IoLocationOutline className="mr-1" /> Lahore, Pakistan 
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}