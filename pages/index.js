import GoogleMapComponent from "../components/GoogleMaps/GoogleMaps";

const Home = () => {
  return ( 
    <>
    <h1>Where I have been</h1>
    <GoogleMapComponent defaultZoom={5} defaultLat={12} defaultLng={12}/>
    </>
   );
}
 
export default Home;