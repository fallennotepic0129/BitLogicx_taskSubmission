import React, { useState } from 'react';
import { FaSort, FaBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function AllVehicles() {
  // State for the custom dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Set to true to match your screenshot initially

  // Dummy data mimicking your image exactly
  const vehiclesData = [
    { 
      id: 'AFX-1100-23', 
      num: 1, 
      type: 'Truck', 
      location: 'Main St. & 3rd Ave.', 
      speed: '90', 
      speedColor: 'text-[#E3242B]', // Red for overspeeding
      company: 'Shell', 
      alert: true 
    },
    { 
      id: 'AFX-1100-23', 
      num: 2, 
      type: 'Truck', 
      location: 'Main St. & 3rd Ave.', 
      speed: '60', 
      speedColor: 'text-[#00A157]', // Green for normal
      company: 'Shell', 
      alert: false 
    },
    { 
      id: 'AFX-1100-23', 
      num: 3, 
      type: 'Truck', 
      location: 'Main St. & 3rd Ave.', 
      speed: '50', 
      speedColor: 'text-[#00A157]', 
      company: 'Shell', 
      alert: false 
    },
    { 
      id: 'AFX-1100-23', 
      num: 4, 
      type: 'Truck', 
      location: 'Main St. & 3rd Ave.', 
      speed: '70', 
      speedColor: 'text-[#00A157]', 
      company: 'Shell', 
      alert: false 
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full mt-6">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-black font-extrabold text-xl tracking-wide uppercase">All Vehicles</h2>
        
        <div className="flex items-center space-x-4">
          <span className="text-black text-base cursor-pointer hover:text-gray-600 transition-colors">
            View all
          </span>
          
          {/* Custom Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-gray-200 text-gray-500 px-3 py-1.5 rounded-md text-sm"
            >
              <span>Select Vehicle</span>
              <FiChevronDown />
            </button>
            
            {/* Dropdown Menu (Open state matches image) */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-gray-100 rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                <div className="bg-[#00A157] text-white px-4 py-2 text-sm cursor-pointer hover:bg-green-600">
                  Running Vehicle
                </div>
                <div className="text-black px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 border-b border-white">
                  Stopped Vehicle
                </div>
                <div className="text-black px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Offline Vehicle
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          
          {/* Table Headers */}
          <thead>
            <tr className="border-y border-gray-200 text-gray-400 text-sm">
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center gap-2">
                  Vehicle ID <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center gap-2">
                  Type <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center gap-2">
                  Current Location <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center gap-2">
                  Speed (km/h) <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center gap-2">
                  Company <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium text-center">
                Show on Map
              </th>
              <th className="py-4 px-2 font-medium text-center">
                Show Details
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {vehiclesData.map((vehicle, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
              >
                {/* Vehicle ID with Status Dot */}
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    {/* Status Dot */}
                    <div className="w-2 h-2 rounded-full bg-[#00A157] mb-1"></div>
                    <div className="text-black">
                      {vehicle.num}. <span className="text-[#FF8A00] font-medium cursor-pointer hover:underline">{vehicle.id}</span>
                    </div>
                  </div>
                </td>
                
                {/* Type */}
                <td className="py-4 px-2 text-black font-medium">
                  {vehicle.type}
                </td>
                
                {/* Location */}
                <td className="py-4 px-2 text-black font-medium">
                  {vehicle.location}
                </td>
                
                {/* Speed */}
                <td className={`py-4 px-2 font-bold ${vehicle.speedColor}`}>
                  {vehicle.speed} (km/h)
                </td>
                
                {/* Company */}
                <td className="py-4 px-2 text-black font-medium">
                  {vehicle.company}
                </td>
                
                {/* Show on Map */}
                <td className="py-4 px-2 text-center">
                  <span className="text-[#FF8A00] font-medium cursor-pointer hover:underline">
                    See on Map
                  </span>
                </td>
                
                {/* Actions & Details */}
                <td className="py-4 px-2">
                  <div className="flex items-center justify-center space-x-4">
                    <BsThreeDotsVertical className="text-[#FF8A00] text-xl cursor-pointer hover:opacity-80" />
                    
                    <button className="bg-[#FF8A00] text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-[#e67c00] transition-colors">
                      Action <FiChevronDown />
                    </button>
                    
                    {/* Alert Bell Conditional Rendering */}
                    {vehicle.alert ? (
                      <div className="relative cursor-pointer flex items-center justify-center">
                        <FaBell className="text-[#E3242B] text-xl" />
                        {/* Simulation of ringing waves */}
                        <span className="absolute -right-2 -left-2 top-1 bottom-1 border border-[#E3242B] rounded-full animate-ping opacity-75"></span>
                      </div>
                    ) : (
                      <FaBell className="text-gray-300 text-xl cursor-pointer hover:text-gray-400" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      
    </div>
  );
}