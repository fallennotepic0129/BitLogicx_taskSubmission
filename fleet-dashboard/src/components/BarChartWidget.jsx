import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Dummy data for violations over a few periods
const data = [
  { name: 'W1', overspeed: 70, fatigue: 45, harsh: 35 },
  { name: 'W2', overspeed: 50, fatigue: 30, harsh: 20 },
  { name: 'W3', overspeed: 40, fatigue: 25, harsh: 15 },
];

export default function BarChartWidget({ title }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[350px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800 uppercase text-sm">{title}</h3>
        <button className="text-sm text-gray-500 hover:text-gray-800 font-medium">View Details</button>
      </div>
      
      {/* Chart Area */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            {/* Horizontal lines only */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
            
            {/* The Bars */}
            <Bar dataKey="overspeed" fill="#FFB800" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="fatigue" fill="#00C46A" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="harsh" fill="#FF3B30" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  );
}