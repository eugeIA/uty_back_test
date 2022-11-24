const mongoose = require('mongoose')

const order_productSchema = new mongoose.Schema({
    provider_name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Provider',
    },
    provider_location: {
        type: String,
        unique: true,
        max: 50,
    },
    phone: {
        type: Number,
        max: 30,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
})

module.exports = mongoose.model('Order_products', order_productSchema)
