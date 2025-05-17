// routes/products.js
import express from 'express';
const router = express.Router();

// In-memory product array
let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

// GET all products
router.get('/', (request, response) => {
    response.json(products);
});

// GET product by ID
router.get('/:id', (request, response) => {
    const product = products.find(p => p.id === parseInt(request.params.id));

    if (product) {
        response.json(product);
    } else {
        response.status(404).json({ message: '404 Product NOT found' });
    }
});

// POST new product
router.post('/', (request, response) => {
    const { name, price } = request.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    response.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', (request, response) => {
    const product = products.find(p => p.id === parseInt(request.params.id));

    if (product) {
        const { name, price } = request.body;
        if (name) product.name = name;
        if (price) product.price = price;
        response.json(product);
    } else {
        response.status(404).json({ message: '404 Product NOT found' });
    }
});

// DELETE product
router.delete('/:id', (request, response) => {
    const index = products.findIndex(p => p.id === parseInt(request.params.id));

    if (index !== -1) {
        products.splice(index, 1);
        response.status(204).send();
    } else {
        response.status(404).json({ message: '404 Product NOT found' });
    }
});

export default router;
