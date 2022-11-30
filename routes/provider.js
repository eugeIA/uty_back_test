const {
    login,
    register,
    logOut,
    updateCount,
   
} = require('../controllers/ProviderController')

const router = require('express').Router()

router.post('/login', login)
router.post('/register', register)
router.get('/logout/:id', logOut)
router.put('/updateCount/:id', updateCount)


module.exports = router
