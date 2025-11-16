const express = require('express');
const router = express.Router();
const GroceryItem = require('../models/GroceryItem');

router.post('/add', async (req, res) => {
    try {
        const item = new GroceryItem(req.body);
        await item.save();
        res.json({ message: 'Grocery item added successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/all', async (req, res) => {
    const items = await GroceryItem.find();
    res.json(items);
});

module.exports = router;
