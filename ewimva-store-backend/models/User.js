const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
role: { type: String, enum: ['user', 'admin'], default: 'user' },
address: { type: String },
phone: { type: String },
birthDate: { type: Date },
gender: { type: String, enum: ['женский', 'мужской'] },
favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
cart: [{
productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
quantity: { type: Number, default: 1 }
}],
createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);