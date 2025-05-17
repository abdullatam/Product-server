import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Listening to this PORT http://localhost:${PORT}`);
});
