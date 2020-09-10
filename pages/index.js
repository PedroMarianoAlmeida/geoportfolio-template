import GoogleMapComponent from "../components/GoogleMaps/GoogleMaps";

const Home = () => {
  return ( 
    <>
    <h1>Where I have been</h1>
      <img src='' />
      <GoogleMapComponent defaultZoom={2} defaultLat={10} defaultLng={0} />
    </>
   );
}
 
export default Home;