import React from 'react';
import { useMarkerContext } from "../contexts/MarkerContext";

const MarkersList = () => {
    const { state, dispatch } = useMarkerContext()

    return (
        <div>
        <h2>Liste des Markers</h2>
        <ul>
            {state.markers.map((marker,id) =>
                <li key={id} >Marker : {marker.id} | Latitude : {marker.coords[0]} | Longitude : {marker.coords[1]}
                    <button onClick={()=> dispatch({id, type: 'delete'})}>X</button> </li>
            )}
        </ul>
        </div>
    );
}


export default MarkersList