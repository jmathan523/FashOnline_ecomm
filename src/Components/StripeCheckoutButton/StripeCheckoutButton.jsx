import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceConverted = price * 100;
  const stripeKey =
    "pk_test_51IHx4XAXYcbqEfd1f7gQw5nyh68pPW8GnyD3zhKtf5PKutUeCmc8lwgeb4JUUWnzq7oSSSE2KVk2S0BubF478HwL00nsIcuyNW";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully! Thank you for shopping with us.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FashOnline Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceConverted}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
};

export default StripeCheckoutButton;
