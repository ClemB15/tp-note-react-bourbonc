import React, { useContext } from 'react'

const MarkerContext = React.createContext({})

const useMarkerContext = () => useContext(MarkerContext)

export default MarkerContext

export { useMarkerContext }