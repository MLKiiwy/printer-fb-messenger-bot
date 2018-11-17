import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

export default axios.create({
  baseURL: process.env.PRINTER_API_URL,
  timeout: 5000,
  adapter,
});
