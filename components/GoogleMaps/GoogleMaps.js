/* 
This component is based on this generic component (that I made too): 
https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/docs/googlemap-map--component
(but I changed the code for implement in this specific case)
*/

import { useState } from 'react';
import mapStyle from './map-style';
import markersData from './markers-data'

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

            <MyModal shouldOpen={modal} toggle={toggle} selectedMarker={selectedMarker} />
        </>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMapComponent = (props) => {

    return (
        <div style={{ height: `100%`, width: '100%' }}>

            <WrappedMap
                //Remove or commment the line bellow... this key works only in Developer's adress (https://geoportfolio-template.vercel.app/)
                googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBl4DJ7KtmPo6Kaoe3NKeYLDTkYzFMs3Pw'

                /*
                Steps to make this component works on your project:
                1: Create a Google Cloud API Key 
                Reference tutorial: https://www.youtube.com/watch?v=5hTlSGD4_zk
                Note 1: In 4:22, search by "Maps JavaScript API", and not the Translator, same thing in 5:41
                Note 2: This video isn't mine =D
                2: Create a .env.local on your machine and insert the code: GOOGLE_MAPS_KEY= '<YOUR_API_KEY_VALUE>'               
                
                3: Uncomment the line bellow (googleMapUrl)
                */                
                //googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_KEY}`}

                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}

                defaultZoom={props.defaultZoom}
                defaultLat={props.defaultLat}
                defaultLng={props.defaultLng}
            />
        </div>

    );
}

export default GoogleMapComponent;