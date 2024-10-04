import React, { useState, useEffect } from 'react';
import RoomSearch from '../components/RoomSearch';
import RoomAvailabilitySearch from '../components/RoomAvailabilitySearch';
import RoomDetails from '../components/RoomDetails';
import BookingForm from '../components/BookingForm';
import PriceSummary from '../components/PriceSummary';

const RoomReservation = ({ rooms }) => {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle search and filter rooms
  const handleSearch = (searchDetails) => {
    setReservationDetails(searchDetails);
    const availableRooms = rooms.filter(room => 
      room.type === searchDetails.roomType && 
      room.available === true
    );
    setFilteredRooms(availableRooms);
  };

  // Handle room selection
  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  // Calculate total price
  useEffect(() => {
    if (selectedRoom && reservationDetails.checkIn && reservationDetails.checkOut) {
      const nights = Math.ceil((new Date(reservationDetails.checkOut) - new Date(reservationDetails.checkIn)) / (1000 * 60 * 60 * 24));
      setTotalPrice(nights * selectedRoom.price);
    }
  }, [selectedRoom, reservationDetails]);

  // Handle booking confirmation
  const handleConfirmBooking = async (bookingInfo) => {
    const bookingData = {
      ...bookingInfo,
      roomId: selectedRoom.id,
      checkIn: reservationDetails.checkIn,
      checkOut: reservationDetails.checkOut,
      totalPrice: totalPrice,
    };

    // Submit booking data to API
    const res = await fetch('/api/book-room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      alert('Booking confirmed!');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div>
      {/* Room Search Section */}
      <RoomSearch onSearch={handleSearch} />

      {/* Room Availability Search Section */}
      <RoomAvailabilitySearch rooms={filteredRooms} onSelectRoom={handleRoomSelection} />

      {/* Room Details and Booking Form */}
      {selectedRoom && (
        <>
          <RoomDetails room={selectedRoom} />
          <BookingForm onSubmit={handleConfirmBooking} />
          <PriceSummary totalPrice={totalPrice} />
        </>
      )}
    </div>
  );
};

// Fetch data on server-side
export async function getServerSideProps() {
  // Example API call to get available rooms (replace with actual API)
  const res = await fetch('https://your-api/rooms');
  const rooms = await res.json();

  return {
    props: {
      rooms,
    },
  };
}

export default RoomReservation;
