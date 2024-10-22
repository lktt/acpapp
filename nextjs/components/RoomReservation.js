const RoomReservation = ({ rooms }) => {
    return (
      <div>
        <h2>Available Rooms</h2>
        {rooms.map(room => (
          <div key={room.room_id}>
            <h3>{room.room_type}</h3>
            <p>Price: {room.price} ฿</p>
            <p>Amenities: {room.amenities}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default RoomReservation;
