const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const preOrderRoutes = require('./routes/preOrder')
const providerRoutes = require('./routes/provider')
const app = express()
const passport = require('passport')

require('./config/passport')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    

app.get("/", (req, res) => {
    return res.send("Hello word")
})
app.use('/api/auth', authRoutes)
app.use('/api/preOrder', preOrderRoutes)
app.use('/api/provider', providerRoutes)

const server = app.listen(process.env.PORT, () =>
    console.log(`Server started on ${process.env.PORT}`)
)
