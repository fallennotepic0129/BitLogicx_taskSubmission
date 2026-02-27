import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoSpeedometerOutline, IoCloseOutline } from 'react-icons/io5';

export default function Alerts() {

  const alertsData = Array(6).fill({
    id: crypto.randomUUID(),
    type: 'Speed Limit - Medium Violation',
    description: 'Speed limit exceeded: 61.0 km/h at 10:13 PM',
    vehicle: '344536746579',
    driver: 'Jason',
    date: 'Apr 03, 2025, 10:13 PM',
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
      
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
        <div className="flex items-center text-[#FF8A00] font-extrabold text-2xl tracking-wide">
          <FaBell className="mr-3 text-2xl" />
          ALERTS
        </div>
        <div className="text-black text-xl cursor-pointer hover:text-gray-600 transition-colors">
          View All
        </div>
      </div>


      <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
        {alertsData.map((alert, index) => (
          <div 
            key={index} 
            className="bg-[#FFF4E8] rounded-md p-3 relative group hover:shadow-sm transition-shadow"
          >
          
            <IoCloseOutline className="absolute top-2 right-2 text-[#FF8A00] text-xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />

            
            <div className="flex items-center text-[#FF8A00] font-bold text-sm mb-1.5">
              <IoSpeedometerOutline className="mr-2 text-lg stroke-[2]" />
              {alert.type}
            </div>


            <div className="flex items-center justify-between text-[11px] text-gray-800">
              
            
              <div className="flex items-center gap-6">
                <span>{alert.description}</span>
                <span>
                  Vehicle: <span className="text-[#FF8A00]">{alert.vehicle}</span>
                </span>
                <span>
                  Driver: <span className="text-[#FF8A00]">{alert.driver}</span>
                </span>
              </div>

              {/* Right Side Date */}
              <span className="text-gray-600 text-[10px] mr-4">{alert.date}</span>
            </div>
          </div>
        ))}
      </div>

 
      
    </div>
  );
}