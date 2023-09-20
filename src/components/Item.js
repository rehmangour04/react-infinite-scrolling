// components/Item.js
import React from 'react';

const Item = ({ item, onItemClick }) => {
  return (
    <div className="item" onClick={() => onItemClick(item)}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;
