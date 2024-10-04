import React from 'react';

const RecentPayments = ({ payments }) => {
  return (
    <div className="recent-payments">
      <h2>Recent Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.paymentId}>
            <div>Guest: {payment.guestName}</div>
            <div>Amount: ${payment.amount}</div>
            <div>Payment Date: {payment.paymentDate}</div>
            <div>Payment Method: {payment.paymentMethod}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPayments;
