// have to create product model for product deatil
// details like rating ,comments , brand name, category, offer, etc

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {},
    brandName: {},
    category: {},
    offer: {},
    ratings: {},
    comments: {}

})

module.export = mongoose.model('Order', ProductSchema);