const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getUserOrders);
router.get('/all', [authMiddleware, adminMiddleware], orderController.getAllOrders);
router.put('/:id', [authMiddleware, adminMiddleware], orderController.updateOrderStatus);

module.exports = router;