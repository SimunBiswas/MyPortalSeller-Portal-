const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    ProductName: {},
    orderedBY: {},
    date: {},
    time: {},
})

module.export = mongoose.model('Order', OrderSchema);