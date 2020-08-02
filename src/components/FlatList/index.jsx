import React from 'react';
import Flat from '../Flat';

const FlatList = ({ flats, onSelect }) => {
  return (
    <div className="flats">
      {flats.map(flat => {
        return (
          <Flat
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
