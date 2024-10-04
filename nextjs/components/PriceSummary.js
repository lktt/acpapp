import React from 'react';

const PriceSummary = ({ totalPrice }) => {
  return (
    <div>
      <h2>Price Summary</h2>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
};

export default PriceSummary;
