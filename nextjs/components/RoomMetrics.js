import React from 'react';

const RoomMetrics = ({ metrics }) => {
  return (
    <div className="metrics">
      <h2>Hotel Metrics</h2>
      <div>Total Rooms: {metrics.totalRooms}</div>
      <div>Booked Rooms: {metrics.bookedRooms}</div>
      <div>Available Rooms: {metrics.availableRooms}</div>
      <div>Check-ins Today: {metrics.checkInsToday}</div>
      <div>Check-outs Today: {metrics.checkOutsToday}</div>
    </div>
  );
};

export default RoomMetrics;
