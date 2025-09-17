import axios from 'axios';
import setupMockAdapter from '../services/mockAdapter';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const NODE_ENV = import.meta.env.VITE_API_NODE_ENV;
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

if (NODE_ENV === 'development') {
  setupMockAdapter(apiClient);
}

export default apiClient;