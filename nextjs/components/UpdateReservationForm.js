import React, { useState } from 'react';

const UpdateReservationForm = ({ reservation, onUpdate }) => {
  const [updatedDetails, setUpdatedDetails] = useState({
    roomType: reservation.roomType,
    checkInDate: reservation.checkInDate,
    checkOutDate: reservation.checkOutDate,
    status: reservation.status,
  });

  const handleChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedDetails);
  };

  return (
    <div>
      <h2>Update Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Room Type</label>
        <select name="roomType" value={updatedDetails.roomType} onChange={handleChange}>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>

        <label>Check-in Date</label>
        <input type="date" name="checkInDate" value={updatedDetails.checkInDate} onChange={handleChange} />

        <label>Check-out Date</label>
        <input type="date" name="checkOutDate" value={updatedDetails.checkOutDate} onChange={handleChange} />

        <label>Status</label>
        <select name="status" value={updatedDetails.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button type="submit">Update Reservation</button>
      </form>
    </div>
  );
};

export default UpdateReservationForm;
