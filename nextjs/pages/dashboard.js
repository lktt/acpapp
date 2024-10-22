import { useState, useEffect } from 'react';
import DashboardMetrics from '../components/DashboardMetrics';
import RecentReservations from '../components/RecentReservations';
import RoomAvailability from '../components/RoomAvailability';
import UpcomingCheckInsCheckOuts from '../components/UpcomingCheckInsCheckOuts';
import RecentPayments from '../components/RecentPayments';
import RoomManagementShortcuts from '../components/RoomManagementShortcuts';
import Searchbar from '../components/Searchbar';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [recentReservations, setRecentReservations] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const res = await fetch('/api/dashboard');
      const data = await res.json();
      setMetrics(data);
    };

    const fetchReservations = async () => {
      const res = await fetch('/api/reservations/recent');
      const data = await res.json();
      setRecentReservations(data);
    };

    const fetchPayments = async () => {
      const res = await fetch('/api/payments/recent');
      const data = await res.json();
      setRecentPayments(data);
    };

    fetchMetrics();
    fetchReservations();
    fetchPayments();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard</h1>
      {metrics && (
        <>
          <DashboardMetrics metrics={metrics} />
          <RoomAvailability availableRooms={metrics.availableRooms} />
          <UpcomingCheckInsCheckOuts checkIns={metrics.checkInsToday} checkOuts={metrics.checkOutsToday} />
        </>
      )}
      <Searchbar />
      <RecentReservations reservations={recentReservations} />
      <RecentPayments payments={recentPayments} />
      <RoomManagementShortcuts />
    </div>
  );
};

export default Dashboard;
