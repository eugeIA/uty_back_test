const PreOrder = require('../models/preorderModel')
const Categorie = require('../models/CategorieModel')

module.exports.addPreOrder = async (request, response, next) => {
    try {
        const { description, image, sender, category } = request.body
        const data = await PreOrder.create({
            description: description,
            image: image,
            category: category,
            sender: sender,
        })
        if (data) return response.status(200).json(data)
    } catch (ex) {
        next(ex)
    }
}

module.exports.getAllPreOrder = async (request, response) => {
    try {
        const categorie = await Categorie.findOne({ name: request.params.name })
        const preOrders = await PreOrder.find({ category: categorie._id })
        response.status(200).json(preOrders)
    } catch (error) {
        response.status(500).json(error)
    }
}
