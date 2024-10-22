import Link from 'next/link'; // Import the Link component

const HomePage = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 60px)' }}>
        <h1>Welcome to Our Hotel Management System</h1>
        <h2>Our Hotel Management System is a web application that allows hotel staff to manage reservations, view important metrics, and more.</h2>
        <h2>Select a Page to Continue</h2>
        <h3>
            Go to: 
            &nbsp;
            <Link href="/dashboard">Dashboard</Link>,
            &nbsp;
            <Link href="/rooms">Book a Room</Link>,
            &nbsp;or
            &nbsp;
            <Link href="/reservations">Manage Reservations</Link>.
        </h3>
      </div>
      <div style={{ padding: '0 32px' }}>
        <h2>Our hotel has a total of 400 rooms, which include 60 single rooms, 120 standard double rooms, 80 deluxe double rooms, 60 standard twin rooms, 40 junior suites, 20 executive suites, and 20 presidential suites. Our hotel has 2 buildings, Building A and Building B, with 6 floors, 1st floor being the hotel amenities, and the 5 upper floors being the hotel residence rooms. Our hotel has 3,600 sq m of amenities space, and a total of 22,500 sq m in land area. Our hotel has concierge service, a wide variety of dining options, spa and wellness center, fitness center, large swimming pool, conference room, ballroom, business center, high speed Wi-Fi, many recreational activities offered, and other additional luxuries.</h2>
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Hotel Room Types</h1>
            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Room Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Details</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price (per night)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Single Room</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One single bed (90 cm wide), 1 guest, amenities: Wi-Fi, air conditioning, TV, mini fridge, en-suite bathroom
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>20 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>2,000฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Standard Double Room</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One double bed (160 cm wide) or two single beds (90 cm wide each), 2 guests, amenities: Wi-Fi, air conditioning, TV, mini fridge, tea/coffee maker, en-suite bathroom
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>24 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3,000฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deluxe Double Room</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One king bed (180 cm wide) or two twin beds (100 cm wide each), 2 guests, amenities: enhanced decor, upgraded linens, Wi-Fi, air conditioning, TV, mini fridge, safe, en-suite bathroom, complimentary toiletries
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>30 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>4,200฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Standard Twin Room</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            Two twin beds (100 cm wide each), 2 guests, amenities: Wi-Fi, air conditioning, TV, mini fridge, en-suite bathroom
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>24 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>2,900฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Junior Suite</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One king bed (180 cm wide) and a small living area, 2-3 guests (with sofa bed), amenities: Wi-Fi, air conditioning, TV, mini fridge, safe, en-suite bathroom, sitting area
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>40 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>6,000฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Executive Suite</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One king bed (180 cm wide) with a separated living area, 2-4 guests (with sofa bed), amenities: Wi-Fi, air conditioning, multiple TVs, mini fridge, safe, en-suite bathroom, larger living area, access to executive lounge
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>60 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>9,500฿ before tax</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Presidential Suite</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            One king bed (180 cm wide) and another bedroom with one double bed (160 cm wide) and a separated living area, 4-6 guests (with sofa bed), amenities: luxurious decor, multiple TVs, dining area, full kitchen, Wi-Fi, air conditioning, large en-suite bathrooms, private balcony, access to executive lounge and other exclusive services
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>90 sq m</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>19,000฿ before tax</td>
                    </tr>
                </tbody>
            </table>
      </div>
    </div>
  );
};

export default HomePage;
