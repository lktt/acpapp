export default function ReservationManagement({ reservations }) {
  const handleCancel = (id) => {
      // Handle cancellation logic here
      alert(`Canceling reservation with ID: ${id}`);
  };

  return (
      <div>
          <h2>Manage Reservations</h2>
          <ul>
              {reservations.map(reservation => (
                  <li key={reservation.id}>
                      {reservation.guestName} - {reservation.roomType} - {reservation.checkIn} to {reservation.checkOut}
                      <button onClick={() => handleCancel(reservation.id)}>Cancel</button>
                  </li>
              ))}
          </ul>
      </div>
  );
}
