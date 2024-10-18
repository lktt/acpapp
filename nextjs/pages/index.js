import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hotel Reservation System</title>
            </Head>
            <h1>Welcome to the Hotel Reservation System</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/rooms">Room Reservation</Link>
                    </li>
                    <li>
                        <Link href="/reservations">Reservation Management</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
