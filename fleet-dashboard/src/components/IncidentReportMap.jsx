export default function IncidentReportMap ( ) {

    return(
    <div className="h-[400px] w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl overflow-hidden mb-6">
  <iframe 
    title="Location Map"
    width="100%" 
    height="100%" 
    id="gmap_canvas" 
    src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="rounded-lg"
  ></iframe>
  {/* The script and anchor tag usually aren't needed inside the UI container for the map to function */}
</div>
);
}