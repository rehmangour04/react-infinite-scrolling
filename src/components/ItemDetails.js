// components/ItemDetails.js
import React from 'react';

const ItemDetails = ({ selectedItem }) => {
  // Implement item details display logic here
  return (
    <div className="item-details">
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.description}</p>
      <img src={selectedItem.image} alt={selectedItem.name} />
    </div>
  );
};

export default ItemDetails;
