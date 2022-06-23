import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the Api("IMG") endpoint', () => {
  it('Using the endpoint without providing the name parameter returns 400', async () => {
    await request.get('/img').expect(400);
  });

  it('Using the endpoint with a non-existent image returns 404', async () => {
    await request.get('/img?n=Sprite').expect(404);
  });

  it('Using the endpoint with a valid img and width and height returns 200', async () => {
    await request.get('/img?n=Desert&w=400&h=400').expect(200);
  });
});
