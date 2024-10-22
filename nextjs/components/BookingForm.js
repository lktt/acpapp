import { useState } from 'react';

const BookingForm = ({ selectedRoom, onSubmit }) => {
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [preferences, setPreferences] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      guestInfo,
      preferences,
      paymentMethod,
    });
  };

  return (
    <div>
      <h2>Book Room: {selectedRoom?.type}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guestInfo.name}
          onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
          placeholder="Guest name"
          required
        />
        <input
          type="email"
          value={guestInfo.email}
          onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={guestInfo.phone}
          onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
          placeholder="Phone number"
          required
        />
        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Special requests or preferences"
        />
        <h3>Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
