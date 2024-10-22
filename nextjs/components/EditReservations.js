import PropTypes from 'prop-types';

const EditReservations = ({ reservations = [], onUpdateReservation, onCancelReservation }) => {
    const handleUpdateClick = (reservation) => {
        // Logic for opening a modal or form to update reservation
        const updatedReservation = {
            ...reservation,
            guestName: 'Updated Name',  // Just an example
            // Modify other details here based on form input
        };
        onUpdateReservation(updatedReservation);
    };

    const handleCancelClick = (reservationId) => {
        // Confirm cancel before proceeding
        if (window.confirm('Are you sure you want to cancel this reservation?')) {
            onCancelReservation(reservationId);
        }
    };

    return (
        <div>
            <h2>Current Reservations</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Guest Name</th>
                        <th>Room Type</th>
                        <th>Guests</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(reservations) && reservations.length > 0 ? (
                        reservations.map((reservation) => (
                            <tr key={reservation.id}>
                                <td>{reservation.id}</td>
                                <td>{reservation.guestName}</td>
                                <td>{reservation.roomType}</td>
                                <td>{reservation.numberOfGuests}</td>
                                <td>{reservation.checkInDate}</td>
                                <td>{reservation.checkOutDate}</td>
                                <td>{reservation.status}</td>
                                <td>
                                    <button onClick={() => handleUpdateClick(reservation)}>Update</button>
                                    <button onClick={() => handleCancelClick(reservation.id)}>Cancel</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" style={{ textAlign: 'center' }}>No reservations found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// PropTypes validation
EditReservations.propTypes = {
    reservations: PropTypes.array,
    onUpdateReservation: PropTypes.func.isRequired,
    onCancelReservation: PropTypes.func.isRequired,
};

export default EditReservations;
