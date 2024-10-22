import { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/api';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalRooms: 400,
    bookedRooms: 0,
    availableRooms: 0,
    checkInsToday: 0,
    checkOutsToday: 0,
    recentReservations: [],
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const rooms = await fetchAPI('rooms');
        const reservations = await fetchAPI('reservations');

        const bookedRooms = rooms.filter(room => !room.availability).length;
        const availableRooms = rooms.filter(room => room.availability).length;
        const checkInsToday = reservations.filter(res => new Date(res.check_in_date).toDateString() === new Date().toDateString()).length;
        const checkOutsToday = reservations.filter(res => new Date(res.check_out_date).toDateString() === new Date().toDateString()).length;

        setMetrics({
          totalRooms: rooms.length,
          bookedRooms,
          availableRooms,
          checkInsToday,
          checkOutsToday,
          recentReservations: reservations.slice(0, 5),  // show the latest 5
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h2>Dashboard Metrics</h2>
      <p>Total Rooms: {metrics.totalRooms}</p>
      <p>Booked Rooms: {metrics.bookedRooms}</p>
      <p>Available Rooms: {metrics.availableRooms}</p>
      <p>Check-ins Today: {metrics.checkInsToday}</p>
      <p>Check-outs Today: {metrics.checkOutsToday}</p>

      <h3>Recent Reservations</h3>
      <ul>
        {metrics.recentReservations.map(res => (
          <li key={res.reservation_id}>
            {res.guest.name} - Room {res.room_id} - {res.check_in_date} to {res.check_out_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
