import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineAddRoad } from 'react-icons/md'; // Using a road outline icon

export default function RAS() {
  // Data matching the entries in your screenshot
  const rasData = [
    { id: 1, title: 'AFX-1100-23', expiry: '20-09-2024' },
    { id: 2, title: 'AFX-1100-23', expiry: '22-09-2024' },
    { id: 3, title: 'AFX-1100-23', expiry: '25-09-2024' },
    { id: 4, title: 'AFX-1100-23', expiry: '29-09-2024' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
      
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
        <h2 className="text-[#0B3954] font-extrabold text-xl tracking-wide">RAS</h2>
        <span className="text-black text-base cursor-pointer hover:text-gray-600 transition-colors">
          View Details
        </span>
      </div>

      {/* RAS LIST (Scrollable) */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {rasData.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#FFF9EA] rounded-md px-4 py-3 flex items-center justify-between hover:shadow-sm transition-shadow"
          >
            {/* Left side: Icon + Title + Expiry */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <MdOutlineAddRoad className="text-[#FF8A00] text-3xl" />
              <span className="font-bold text-black text-base">
                {item.title}
              </span>
              <span className="text-[#E3242B] font-semibold text-sm">
                Expiry: {item.expiry}
              </span>
            </div>

            {/* Right side: Action Menu */}
            <BsThreeDotsVertical className="text-[#FF8A00] text-2xl cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        ))}
      </div>

    </div>
  );
}