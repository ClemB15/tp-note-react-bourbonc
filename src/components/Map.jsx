import React, { useEffect, useState } from "react";
import {MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import './Map.css';
import Geolocation from "./Geolocation";
import { useMarkerContext } from "../contexts/MarkerContext";
import L from 'leaflet';
import axios from "axios";


const Markers = () => {
    // Essai des Sprites aléatoires, mais Echec
    // const [pokemons, setPokemons] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data: { results } } = await axios.get(url)
    //         setPokemons(results)
    //         setIsLoading(false)
    //     }
    //     setIsLoading(true)
    //     fetchData()
    // }, [url])
    //
    // if(!isLoading){
    // pokemons.map(pkmn => (
    //     const pkmnIcon = L.icon({
    //         iconUrl: pkmn.sprites.front_default
    //     })
    // ))
    // }

    const { state, dispatch } = useMarkerContext()
    useEffect(() => '', [state.markers])
    // eslint-disable-next-line no-unused-vars
    const map = useMapEvents({
        click(e) {
            const id = Date.now();
            const {lat, lng} = e.latlng;
            dispatch({data : {id: id, marker: [lat, lng]}, type: 'clickMarker'})
            //Pour définir le sprite sur le marker, puis il était censé passer par le dispatch pour l'éditer dans la liste
            // L.marker([lat,lng], {icon: pkmnIcon}).addTo(map);
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