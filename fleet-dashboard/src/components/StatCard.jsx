import { MdOutlineDirectionsBus } from 'react-icons/md';

export default function StatCard({ title, value, bgColor, iconColor }) {
  return (
    <div className={`${bgColor} text-white p-6 shadow-sm flex flex-col justify-between relative overflow-hidden h-36`}>
      {/* Title */}
      <h3 className="text-lg font-bold tracking-wide uppercase z-10">
        {title}
      </h3>
      
      {/* Number Value */}
      <div className="text-6xl font-extrabold z-10 mt-2">
        {value}
      </div>
      
      {/* Bottom Right Icon */}
      <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-full ${iconColor} flex items-center justify-center z-10 border-2 border-white/20`}>
        <MdOutlineDirectionsBus className="text-white text-2xl" />
      </div>
    </div>
  );
}