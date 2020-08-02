import React from 'react';
import Flat from '../Flat';

const FlatList = ({ flats, onSelect, selectedFlat }) => {
  return (
    <div className="flats">
      {flats.map(flat => {
        return (
          <Flat
            selected={selectedFlat === flat}
            onSelect={onSelect}
            // flat={flat}
            id={flat.id}
            name={flat.name}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            imageUrl={flat.imageUrl}
            key={flat.id}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
