const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    pName: String,
    pPrice: Number,
    pStock: Number,
    pImage: String
});

const Shop = mongoose.model("Shop", productSchema);

module.exports = Shop;