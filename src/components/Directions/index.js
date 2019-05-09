import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDxyw0rY7a-_NDjnEJme5dWez19xEeqPr4"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
