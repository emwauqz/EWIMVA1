const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/authMiddleware');

const register = async (req, res) => {
const { name, email, password, address, phone, birthDate, gender } = req.body;
try {
let user = await User.findOne({ email });
if (user) {
    return res.status(400).json({ message: 'Пользователь уже существует' });
}

user = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    address,
    phone,
    birthDate,
    gender,
});

await user.save();

const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
});

res.json({ token, user: { id: user._id, name, email, role: user.role, address, phone, birthDate, gender } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const login = async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) {
    return res.status(400).json({ message: 'Неверные данные' });
}

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
    return res.status(400).json({ message: 'Неверные данные' });
}

const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
});

res.json({ 
    token, 
    user: { 
    id: user._id, 
    name: user.name, 
    email, 
    role: user.role, 
    address: user.address,
    phone: user.phone,
    birthDate: user.birthDate,
    gender: user.gender
    } 
});
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Ошибка сервера' });
}
};

const getProfile = [authMiddleware, async (req, res) => {
try {
const user = await User.findById(req.user.id).select('-password');
res.json(user);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Ошибка сервера' });
}
}];

module.exports = { register, login, getProfile };