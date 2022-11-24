const mongoose = require('mongoose')

const PreOrderSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        category: {
            type: String,
        },
        sender: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('PreOrders', PreOrderSchema)
