import { useEffect, useState } from 'react';
import api from '../utils/api';
import DashboardMetrics from '../components/DashboardMetrics';
import RecentReservations from '../components/RecentReservations';
import Searchbar from '../components/Searchbar';

export default function Dashboard() {
    const [metrics, setMetrics] = useState({});
    const [recentReservations, setRecentReservations] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const metricsResponse = await api.get('/metrics'); // Replace with your FastAPI endpoint
                const reservationsResponse = await api.get('/reservations?limit=5');

                setMetrics(metricsResponse.data);
                setRecentReservations(reservationsResponse.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <Searchbar />
            <DashboardMetrics metrics={metrics} />
            <RecentReservations reservations={recentReservations} />
        </div>
    );
}
