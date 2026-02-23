import { useState } from 'react';
import { MdDashboard, MdDirectionsCar, MdOilBarrel, MdOutlineWarningAmber } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';

export default function Sidebar() {
  // This state remembers if the "All Vehicle" menu is open (true) or closed (false)
  const [isAllVehicleOpen, setIsAllVehicleOpen] = useState(false);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">
      
      {/* Logo Area */}
      <div className="p-6 mb-2">
        <h1 className="text-5xl font-extrabold text-[#FF8A00] tracking-tight">Logo</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        
        {/* Active Menu Item */}
        <a href="#" className="flex items-center px-4 py-3 mb-4 bg-[#FFF3E5] text-[#FF8A00] rounded-lg font-bold">
          <MdDashboard className="mr-3 text-2xl" />
          DASHBOARD
        </a>

        {/* Collapsible Menu Item (All Vehicle) */}
        <div className="pt-2">
          {/* The Button that toggles the state */}
          <button 
            onClick={() => setIsAllVehicleOpen(!isAllVehicleOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
          >
            <div className="flex items-center">
              <MdDirectionsCar className="mr-3 text-xl" />
              <span>All Vehicle</span>
            </div>
            {/* The arrow rotates 180 degrees if the menu is open */}
            <FiChevronDown className={`text-gray-400 transition-transform duration-300 ${isAllVehicleOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Sub-menu items (Animated height and opacity) */}
          <div 
            className={`ml-12 mt-2 space-y-3 text-sm text-gray-500 font-medium overflow-hidden transition-all duration-300 ease-in-out ${
              isAllVehicleOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="hover:text-gray-900 hover:font-bold cursor-pointer transition-all">Running Vehicle</p>
            <p className="hover:text-gray-900 hover:font-bold cursor-pointer transition-all">Stopped Vehicle</p>
            <p className="hover:text-gray-900 hover:font-bold cursor-pointer transition-all">Offline Vehicle</p>
          </div>
        </div>
        <a href="#" className="flex items-center px-4 py-3 mt-2 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold">
          <MdOilBarrel className="mr-3 text-xl" />
          Oil Operators
        </a>        {/* Standard Menu Item (Incident) */}
        <a href="#" className="flex items-center px-4 py-3 mt-2 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold">
          <MdOutlineWarningAmber className="mr-3 text-xl" />
          Incident
        </a>
        
      </nav>
    </aside>
  );
} 