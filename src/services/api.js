import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api-url.com', // Replace this with the URL of your backend API
});

export default api;

