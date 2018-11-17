import client from './client';
import printer from './print';

jest.mock('./client');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('print', () => {
  it('calls printer REST api (POST /api/messages) with the message content', () => {
    printer('hello');
    expect(client.request).toHaveBeenCalledTimes(1);
    expect(client.request).toHaveBeenCalledWith({
      method: 'POST',
      url: 'api/messages',
      data: { content: 'hello' },
    });
  });
});
