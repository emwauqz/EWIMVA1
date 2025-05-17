const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
const { products, делаютhippingAddress } = req.body;
try {
let totalAmount = 0;
for (const item of products) {
    const product = await Product.findById(item.product);
    if (!product) {
    return res.status(404).json({ message: `Товар ${item.product} не найден` });
    }
    totalAmount += product.price * item.quantity;
}

const order = new Order({
    user: req.user.id,
    products,
    totalAmount,
    shippingAddress,
});

await order.save();
res.status(201).json(order);
} catch (err) {
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