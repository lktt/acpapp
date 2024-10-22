import Link from 'next/link';

const RoomManagementShortcuts = () => {
  return (
    <div>
      <h2>Room Management Shortcuts</h2>
      <ul>
        <li><Link href="/rooms">Rooms</Link></li>
      </ul>
    </div>
  );
};

export default RoomManagementShortcuts;
