// /nextjs/pages/api/reservations.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // FastAPI base URL

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    switch (method) {
      case 'GET':
        if (query.reservation_id) {
          const response = await axios.get(`${API_BASE_URL}/reservations/${query.reservation_id}`);
          return res.status(200).json(response.data);
        } else {
          const response = await axios.get(`${API_BASE_URL}/reservations`);
          return res.status(200).json(response.data);
        }

      case 'POST':
        const createResponse = await axios.post(`${API_BASE_URL}/reservations/`, req.body);
        return res.status(201).json(createResponse.data);

      case 'PUT':
        const updateResponse = await axios.put(`${API_BASE_URL}/reservations/${query.reservation_id}/status`, {
          status: req.body.status,
        });
        return res.status(200).json(updateResponse.data);

      case 'DELETE':
        const deleteResponse = await axios.delete(`${API_BASE_URL}/reservations/${query.reservation_id}`);
        return res.status(200).json(deleteResponse.data);

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
