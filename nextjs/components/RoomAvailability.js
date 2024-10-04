import React from 'react';

const RoomAvailability = ({ availability }) => {
  return (
    <div className="room-availability">
      <h2>Room Availability</h2>
      <ul>
        {availability.map(room => (
          <li key={room.roomType}>
            <div>Room Type: {room.roomType}</div>
            <div>Available Rooms: {room.availableCount}</div>
            <div>Occupied Rooms: {room.occupiedCount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomAvailability;
