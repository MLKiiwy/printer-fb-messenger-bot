import client from './client';

describe('client', () => {
  it('returns an axios client with correct config', () => {
    expect(client.defaults).toMatchObject({
      baseURL: process.env.PRINTER_API_URL,
      timeout: 5000,
    });
  });
});
