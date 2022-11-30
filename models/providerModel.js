const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
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
    location: {
        type: String,
        min: 100,
    },
    category: {
        type: Array,
        min: 50,
    },
})

module.exports = mongoose.model('Providers', providerSchema)
