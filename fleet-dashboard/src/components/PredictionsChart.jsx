import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function PredictionsChart() {
  // Dummy data shaped to match the intersecting waves in your screenshot
  const data = [
    { day: 'Mon', expected: 80, actual: 110 },
    { day: 'Tue', expected: 105, actual: 85 },
    { day: 'Wed', expected: 140, actual: 95 },
    { day: 'Thu', expected: 115, actual: 145 },
    { day: 'Fri', expected: 100, actual: 125 },
    { day: 'Sat', expected: 140, actual: 130 },
    { day: 'Sun', expected: 145, actual: 135 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 w-full h-full flex flex-col min-h-[300px]">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-black font-extrabold text-sm tracking-wide uppercase">Predictions</h2>
        <span className="text-gray-500 text-xs cursor-pointer hover:text-black transition-colors">
          View Details
        </span>
      </div>

      {/* CUSTOM LEGEND */}
      <div className="flex justify-center items-center space-x-6 mb-4 text-xs font-semibold text-gray-500">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#E3242B] mr-2"></span>
          expected
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-2"></span>
          actual
        </div>
      </div>

      {/* CHART CONTAINER */}
      <div className="flex-1 w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            {/* Horizontal Grid Lines only */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            
            {/* X & Y Axes */}
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#9CA3AF' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#9CA3AF' }} 
            />
            
            {/* Tooltip on Hover */}
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />

            {/* "Expected" Line (Red, No Fill) */}
            <Area 
              type="monotone" 
              dataKey="expected" 
              stroke="#E3242B" 
              strokeWidth={2}
              fill="transparent" 
              activeDot={{ r: 6 }}
            />

            {/* "Actual" Line (Blue, Grayish Fill) */}
            <Area 
              type="monotone" 
              dataKey="actual" 
              stroke="#3B82F6" 
              strokeWidth={2}
              fill="#CBD5E1" /* Light Slate Gray Fill */
              fillOpacity={0.4}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}