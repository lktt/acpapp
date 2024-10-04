import React from 'react';
import RoomMetrics from '../components/RoomMetrics';
import RecentReservations from '../components/RecentReservations';
import RoomAvailability from '../components/RoomAvailability';
import UpcomingCheckInsCheckOuts from '../components/UpcomingCheckInsCheckOuts';
import RecentPayments from '../components/RecentPayments';
import RoomManagementShortcuts from '../components/RoomManagementShortcuts';
import SearchBar from '../components/SearchBar';

const Dashboard = ({ metrics, recentReservations, roomAvailability, upcomingEvents, payments }) => {
  return (
    <div>
      {/* Search Bar */}
      <SearchBar />

      {/* Room Metrics */}
      <RoomMetrics metrics={metrics} />

      {/* Recent Reservations */}
      <RecentReservations reservations={recentReservations} />

      {/* Room Availability Summary */}
      <RoomAvailability availability={roomAvailability} />

      {/* Upcoming Check-ins/Check-outs */}
      <UpcomingCheckInsCheckOuts events={upcomingEvents} />

      {/* Recent Payments */}
      <RecentPayments payments={payments} />

      {/* Room Management Shortcuts */}
      <RoomManagementShortcuts />
    </div>
  );
};

// Fetch data on server-side
export async function getServerSideProps() {
  // Example API calls (replace with actual API endpoints)
  const metricsRes = await fetch('https://your-api/metrics');
  const recentReservationsRes = await fetch('https://your-api/recent-reservations');
  const roomAvailabilityRes = await fetch('https://your-api/room-availability');
  const upcomingEventsRes = await fetch('https://your-api/upcoming-events');
  const paymentsRes = await fetch('https://your-api/recent-payments');

  const metrics = await metricsRes.json();
  const recentReservations = await recentReservationsRes.json();
  const roomAvailability = await roomAvailabilityRes.json();
  const upcomingEvents = await upcomingEventsRes.json();
  const payments = await paymentsRes.json();

  return {
    props: {
      metrics,
      recentReservations,
      roomAvailability,
      upcomingEvents,
      payments,
    },
  };
}

export default Dashboard;
