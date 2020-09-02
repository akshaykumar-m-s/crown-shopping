import React from 'react';
import './cart-item.component.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}&#8377;
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
