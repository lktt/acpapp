// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';  // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/rooms">Room Reservation</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/reservations">Reservation Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
