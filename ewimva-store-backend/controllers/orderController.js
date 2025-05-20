const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

const createOrder = async (req, res) => {
const { products, shippingAddress } = req.body;
try {
let totalAmount = 0;
for (const item of products) {
    const product = await Product.findById(item.productId);
    if (!product) {
    return res.status(404).json({ message: `Товар ${item.productId} не найден` });
    }
    totalAmount += product.price * item.quantity;
}

const order = new Order({
    user: req.user.id,
    products: products.map(item => ({
    product: item.productId,
    quantity: item.quantity,
    })),
    totalAmount,
    shippingAddress,
});

await order.save();

// Clear user's cart
const user = await User.findById(req.user.id);
user.cart = [];
await user.save();

res.status(201).json(order);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const getUserOrders = async (req, res) => {
try {
const orders = await Order.find({ user: req.user.id }).populate('products.product');
res.json(orders);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const getAllOrders = async (req, res) => {
try {
const orders = await Order.find().populate('user').populate('products.product');
res.json(orders);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const updateOrderStatus = async (req, res) => {
const { status } = req.body;
try {
const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
);
if (!order) {
    return res.status(404).json({ message: 'Заказ не найден' });
}
res.json(order);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

module.exports = { createOrder, getUserOrders, getAllOrders, updateOrderStatus };