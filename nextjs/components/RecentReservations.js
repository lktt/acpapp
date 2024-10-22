export default function RecentReservations({ reservations }) {
    // Ensure reservations is an array, or default to an empty array
    if (!Array.isArray(reservations) || reservations.length === 0) {
        return (
            <div>
                <h2>Recent Reservations</h2>
                <p>No recent reservations available.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Recent Reservations</h2>
            <ul>
                {reservations.length > 0 ? (
                    reservations.map((reservation) => (
                        <li key={reservation.id}>
                            {reservation.guestName} - {reservation.roomType} - {reservation.checkIn} to {reservation.checkOut}
                        </li>
                    ))
                ) : (
                    <p>No recent reservations available.</p>
                )}
            </ul>
        </div>
    );
}
