import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

const client = axios.create({
  baseURL: `http://127.0.0.1:${process.env.PORT}/`,
  timeout: 1000,
  adapter,
});

export default client;
