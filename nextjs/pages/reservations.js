import { useState, useEffect } from 'react';
import EditReservations from '../components/EditReservations';
import SearchReservations from '../components/SearchReservations';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch('/api/reservations');
        const data = await res.json();
        setReservations(data);
        setFilteredReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const filtered = reservations.filter((reservation) =>
      reservation.guestName.toLowerCase().includes(lowerTerm) ||
      reservation.id.toString().includes(lowerTerm) ||
      reservation.roomType.toLowerCase().includes(lowerTerm)
    );
    setFilteredReservations(filtered);
    setSearchTerm(term);
  };

  const handleUpdateReservation = (updatedReservation) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === updatedReservation.id ? updatedReservation : reservation
    );
    setReservations(updatedReservations);
    setFilteredReservations(updatedReservations);
  };

  const handleCancelReservation = (reservationId) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === reservationId ? { ...reservation, status: 'Canceled' } : reservation
    );
    setReservations(updatedReservations);
    setFilteredReservations(updatedReservations);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Manage Reservations</h1>
      <SearchReservations searchTerm={searchTerm} onSearch={handleSearch} />
      <EditReservations 
        reservations={filteredReservations} 
        onUpdateReservation={handleUpdateReservation} 
        onCancelReservation={handleCancelReservation} 
      />
    </div>
  );
};

export default Reservations;
