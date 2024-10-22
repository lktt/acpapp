import React from 'react';

const RoomTypes = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Hotel Room Types</h2>
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
  );
};

export default RoomTypes;
