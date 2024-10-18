import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/rooms">Room Reservation</Link></li>
        <li><Link href="/reservations">Reservation Management</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
