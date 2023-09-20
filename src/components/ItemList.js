// components/ItemList.js
import React from 'react';
import Item from './Item';

const ItemList = ({ items, onItemClick }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export default ItemList;
