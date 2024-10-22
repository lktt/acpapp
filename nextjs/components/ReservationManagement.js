const ReservationManagement = ({ reservations }) => {
    // Ensure reservations is an array, or default to an empty array
    if (!Array.isArray(reservations) || reservations.length === 0) {
      return (
        <div>
          <h2>All Reservations</h2>
          <p>No reservations available at the moment.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h2>All Reservations</h2>
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.reservation_id}>
              <p>Guest Name: {reservation.guest_name}</p>
              <p>Room Type: {reservation.room_type}</p>
              <p>Check-in: {reservation.check_in_date}</p>
              <p>Check-out: {reservation.check_out_date}</p>
              <button>Modify</button>
              <button>Cancel</button>
            </div>
          ))
        ) : (
          <p>No reservations available at the moment.</p>
        )}
      </div>
    );
  };
  
  export default ReservationManagement;
  