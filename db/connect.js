
/* Connecting to MongoDB */

const mongoose = require('mongoose')

const coonectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = coonectDB