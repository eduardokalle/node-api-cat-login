import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('User Endpoints', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
      console.log('Conected a MongoDB');
    })
    .catch((err) => {
      console.error('Error connected  MongoDB:', err);
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        userlastname:'testuser',
        phone:'3125556660',
        email: 'testuser@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
  });

  it('should login the user', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
