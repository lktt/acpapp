// /nextjs/pages/api/guests.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // FastAPI base URL

export default async function handler(req, res) {
  const { method, query } = req;
  
  try {
    switch (method) {
      case 'GET':
        if (query.guest_id) {
          const response = await axios.get(`${API_BASE_URL}/guests/${query.guest_id}`);
          return res.status(200).json(response.data);
        } else {
          const response = await axios.get(`${API_BASE_URL}/guests`);
          return res.status(200).json(response.data);
        }

      case 'POST':
        const createResponse = await axios.post(`${API_BASE_URL}/guests/`, req.body);
        return res.status(201).json(createResponse.data);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
