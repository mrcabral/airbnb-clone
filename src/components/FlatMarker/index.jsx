import React from 'react';
import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMarker = ({ price, priceCurrency, lng, lat, selected }) => {
  const classNames = selected ? 'marker selected' : 'marker';

  return (
    <Marker
      coordinates={[lng, lat]}
      anchor="bottom"
    >
      <div className={classNames}>{price} {priceCurrency}</div>
    </Marker>
  );
};

export default FlatMarker;
