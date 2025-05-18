const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authController.getProfile);
router.post('/recovery', authController.recovery);
router.post('/reset-password', authController.resetPassword);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const nodemailer = require('nodemailer'); // Для отправки email

// // Настройка транспортера для отправки email (замените на ваши данные)
// // const transporter = nodemailer.createTransport({
// // host: 'smtp.mailtrap.io',
// // port: 587,
// // auth: {
// // // user: 'your-mailtrap-username',
// // // pass: 'your-mailtrap-password',
// // pass: 'dron wqtj fmrq tjay',
// // },
// // });

// const transporter = nodemailer.createTransport({
// service: 'gmail',
// auth: {
// user: 'example@gmail.com',                 // твой Gmail
// pass: 'dron wqtj fmrq tjay',               // пароль приложения Google
// },
// });

// // Регистрация
// router.post('/register', async (req, res) => {
// const { email, password, name, phone, birthDate, gender } = req.body;
// try {
// let user = await User.findOne({ email });
// if (user) {
//     return res.status(400).json({ message: 'Пользователь уже существует' });
// }
// const hashedPassword = await bcrypt.hash(password, 10);
// user = new User({
//     email,
//     password: hashedPassword,
//     name,
//     phone,
//     birthDate,
//     gender,
//     role: 'user',
// });
// await user.save();
// const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
// res.json({ token, user: { email, name, phone, birthDate, gender, role: user.role } });
// } catch (err) {
// res.status(500).json({ message: 'Ошибка сервера' });
// }
// });

// // Вход
// router.post('/login', async (req, res) => {
// const { email, password } = req.body;
// try {
// const user = await User.findOne({ email });
// if (!user) {
//     return res.status(400).json({ message: 'Пользователь не найден' });
// }
// const isMatch = await bcrypt.compare(password, user.password);
// if (!isMatch) {
//     return res.status(400).json({ message: 'Неправильный пароль' });
// }
// const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
// res.json({ token, user: { email, name: user.name, phone: user.phone, birthDate: user.birthDate, gender: user.gender, role: user.role } });
// } catch (err) {
// res.status(500).json({ message: 'Ошибка сервера' });
// }
// });

// // Сброс пароля
// router.post('/recovery', async (req, res) => {
// const { email } = req.body;
// try {
// const user = await User.findOne({ email });
// if (!user) {
//     return res.status(400).json({ message: 'Пользователь с таким email не найден' });
// }

// // Генерация токена сброса пароля
// const resetToken = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
// // Здесь можно сохранить resetToken в базе данных с привязкой к пользователю, если требуется

// // Отправка email
// const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: email,
//     subject: 'Сброс пароля для EWIMVA',
//     text: `Для сброса пароля перейдите по ссылке: http://localhost:3000/reset-password/${resetToken}`,
// };

// await transporter.sendMail(mailOptions);
// res.json({ message: 'Письмо для сброса пароля отправлено' });
// } catch (err) {
// console.error(err);
// res.status(500).json({ message: 'Ошибка при отправке письма' });
// }
// });

// module.exports = router;
