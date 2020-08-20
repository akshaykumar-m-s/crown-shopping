import React from 'react';
import './stripe-button.component.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HIJgAAcbOcaZjKise5etT49JWleJ3ZB45GJMiZWv6nISLK0pPXhitaWCBYDuwX1tVMlkiyniJFjKIsmyi2dR6qc00DDxXU40A';

  const onToken = (token) => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Shopping TM"
      billingAddress
      shippingAddress
      currency="INR"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}₹`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
