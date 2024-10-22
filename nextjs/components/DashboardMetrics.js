const DashboardMetrics = ({ metrics }) => {
  return (
    <div>
      <h2>Hotel Metrics</h2>
      <ul>
        <li>Total Rooms: 400</li>
        <li>Occupied Rooms: {metrics.occupiedRooms}</li>
        <li>Available Rooms: {metrics.availableRooms}</li>
        <li>Scheduled Check-ins: {metrics.checkInsToday}</li>
        <li>Scheduled Check-outs: {metrics.checkOutsToday}</li>
      </ul>
    </div>
  );
};

export default DashboardMetrics;
