const mongoose = require('mongoose')

const CategorieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Categories', CategorieSchema)
