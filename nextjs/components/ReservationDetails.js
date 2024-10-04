import React from 'react';

const ReservationDetails = ({ reservation }) => {
  return (
    <div>
      <h2>Reservation Details</h2>
      <div>Guest Name: {reservation.guestName}</div>
      <div>Reservation ID: {reservation.reservationId}</div>
      <div>Room Type: {reservation.roomType}</div>
      <div>Check-in: {reservation.checkInDate}</div>
      <div>Check-out: {reservation.checkOutDate}</div>
      <div>Status: {reservation.status}</div>
      <div>Total Price: ${reservation.totalPrice}</div>
    </div>
  );
};

export default ReservationDetails;
