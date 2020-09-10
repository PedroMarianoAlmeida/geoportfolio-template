import GoogleMapComponent from "../components/GoogleMaps/GoogleMaps";

const Home = () => {
  return ( 
    
    <div id='index-background'>  
      
      <div id='map-container'>
        {/* */}<GoogleMapComponent defaultZoom={2} defaultLat={10} defaultLng={0} />
      </div>
      <h1 className='fixed-bottom text-center text-white'>Where I have been</h1>
    </div>
  
   );
}
 
export default Home;