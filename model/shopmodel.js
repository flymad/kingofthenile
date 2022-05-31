const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema(
    {
        pname : {type: String},
        pprice : {type: Number},
        pstock : {type: Number},
        pImage: {type: String}
    });

    const Shop = mongoose.model('Shop', shopSchema);

    module.exports = Shop;