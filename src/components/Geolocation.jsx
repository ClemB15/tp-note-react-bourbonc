import React, { useEffect, useState } from 'react';
import {useMap} from "react-leaflet";
import './Map.css';

const Geolocation = () => {

    const map = useMap();
    const [latitude, setLatitude] = useState(undefined);
    const [longitude, setLongitude] = useState(undefined);
    const [withGeoloc, setWithGeoloc] = useState(false);

    useEffect(() => {
        if (withGeoloc === false) return;
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    },[withGeoloc]);

    useEffect(() => {
        if (latitude && longitude){
            map.setView([latitude,longitude], map.getZoom())
        }
    },[latitude, longitude, map])

    return (
        <div className="geolocate">
            <input type="checkbox" checked={withGeoloc} onClickCapture={(e)=>{e.nativeEvent.stopPropagation();setWithGeoloc(prev => !prev)}} onChange={() => setWithGeoloc(prev => !prev)} id="withGeoloc"/>
            <label htmlFor="withGeoloc">Activé la Geolocalisation</label>
        </div>
    );
}


export default Geolocation