const API_BASE_URL = 'http://localhost:8000';  // Adjust based on your FastAPI server's URL

// A helper function to make API requests
export const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,  // Include additional options like method, body, etc.
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

// Function to get all rooms
export const getRooms = async () => {
  return await fetchAPI('rooms');
};

// Function to get room details by room_id
export const getRoomById = async (roomId) => {
  return await fetchAPI(`rooms/${roomId}`);
};

// Function to create a room reservation
export const createReservation = async (reservationData) => {
  return await fetchAPI('reservations', {
    method: 'POST',
    body: JSON.stringify(reservationData),
  });
};

// Function to get all reservations
export const getReservations = async () => {
  return await fetchAPI('reservations');
};

// Function to cancel a reservation by reservation_id
export const cancelReservation = async (reservationId) => {
  return await fetchAPI(`reservations/${reservationId}`, {
    method: 'DELETE',
  });
};

// Function to get a guest by guest_id
export const getGuestById = async (guestId) => {
  return await fetchAPI(`guests/${guestId}`);
};

// Function to get all payments
export const getPayments = async () => {
  return await fetchAPI('payments');
};

// Function to create a new payment
export const createPayment = async (paymentData) => {
  return await fetchAPI('payments', {
    method: 'POST',
    body: JSON.stringify(paymentData),
  });
};
