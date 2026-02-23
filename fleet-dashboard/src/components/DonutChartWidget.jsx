import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// The data structure matching your design
const data = [
  { name: 'Running', value: 163, color: '#00C46A' }, // Green
  { name: 'Stopped', value: 31, color: '#FF3B30' },  // Red
  { name: 'Offline', value: 7, color: '#FFB800' },   // Yellow
];

export default function DonutChartWidget({ title }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[350px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800 uppercase text-sm">{title}</h3>
        <button className="text-sm text-gray-500 hover:text-gray-800 font-medium">View Details</button>
      </div>
      
      {/* Chart Area with Centered Text */}
      <div className="flex-1 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Absolutely positioned center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[#FF8A00] font-bold text-lg">TOTAL</span>
          <span className="text-[#FF8A00] font-extrabold text-3xl">201</span>
        </div>
      </div>

      {/* Custom 3-Column Legend */}
      <div className="grid grid-cols-3 gap-2 mt-4 text-center border-t border-gray-100 pt-4 bg-white/50">
        <div>
          <div className="text-[10px] text-[#00C46A] mb-1 font-semibold">Running Vehicle</div>
          <div className="font-bold text-[#00C46A] text-lg">163</div>
        </div>
        <div className="border-l border-gray-100 bg-[#FFF3E5]/30">
          <div className="text-[10px] text-[#FF3B30] mb-1 font-semibold">Stopped Vehicle</div>
          <div className="font-bold text-[#FF3B30] text-lg">31</div>
        </div>
        <div className="border-l border-gray-100 bg-[#FFF3E5]/60">
          <div className="text-[10px] text-[#FFB800] mb-1 font-semibold">Offline Vehicle</div>
          <div className="font-bold text-[#FFB800] text-lg">07</div>
        </div>
      </div>
      
    </div>
  );
}