import { useState } from 'react';

const RoomSearch = ({ onSearch }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomTypes, setRoomTypes] = useState([]);
  const [guests, setGuests] = useState(1);

  const availableRoomTypes = [
    "Single Room",
    "Standard Double Room",
    "Deluxe Double Room",
    "Standard Twin Room",
    "Junior Suite",
    "Executive Suite",
    "Presidential Suite"
  ];

  const handleSearch = () => {
    onSearch({
      checkInDate,
      checkOutDate,
      roomTypes,
      guests,
    });
  };

  const handleRoomTypeChange = (e) => {
    const options = e.target.options;
    const selectedRoomTypes = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedRoomTypes.push(options[i].value);
      }
    }
    setRoomTypes(selectedRoomTypes);
  };

  return (
    <div>
      <h2>Search Rooms</h2>
      <h3>Input: Check-In Date, Check-Out Date, Room Type, Number of Guests</h3>
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        placeholder="Check-in date"
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        placeholder="Check-out date"
      />
      <select multiple={true} value={roomTypes} onChange={handleRoomTypeChange} style={{ width: '100%', height: '100px' }}>
        {availableRoomTypes.map((roomType) => (
          <option key={roomType} value={roomType}>
            {roomType}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        placeholder="Number of guests"
        min="1"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RoomSearch;
