import AppLayout from './components/AppLayout.jsx';
import StatCard from './components/StatCard.jsx';
import DonutChartWidget from './components/DonutChartWidget.jsx';
import BarChartWidget from './components/BarChartWidget.jsx';

export default function App() {
  return (
    <AppLayout>
      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Vehicles" value="210" bgColor="bg-[#0B3954]" iconColor="bg-[#124D70]" />
        <StatCard title="Running Vehicles" value="156" bgColor="bg-[#00C46A]" iconColor="bg-[#00A157]" />
        <StatCard title="Stopped Vehicles" value="26" bgColor="bg-[#FF3B30]" iconColor="bg-[#D93229]" />
        <StatCard title="Offline Vehicles" value="28" bgColor="bg-[#FFB800]" iconColor="bg-[#D69A00]" />
      </div>


      <div className="h-[400px] w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center mb-6">
        <span className="text-gray-500 font-bold text-lg">I didnt know where to find the map so this is a placeholder</span>
      </div>

      {/* this div is purely AI generated */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <DonutChartWidget title="Driver Info" />
        <BarChartWidget title="All Violations" />
        <DonutChartWidget title="IVMS Devices" />
        <BarChartWidget title="Operators Violations" />
        <DonutChartWidget title="DFMS Devices" />
        <DonutChartWidget title="RAG Report" />
      </div>

    </AppLayout>
  )
}