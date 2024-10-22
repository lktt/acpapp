import { useState, useEffect } from 'react';
import api from '../utils/api';
import RoomTypes from '@/components/RoomTypes';
import RoomSearch from '../components/RoomSearch';
import AvailableRoomsDisplay from '../components/AvailableRoomsDisplay';
import BookingForm from '../components/BookingForm';
import PriceSummary from '../components/PriceSummary';
import ConfirmationButton from '../components/ConfirmationButton';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [nights, setNights] = useState(1);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get('/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleSearch = (criteria) => {
    const filtered = rooms.filter((room) =>
      room.type.toLowerCase().includes(criteria.roomType.toLowerCase()) &&
      room.availableDates.some(
        (date) => date >= criteria.checkInDate && date <= criteria.checkOutDate
      )
    );
    setFilteredRooms(filtered);
    setSearchCriteria(criteria);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    
    // Calculate number of nights
    const checkInDate = new Date(searchCriteria.checkInDate);
    const checkOutDate = new Date(searchCriteria.checkOutDate);
    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNights(diffDays);
  };

  const handleBookingSubmit = (bookingDetails) => {
    console.log('Booking details:', bookingDetails, selectedRoom);

    // Update room availability
    const updatedRooms = rooms.map((room) => {
      if (room.id === selectedRoom.id) {
        return {
          ...room,
          availableDates: room.availableDates.filter(
            (date) => date < searchCriteria.checkInDate || date > searchCriteria.checkOutDate
          ),
        };
      }
      return room;
    });
    setRooms(updatedRooms);
    setFilteredRooms([]);
    setSelectedRoom(null);
  };

  const handleConfirm = () => {
    console.log('Confirming booking');
    // Implement the confirmation logic here
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Room Reservation</h1>
      <div style={{ padding: '0 32px' }}>
        <RoomTypes />
        <RoomSearch onSearch={handleSearch} />
        <AvailableRoomsDisplay rooms={filteredRooms} onRoomSelect={handleRoomSelect} />
        {selectedRoom && (
          <>
            <BookingForm selectedRoom={selectedRoom} onSubmit={handleBookingSubmit} />
            <PriceSummary
              roomPrice={selectedRoom.price}
              nights={nights}
              taxRate={7}
              deposit={1000}
            />
            <ConfirmationButton onConfirm={handleConfirm} />
          </>
        )}
      </div>
    </div>
  );
}
