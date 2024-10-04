import React from 'react';

const RecentReservations = ({ reservations }) => {
  return (
    <div className="recent-reservations">
      <h2>Recent Reservations</h2>
      <ul>
        {reservations.map(res => (
          <li key={res.reservationId}>
            <div>Guest: {res.guestName}</div>
            <div>Reservation Date: {res.reservationDate}</div>
            <div>Room Type: {res.roomType}</div>
            <div>Check-in: {res.checkInDate}</div>
            <div>Check-out: {res.checkOutDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentReservations;
