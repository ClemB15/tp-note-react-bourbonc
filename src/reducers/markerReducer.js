const markerReducer = (state, action) => {
    switch (action.type) {
        case 'clickMarker':
            return { ...state, markers: [ ...state.markers, {id: action.data.id,coords: action.data.marker} ]}

        case 'delete':
            const markers = [...state.markers]
            markers.splice(action.id,1)
            return {...state, markers: [...(markers || [])]}
        default:
            return { ...state }
    }
}

export default markerReducer;