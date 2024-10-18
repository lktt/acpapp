export default function RecentReservations({ reservations }) {
    return (
        <div>
            <h2>Recent Reservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.guestName} - {reservation.roomType} - {reservation.checkIn} to {reservation.checkOut}
                    </li>
                ))}
            </ul>
        </div>
    );
}
