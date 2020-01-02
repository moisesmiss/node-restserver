require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('./routes/usuario'))

mongoose.connect(`mongodb://localhost:27017/cafe`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    (err) => {
        if(err) throw err;
        console.log('database connected')
    }
)
 
app.listen(process.env.PORT, () => {
    console.log('listen port', process.env.PORT)
})