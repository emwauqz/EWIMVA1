const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name: { type: String, required: true },
description: { type: String },
price: { type: Number, required: true },
category: { type: String, required: true },
gender: { type: String, enum: ['women', 'men'], required: true },
image: { type: String },
stock: { type: Number, default: 0 },
isNewArrival: { type: Boolean, default: false }, // Изменено с isNew
createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);