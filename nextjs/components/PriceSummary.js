const PriceSummary = ({ roomPrice, nights, taxRate, deposit }) => {
    const tax = (roomPrice * nights * taxRate) / 100;
    const total = roomPrice * nights + tax;
    const initialDeposit = 1000;
    const remainingDeposit = total * 0.5 - initialDeposit;
  
    return (
      <div>
        <h3>Price Summary</h3>
        <p>Room Rate: {roomPrice}฿ x {nights} nights</p>
        <p>Tax: {tax.toFixed(2)}฿ (7%)</p>
        <p>Initial Deposit: 1,000฿</p>
        <p>Total (incl. tax): {total.toFixed(2)}฿</p>
        <p>Remaining deposit at check-in: {remainingDeposit.toFixed(2)}฿</p>
      </div>
    );
  };
  
  export default PriceSummary;
  