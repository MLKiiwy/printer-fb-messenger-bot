import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

const client = axios.create({
  baseURL: process.env.PRINTER_API_URL,
  timeout: 5000,
  adapter,
});

export default async message =>
  client.request({
    method: 'POST',
    url: 'api/messages',
    data: { content: message },
  });
