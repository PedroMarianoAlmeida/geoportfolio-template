import GoogleMapComponent from "../components/GoogleMaps/GoogleMaps";

const Home = () => {
  return (
    <>
    <div id='index-background-container'>
    </div>
      <div id='index-background'>
        <div id='map-container'>
          {/**/}<GoogleMapComponent defaultZoom={0} defaultLat={25} defaultLng={15}/>
        </div>
      </div>
    </>
    
  );
}

export default Home;