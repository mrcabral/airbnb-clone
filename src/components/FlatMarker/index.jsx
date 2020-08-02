import React from 'react';
import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMarker = ({ price, priceCurrency, lng, lat }) => {
  return (
    <Marker
      coordinates={[lng, lat]}
      anchor="bottom"
    >
      <div className="marker">{price} {priceCurrency}</div>
    </Marker>
  );
};

export default FlatMarker;
