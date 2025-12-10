const express = require('express');
const router = express.Router();
const { getTours} = require('../controllers/tourController');

// Все пути здесь ОТНОСИТЕЛЬНЫЕ (без /api)
router.get('/tours', getTours);        // Будет: GET /api/tours

module.exports = router;