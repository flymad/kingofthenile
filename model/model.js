const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    pName: String,
    pPrice: Number,
    pStock: Number,
    pImage: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;