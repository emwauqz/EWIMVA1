const User = require('../models/User');

const addToFavorites = async (req, res) => {
const { productId } = req.body;
try {
const user = await User.findById(req.user.id);
if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
if (!user.favorites.includes(productId)) {
    user.favorites.push(productId);
    await user.save();
}
res.json(user.favorites);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};

const removeFromFavorites = async (req, res) => {
const { productId } = req.body;
try {
const user = await User.findById(req.user.id);
if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
user.favorites = user.favorites.filter(id => id.toString() !== productId);
await user.save();
res.json(user.favorites);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};

const addToCart = async (req, res) => {
const { productId, quantity } = req.body;
try {
const user = await User.findById(req.user.id);
if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
user.cart = user.cart || [];
const existingItem = user.cart.find(item => item.productId.toString() === productId);
if (existingItem) {
    existingItem.quantity = quantity;
} else {
    user.cart.push({ productId, quantity });
}
await user.save();
res.json(user.cart);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};

const removeFromCart = async (req, res) => {
const { productId, clearAll } = req.body;
try {
const user = await User.findById(req.user.id);
if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
if (clearAll) {
    user.cart = [];
} else {
    user.cart = user.cart.filter(item => item.productId.toString() !== productId);
}
await user.save();
res.json(user.cart);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};

module.exports = { addToFavorites, removeFromFavorites, addToCart, removeFromCart };