export default function DashboardMetrics({ metrics }) {
    return (
        <div>
            <h2>Hotel Metrics</h2>
            <p>Total Rooms: {metrics.totalRooms}</p>
            <p>Rooms Booked: {metrics.roomsBooked}</p>
            <p>Rooms Available: {metrics.roomsAvailable}</p>
            <p>Check-ins/Check-outs Today: {metrics.checkInsOutsToday}</p>
        </div>
    );
}
