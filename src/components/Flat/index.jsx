import React from 'react';
import './Flat.scss';

const Flat = ({ id, name, price, priceCurrency, imageUrl, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className="flat" onClick={handleClick}>
      <img className="flat-picture" alt="Flat" src={imageUrl} />
      <div className="flat-title">
        <strong>{price} {priceCurrency}</strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
