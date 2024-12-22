import express from 'express';
import cors from 'cors';

import connectDB from './db/connection.js';

// Routes
import tasksRoutes from './routes/tasksRoute.js';

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.get('/', (req, res) => {
    res.send({ message: "L'API est fonctionnelle" });
});
app.use('/api/v1/tasks', tasksRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});