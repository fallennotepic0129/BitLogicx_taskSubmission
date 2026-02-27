import AppLayout from './components/AppLayout.jsx';
import StatCard from './components/StatCard.jsx';
import DonutChartWidget from './components/DonutChartWidget.jsx';
import BarChartWidget from './components/BarChartWidget.jsx';
import Alerts from './components/Alerts.jsx';
import RAS from './components/RAS.jsx';
import LatestEvents from './components/LatestEvents.jsx';
import AllVehicles from './components/AllVehicles.jsx';
import PredictionsChart from './components/PredictionsChart.jsx';


export default function App() {
  return (
    <AppLayout>
      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Vehicles" value="210" bgColor="bg-[#0B3954]" iconColor="bg-[#124D70]" />
        <StatCard title="Running Vehicles" value="156" bgColor="bg-[#00C46A]" iconColor="bg-[#00A157]" />
        <StatCard title="Stopped Vehicles" value="26" bgColor="bg-[#FF3B30]" iconColor="bg-[#D93229]" />
        <StatCard title="Offline Vehicles" value="28" bgColor="bg-[#FFB800]" iconColor="bg-[#D69A00]" />
      </div>

      <div className="h-[400px] w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl overflow-hidden mb-6">
        <iframe 
          title="Location Map"
          width="100%" 
          height="100%" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="rounded-lg"
        ></iframe>

</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/*  ROW 1  */}
      
        {/* Row 1, Col 1 */}
        <DonutChartWidget title="VEHICLES INFO" /> 
        
        {/* Row 1, Col 2 & 3: Incident Map */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden h-full min-h-[300px]">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center font-bold text-sm">
            <span>Incident Detection</span>
            <span className="text-gray-400 font-normal cursor-pointer text-xs">View Details</span>
          </div>
          <div className="flex-1 w-full bg-gray-200">
            <iframe 
              title="Incident Map"
              width="100%" 
              height="100%" 
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Oman&t=&z=6&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        {/* --- ROW 2 --- */}
        {/* Row 2, Col 1 */}
        <DonutChartWidget title="DRIVER INFO" />
        
        {/* Row 2, Col 2 */}
        <BarChartWidget title="ALL VIOLATIONS" />

        {/* Row 2 & 3, Col 3 */}
        <div className="lg:row-span-2">
          <Alerts />
        </div>

        {/*  ROW 3  */}
        {/* Row 3, Col 1 */}
        <BarChartWidget title="OPERATORS VIOLATIONS" />
        
        {/* Row 3, Col 2 */}
        <DonutChartWidget title="RAG REPORT" />
        
        {/* --- ROW 4 --- */}
        {/* Row 4, Col 1 & 2: Predictions spans 2 columns */}
        <div className="lg:col-span-2"> 
             <PredictionsChart/>
          
        </div>

        {/* Row 4, Col 3: RAS */}
        <div>
          <RAS />
        </div>

        <div className="lg:col-span-2">
          <LatestEvents />
        </div>
        <div className="lg:col-span-2">
          <AllVehicles/>
        </div>
        
      </div>
    </AppLayout>
  )
}