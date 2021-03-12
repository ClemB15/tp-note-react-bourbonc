import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({latitude = 51.505 , longitude = 6.08}) => {
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
}

export default Map