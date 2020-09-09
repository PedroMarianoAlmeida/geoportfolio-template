/* 
This component is based on this generic component (that I made too): 
https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/docs/googlemap-map--component
(but I changed the code for implement in this specific case)
*/

import { useState } from 'react';
import mapStyle from './map-style';
import markersData from './markers-data'

/*
    The developer should create a .env.local file on the root of the project
    Then insert this line (with the right key) GOOGLE_MAPS_KEY= "<your_API_Key_of_google_cloud>"

    If you doesn't know how to get your API Key for google maps, please what this video: https://www.youtube.com/watch?v=5hTlSGD4_zk
    Note 1: In 4:22, search by "Maps JavaScript API", and not the Translator, same thing in 5:41
    Note 2: This video isn't mine =D
*/
const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY

/*
    From where this come from: https://www.npmjs.com/package/react-google-maps
    Note: The warnings when console opens is because of this component (it is the only class component on the code)
*/
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MyModal from '../MyModal';

const Map = (props) => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleClick = (place) => {
        setSelectedMarker(place)
        toggle();
    }

    return (
        <>
            <GoogleMap
                defaultZoom={props.defaultZoom}
                defaultCenter={{ lat: props.defaultLat, lng: props.defaultLng }}
                defaultOptions={{ styles: mapStyle }}
            >
                {markersData.map(point => (
                    <Marker
                        key={`${point.lat}-${point.lng}`}
                        position={{ lat: point.lat, lng: point.lng }}
                        onClick={() => handleClick(point)}
                    />
                ))}
            </GoogleMap>

            <MyModal shouldOpen={modal} toggle={toggle} selectedMarker={selectedMarker}/>
        </>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMapComponent = (props) => {

    return (
        <div style={{ height: `500px`, width: '1000px' }}>

            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_KEY}`}

                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}

                defaultZoom={props.defaultZoom}
                defaultLat={props.defaultLat}
                defaultLng={props.defaultLng}
            />
        </div>

    );
}

export default GoogleMapComponent;