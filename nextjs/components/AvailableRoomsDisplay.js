const AvailableRoomsDisplay = ({ rooms }) => {
    return (
      <div>
        <h2>Available Rooms</h2>
        {rooms.length > 0 ? (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <h3>{room.type}</h3>
                <p>Price: {room.price}฿ per night</p>
                <p>Size: {room.size} sq m</p>
                <p>Details: {room.details}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rooms available for the selected criteria.</p>
        )}
      </div>
    );
  };
  
  export default AvailableRoomsDisplay;
  