const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
const token = req.header('Authorization')?.replace('Bearer ', '');
if (!token) {
    return res.status(401).json({ message: 'Нет токена, доступ запрещен' });
}

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
} catch (err) {
    res.status(401).json({ message: 'Токен недействителен' });
}
};

const adminMiddleware = (req, res, next) => {
if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Требуется доступ администратора' });
}
next();
};

module.exports = { authMiddleware, adminMiddleware };