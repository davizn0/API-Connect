import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Connect está no ar 🚀' });
});

app.use('/users', usersRoutes);

export default app;