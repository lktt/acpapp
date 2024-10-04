import React, { useState, useEffect } from 'react';
import ReservationSearch from '../components/ReservationSearch';
import ReservationList from '../components/ReservationList';
import ReservationDetails from '../components/ReservationDetails';
import UpdateReservationForm from '../components/UpdateReservationForm';

const ReservationManagement = ({ reservations }) => {
  const [filteredReservations, setFilteredReservations] = useState(reservations);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = reservations.filter(reservation => 
      reservation.guestName.toLowerCase().includes(query.toLowerCase()) || 
      reservation.reservationId.includes(query)
    );
    setFilteredReservations(filtered);
  };

  // Handle reservation selection
  const handleSelectReservation = (reservation) => {
    setSelectedReservation(reservation);
    setIsUpdating(false); // Reset update mode when selecting a new reservation
  };

  // Handle reservation update submission
  const handleUpdateReservation = async (updatedDetails) => {
    const res = await fetch(`/api/update-reservation/${selectedReservation.reservationId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedDetails),
    });

    if (res.ok) {
      alert('Reservation updated successfully!');
    } else {
      alert('Failed to update reservation.');
    }
  };

  // Handle reservation cancellation
  const handleCancelReservation = async () => {
    const res = await fetch(`/api/cancel-reservation/${selectedReservation.reservationId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert('Reservation cancelled successfully!');
    } else {
      alert('Failed to cancel reservation.');
    }
  };

  return (
    <div>
      {/* Search Reservations */}
      <ReservationSearch onSearch={handleSearch} />

      {/* List of Reservations */}
      <ReservationList reservations={filteredReservations} onSelectReservation={handleSelectReservation} />

      {/* Selected Reservation Details */}
      {selectedReservation && (
        <>
          <ReservationDetails reservation={selectedReservation} />
          {isUpdating ? (
            <UpdateReservationForm reservation={selectedReservation} onUpdate={handleUpdateReservation} />
          ) : (
            <div>
              <button onClick={() => setIsUpdating(true)}>Update Reservation</button>
              <button onClick={handleCancelReservation}>Cancel Reservation</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Fetch data on server-side
export async function getServerSideProps() {
  const res = await fetch('https://your-api/reservations');
  const reservations = await res.json();

  return {
    props: {
      reservations,
    },
  };
}

export default ReservationManagement;
