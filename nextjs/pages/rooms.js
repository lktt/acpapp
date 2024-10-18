import { useEffect, useState } from 'react';
import api from '../utils/api';
import RoomReservation from '../components/RoomReservation';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await api.get('/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    const filteredRooms = rooms.filter(room => room.type.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h1>Room Reservation</h1>
            <input 
                type="text" 
                placeholder="Search for rooms..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <RoomReservation rooms={filteredRooms} />
        </div>
    );
}
