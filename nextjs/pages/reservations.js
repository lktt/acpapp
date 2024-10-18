import { useEffect, useState } from 'react';
import api from '../utils/api';
import ReservationManagement from '../components/ReservationManagement';

export default function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await api.get('/reservations');
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <div>
            <h1>Reservation Management</h1>
            <ReservationManagement reservations={reservations} />
        </div>
    );
}
