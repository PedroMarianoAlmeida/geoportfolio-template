const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY

/* 
This component is based on this generic component (that I made too): 
https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/docs/googlemap-map--component
(but I changed the code for implement in this specific case)
*/
import { useState } from 'react';
import mapStyle from './map-style';
import markersData from './markers-data'

//From where this come from: https://www.npmjs.com/package/react-google-maps
//The warnings when console opens is because of this component (it is the only class component on the code)
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const Map = (props) => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <GoogleMap
            defaultZoom={props.defaultZoom}
            defaultCenter={{ lat: props.defaultLat, lng: props.defaultLng }}
            defaultOptions={{ styles: mapStyle }}
        >
            {markersData.map(point => (
                <Marker
                    key={point.title}
                    position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setSelectedMarker(point)}
                />
            ))}

            {selectedMarker && (
                <InfoWindow
                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                    onCloseClick={() => { setSelectedMarker(null) }}
                >
                    <div style={{ width: '200px' }} className='text-center'>
                        <h6>{selectedMarker.title}</h6>
                        <img
                            src={selectedMarker.srcImage}
                            alt={selectedMarker.alt}
                            style={{ width: '150px' }}
                        />
                        <p>{selectedMarker.description}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMapComponent = (props) => {

    return (
        <div style={{ height: `500px`, width: '1000px' }}>

            <WrappedMap
                //Remove or commment the line bellow... this key works only in Developer's adress (https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/story/example-introduction--page)
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