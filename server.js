// server.js
import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use the products router
app.use('/api/products', productsRouter);

// Server Listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening to this PORT http://localhost:${PORT}`);
});
