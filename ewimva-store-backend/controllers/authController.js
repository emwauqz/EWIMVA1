const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/authMiddleware');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amngldwna@gmail.com',
        pass: 'dron wqtj fmrq tjay',
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Ошибка конфигурации nodemailer:', error);
    } else {
        console.log('Nodemailer готов к отправке email');
    }
});

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
            expiresIn: '24h',
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
            expiresIn: '24h', 
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

const recovery = async (req, res) => {
    const { email } = req.body;
    console.log('Запрос на восстановление пароля для:', email);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Пользователь не найден:', email);
            return res.status(400).json({ message: 'Пользователь с таким email не найден' });
        }

        const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Сгенерирован токен:', resetToken);

        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        console.log('Используемый FRONTEND_URL:', frontendUrl);

        const mailOptions = {
            from: 'amngldwna@gmail.com',
            to: email,
            subject: 'Сброс пароля для EWIMVA',
            text: `Для сброса пароля перейдите по ссылке: ${frontendUrl}/reset-password/${resetToken}`,
        };

        console.log('Отправка письма:', mailOptions);

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Ошибка отправки письма:', error);
                return res.status(500).json({ message: 'Ошибка при отправке письма' });
            }
            console.log('Письмо отправлено:', info.response);
            res.json({ message: 'Письмо для сброса пароля отправлено' });
        });
    } catch (err) {
        console.error('Ошибка в recovery:', err);
        res.status(500).json({ message: 'Ошибка при отправке письма' });
    }
};

const resetPassword = async (req, res) => {
    const { token, password } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(400).json({ message: 'Недействительный токен' });
        }

        user.password = await bcrypt.hash(password, 10);
        await user.save();

        res.json({ message: 'Пароль успешно изменён' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Недействительный или истёкший токен' });
    }
};

module.exports = { register, login, getProfile, recovery, resetPassword };