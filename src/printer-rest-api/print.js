import client from './client';

export default async message =>
  client.request({
    method: 'POST',
    url: 'api/messages',
    data: { content: message },
  });
