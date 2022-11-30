const Provider = require('../models/providerModel')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const config = require('../config/jwt')

module.exports.login = async (request, response, next) => {
    try {
        const { username, password } = request.body
        const user = await Provider.findOne({ username })
        if (!user) {
            return response.json({
                msg: 'Incorrect Username or Password',
                status: false,
            })
        } else {
            const payload = {
                id: user.id,
                name: user.username,
                expire: Date.now() + 1000 * 60 * 60 * 24,
            }
            const token = jwt.encode(payload, config.jwtSecret)

            bcrypt.compare(password, user.password).then((valid) => {
                if (!valid) {
                    response.status(401).json('invalid password or username')
                } else {
                    delete user.password
                    response.json({
                        status: true,
                        user,
                        token: `Bearer ${token}`,
                    })
                }
            })
        }
        // if (!isPasswordValid)
        //   return res.json({ msg: "Incorrect Username or Password", status: false });
        // delete user.password;
        // return res.json({ status: true, user });
    } catch (ex) {
        next(ex)
    }
}

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const usernameCheck = await Provider.findOne({ username })
        if (usernameCheck)
            return res.json({ msg: 'Username already used', status: false })
        const emailCheck = await Provider.findOne({ email })
        if (emailCheck)
            return res.json({ msg: 'Email already used', status: false })
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await Provider.create({
            email,
            username,
            password: hashedPassword,
        })
        delete user.password
        return res.json({ status: true, user })
    } catch (ex) {
        next(ex)
    }
}

module.exports.updateCount = async (request, response, next) => {
    try {
        const provider = await Provider.findByIdAndUpdate({ _id: request.params.id},
            {$set : {username: request.body.username, email:request.body.email, category: request.body.selectedOptions}},
        )
        response.status(200).json(provider)
        console.log(provider)
    }catch (ex){
        next(ex)
    }
}


module.exports.logOut = (req, res, next) => {
    try {
        if (!req.params.id) return res.json({ msg: 'User id is required ' })
        Provider.delete(req.params.id)
        return res.status(200).send()
    } catch (ex) {
        next(ex)
    }
}
