import {FC, useState} from "react";
import {GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import iconMarker from '../../../assets/icons/mapMarker.png'
import cn from '../mapRoot.module.css'

const Map: FC = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB-1TK945cBhLyZmy8GLNNcPhzgnG7H42A" // //TODO api kay for testing, move to env
    })
    const [bookmarkPosition, setBookmarkPosition] = useState({
        lat: 40.185072,
        lng: 44.514609,
    });
    
    const center = {
        lat: 40.185072,
        lng: 44.514609,
    };
    
    
    const options = {
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
    };
    
    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            setBookmarkPosition({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            });
        }
    };

    return (
        isLoaded ? (
            <GoogleMap
            mapContainerClassName={cn.map_block}
            center={center}
            zoom={13}
            options={options}
            onClick={handleMapClick}
        >
            
            <Marker
                position={bookmarkPosition}
                icon={iconMarker}
            />
        </GoogleMap>) : null
    );
};

export default Map;
