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
        const preOrders = await PreOrder.find({}).sort({ updatedAt: -1 })
        response.status(200).json(preOrders)
    } catch (error) {
        response.status(500).json(error)
    }
}

module.exports.getPreOrder = async (request, response) => {
    try {
        const preOrder = await PreOrder.findOne(request.params._id)
        response.status(200).json(preOrder)
    }catch(error) {
        response.status(500).json(error)
    }
}