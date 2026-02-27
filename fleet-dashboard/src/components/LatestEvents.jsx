import React from 'react';
import { FaSort } from 'react-icons/fa'; 
export default function LatestEvents() {
  
  const eventsData = [
    { id: 'AFX-1100-23', type: 'Accident', location: 'Doqal', time: '28-3-2025 08:46:33' },
    { id: 'AFX-1100-23', type: 'System Alert', location: 'Doqal', time: '28-3-2025 08:46:33' },
    { id: 'AFX-1100-23', type: 'Road Close', location: 'Doqal', time: '28-3-2025 08:46:33' },
    { id: 'AFX-1100-23', type: 'Accident', location: 'Doqal', time: '28-3-2025 08:46:33' },
    { id: 'AFX-1100-23', type: 'System Alert', location: 'Doqal', time: '28-3-2025 08:46:33' },
    { id: 'AFX-1100-23', type: 'System Alert', location: 'Doqal', time: '28-3-2025 08:46:33' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full mt-6">
      
   
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-black font-extrabold text-xl tracking-wide uppercase">Latest Events</h2>
        <span className="text-black text-base cursor-pointer hover:text-gray-600 transition-colors">
          View all
        </span>
      </div>

      {/* TABLE SECTION */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          
          {/* Table Headers */}
          <thead>
            <tr className="border-y border-gray-200 text-gray-400 text-sm">
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  Vehicle ID <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  Event type <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  Location <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  Time stamp <FaSort className="text-gray-300" />
                </div>
              </th>
              <th className="py-4 px-2 font-medium cursor-pointer hover:text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  View <FaSort className="text-gray-300" />
                </div>
              </th>
            </tr>
          </thead>


          <tbody className="text-center">
            {eventsData.map((event, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-2 text-[#FF8A00] font-medium">
                  {event.id}
                </td>
                <td className="py-4 px-2 font-semibold text-black">
                  {event.type}
                </td>
                <td className="py-4 px-2 font-semibold text-black">
                  {event.location}
                </td>
                <td className="py-4 px-2 font-semibold text-black">
                  {event.time}
                </td>
                <td className="py-4 px-2 font-medium text-[#FF8A00] cursor-pointer hover:underline">
                  View
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      
    </div>
  );
}