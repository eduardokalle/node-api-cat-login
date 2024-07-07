import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import catRoutes from './routes/catRoutes';
import cors from 'cors'

dotenv.config();

var corsOptions = {
  origin:'*', 
  credentials:true,        
  optionSuccessStatus:200,
};

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', userRoutes);
app.use('/', catRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API test');
});

mongoose.connect(process.env.MONGO_URI!)
.then(() => {
  console.log('Conected a MongoDB');
})
.catch((err) => {
  console.error('Error connected  MongoDB:', err);
});

export default app;
