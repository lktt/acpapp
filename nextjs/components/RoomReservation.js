export default function RoomReservation({ rooms }) {
  const handleBooking = (room) => {
      // Handle booking logic here
      alert(`Booking room: ${room.type}`);
  };

  return (
      <div>
          <h2>Available Rooms</h2>
          <ul>
              {rooms.map(room => (
                  <li key={room.id}>
                      {room.type} - {room.price}
                      <button onClick={() => handleBooking(room)}>Book Now</button>
                  </li>
              ))}
          </ul>
      </div>
  );
}
