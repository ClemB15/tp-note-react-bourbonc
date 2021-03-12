import React, { useEffect } from "react";
import {MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import './Map.css';
import Geolocation from "./Geolocation";
import { useMarkerContext } from "../contexts/MarkerContext";

const Markers = () => {
    const { state, dispatch } = useMarkerContext()
    useEffect(() => '', [state.markers])
    // eslint-disable-next-line no-unused-vars
    const map = useMapEvents({
        click(e) {
            const id = Date.now();
            const {lat, lng} = e.latlng;
            dispatch({data : {id: id, marker: [lat, lng]}, type: 'clickMarker'})
            window.navigator.vibrate(200);
                },
    })

    return (
        <>
            {state.markers.map(marker =>
                <Marker key={marker.id} position={marker.coords}>
                </Marker>
            )}
        </>
    )
};

const Map = () => {

    return (
    <MapContainer center={[44.5667, 6.0833]} zoom={13} scrollWheelZoom={true}>
        <Geolocation />
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
    </MapContainer>
    );
}

export default Map