const {
    addPreOrder,
    getAllPreOrder,
} = require('../controllers/PreOrderController')
const router = require('express').Router()

router.post('/addpre', addPreOrder)
router.get('/addpre/', (req, res) => res.send('Hello'))
router.get('/getpre', getAllPreOrder)

module.exports = router
