/* 
This component is based on this generic component (that I made too): 
https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/docs/googlemap-map--component
(but I changed the code for implement in this specific case)
*/

import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
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