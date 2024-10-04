import React, { useState } from 'react';

const RoomSearch = ({ onSearch }) => {
  const [searchDetails, setSearchDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
  });

  const handleChange = (e) => {
    setSearchDetails({
      ...searchDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchDetails);
  };

  return (
    <div>
      <h2>Search for Rooms</h2>
      <form onSubmit={handleSubmit}>
        <label>Check-In Date</label>
        <input type="date" name="checkIn" value={searchDetails.checkIn} onChange={handleChange} required />

        <label>Check-Out Date</label>
        <input type="date" name="checkOut" value={searchDetails.checkOut} onChange={handleChange} required />

        <label>Guests</label>
        <input type="number" name="guests" value={searchDetails.guests} onChange={handleChange} min="1" required />

        <label>Room Type</label>
        <select name="roomType" value={searchDetails.roomType} onChange={handleChange} required>
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RoomSearch;
