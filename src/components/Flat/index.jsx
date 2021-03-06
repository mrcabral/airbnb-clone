import React from 'react';
import './Flat.scss';

const Flat = ({ id, name, price, priceCurrency, imageUrl, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(id);
  };

  const classNames = selected ? 'flat selected' : 'flat';

  return (
    <div className={classNames} onClick={handleClick}>
      <img className="flat-picture" alt="Flat" src={imageUrl} />
      <div className="flat-title">
        <strong>{price} {priceCurrency}</strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
