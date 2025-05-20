const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/favorites', authMiddleware, userController.addToFavorites);
router.delete('/favorites', authMiddleware, userController.removeFromFavorites);
router.post('/cart', authMiddleware, userController.addToCart);
router.delete('/cart', authMiddleware, userController.removeFromCart);

module.exports = router;