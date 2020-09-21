import GoogleMapComponent from "../components/GoogleMaps/GoogleMaps";

const Home = () => {
  const [fullMap, setFullMap] = React.useState(false)

  const toggleFullMapMode = () => {
    console.log('teste')
    setFullMap(!fullMap);
  }
  
  return (
    <>
      <header id='navbar'>
        <span id='navbar-logo'>My Logo</span>       
        <span id='full-map-mode-button' onClick={toggleFullMapMode}>Full Map Mode</span>  
      </header>

      <div id='index-background-container'></div>

      <div id={fullMap ? 'full-mode-text' : ''} className='horizontal-text'>Behind</div>

      <div id={fullMap ? 'full-mode-index-background' : 'index-background'}>
        <div id='text-left' className='vertical-text'>Behind</div>
        <div id='text-right' className='vertical-text'>the lens</div>
        <div id={fullMap ? 'full-mode-map-container' : 'map-container'}>
          {/*Insert GoogleMapComponents here to make layout tests and not waste API calls*/}
          <GoogleMapComponent defaultZoom={0} defaultLat={25} defaultLng={15}/>
        </div>
      </div>

      <div className='horizontal-text'>the lens</div>
    </>

  );
}

export default Home;