import React from 'react';
import './cart-dropdown.component.scss';
import { CustomButton } from '../custom-button/custom-button.component';

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);
