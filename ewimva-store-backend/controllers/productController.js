const Product = require('../models/Product');

const getProducts = async (req, res) => {
try {
const { category, gender, isNewArrival } = req.query;
const query = {};
if (category) query.category = category;
if (gender) query.gender = gender;
if (isNewArrival) query.isNewArrival = isNewArrival === 'true';

const products = await Product.find(query);
res.json(products);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const getProductById = async (req, res) => {
try {
const product = await Product.findById(req.params.id);
if (!product) {
    return res.status(404).json({ message: 'Товар не найден' });
}
res.json(product);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const addProduct = async (req, res) => {
const { name, description, price, category, gender, image, stock, isNewArrival } = req.body;
try {
const product = new Product({
    name,
    description,
    price,
    category,
    gender,
    image,
    stock,
    isNewArrival,
});
await product.save();
res.status(201).json(product);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const updateProduct = async (req, res) => {
try {
const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!product) {
    return res.status(404).json({ message: 'Товар не найден' });
}
res.json(product);
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const deleteProduct = async (req, res) => {
try {
const product = await Product.findByIdAndDelete(req.params.id);
if (!product) {
    return res.status(404).json({ message: 'Товар не найден' });
}
res.json({ message: 'Товар удален' });
} catch (err) {
res.status(500).json({ message: 'Ошибка сервера' });
}
};

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };