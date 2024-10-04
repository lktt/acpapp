import React from 'react';
import { useRouter } from 'next/router';

const RoomManagementShortcuts = () => {
  const router = useRouter();

  return (
    <div className="room-management-shortcuts">
      <h2>Room Management</h2>
      <button onClick={() => router.push('/add-reservation')}>Add Reservation</button>
      <button onClick={() => router.push('/manage-rooms')}>Manage Rooms</button>
    </div>
  );
};

export default RoomManagementShortcuts;
