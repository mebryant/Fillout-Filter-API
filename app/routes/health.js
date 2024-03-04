const express = require('express');
const router = express.Router();

router.get('/health', async (req, res) => {
    res.send('UP');
});