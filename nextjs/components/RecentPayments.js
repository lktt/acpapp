const RecentPayments = ({ payments }) => {
  // Check if payments is an array
  if (!Array.isArray(payments)) {
    return (
      <div>
        <h2>Recent Payments</h2>
        <p>No payments available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recent Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            {payment.guestName} - {payment.amountPaid}฿ on {payment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPayments;
