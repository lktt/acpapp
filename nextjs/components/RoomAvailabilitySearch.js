import React from 'react';

const RoomAvailabilitySearch = ({ rooms, onSelectRoom }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <div>Room Type: {room.type}</div>
            <div>Price per Night: ${room.price}</div>
            <button onClick={() => onSelectRoom(room)}>Select Room</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomAvailabilitySearch;
