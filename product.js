const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    color: String,
    category: String
});

module.exports = mongoose.model('products', productSchema);