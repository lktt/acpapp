import React from 'react';

const RoomDetails = ({ room }) => {
  return (
    <div>
      <h2>Room Details</h2>
      <div>Room Type: {room.type}</div>
      <div>Price per Night: ${room.price}</div>
      <div>Amenities: {room.amenities.join(', ')}</div>
    </div>
  );
};

export default RoomDetails;
