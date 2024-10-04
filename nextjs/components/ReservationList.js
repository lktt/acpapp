import React from 'react';

const ReservationList = ({ reservations, onSelectReservation }) => {
  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation.reservationId}>
            <div>Guest: {reservation.guestName}</div>
            <div>Reservation ID: {reservation.reservationId}</div>
            <div>Room Type: {reservation.roomType}</div>
            <div>Status: {reservation.status}</div>
            <button onClick={() => onSelectReservation(reservation)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
