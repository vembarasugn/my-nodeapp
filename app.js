
/* step:0 Checking app in console log */

//console.log('Helloe Node')


/*step:1 listening app at port 5000*/ 

// const express = require('express');
// const app = express();
// //async errors
// require('dotenv').config();
// //const connectDB = require('./db/connect')
// //const productRouter = require('./routes/product')
// const errorHandler = require('./middleware/error-handler');
// const notFound = require('./middleware/not-found');
// //asynwrapper from express package-it look afters all error handling without having try,catch in our controllers
// //require('express-async-errors')


// //middleware-json
// app.use(express.json())

// //routes
// app.get('/', (req,res) => {
//     res.send('<h1>Store API</h1><a href="/api/v1/products">Product routes</a>')
// })

// //app.use('/api/v1/products', productRouter)

// //products routes
// app.use(errorHandler)
// app.use(notFound)

// //to connect DB
// const port = process.env.PORT || 5000

// const start = async() => {
//     try {
//         //connect to DB
//         //await connectDB(process.env.MONGO_URI)
//         app.listen(port,console.log(`Server is listening ${port}...`))
//     } catch(error) {
//         console.log(error)
//     }
// }

// start()


/*step:1 listening app at port 5000*/ 
/*step:2 listening app at port 5000 and connecting mongoDB*/ 

// const express = require('express');
// const app = express();
// //async errors
// require('dotenv').config();
// const connectDB = require('./db/connect')
// //const productRouter = require('./routes/product')
// const errorHandler = require('./middleware/error-handler');
// const notFound = require('./middleware/not-found');
// //asynwrapper from express package-it look afters all error handling without having try,catch in our controllers
// //require('express-async-errors')


// //middleware-json
// app.use(express.json())

// //routes
// app.get('/', (req,res) => {
//     res.send('<h1>Store API</h1><a href="/api/v1/products">Product routes</a>')
// })

// //app.use('/api/v1/products', productRouter)

// //products routes
// app.use(errorHandler)
// app.use(notFound)

// //to connect DB
// const port = process.env.PORT || 5000

// const start = async() => {
//     try {
//         //connect to DB
//         await connectDB(process.env.MONGO_URI)
//         app.listen(port,console.log(`Server is listening ${port}...`))
//     } catch(error) {
//         console.log(error)
//     }
// }

// start()

/*step:1 listening app at port 5000*/ 
/*step:2 listening app at port 5000 and connecting mongoDB*/ 
/*step:3 Setting up routers*/ 

// const express = require('express');
// const app = express();
// //async errors
// require('dotenv').config();
// const connectDB = require('./db/connect')
// const productRouter = require('./routes/product')
// const errorHandler = require('./middleware/error-handler');
// const notFound = require('./middleware/not-found');
// //asynwrapper from express package-it look afters all error handling without having try,catch in our controllers
// //require('express-async-errors')


// //middleware-json
// app.use(express.json())

// //routes
// app.get('/', (req,res) => {
//     res.send('<h1>Store API</h1><a href="/api/v1/products">Product routes</a>')
// })

// //routes after setting controllers
// app.use('/api/v1/products', productRouter)

// //products routes
// app.use(errorHandler)
// app.use(notFound)

// //to connect DB
// const port = process.env.PORT || 5000

// const start = async() => {
//     try {
//         //connect to DB
//         await connectDB(process.env.MONGO_URI)
//         app.listen(port,console.log(`Server is listening ${port}...`))
//     } catch(error) {
//         console.log(error)
//     }
// }

// start()

/*step:4 async errors */ 


const express = require('express');
const app = express();
//async errors
require('dotenv').config();
const connectDB = require('./db/connect')
const productRouter = require('./routes/product')
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
//asynwrapper from express package-it look afters all error handling without having try,catch in our controllers
require('express-async-errors')


//middleware-json
app.use(express.json())

//routes
app.get('/', (req,res) => {
    res.send('<h1>Shoping Cart API</h1><a href="/api/v1/products">Product routes</a>')
})

//routes after setting controllers
app.use('/api/v1/products', productRouter)

//products routes
app.use(errorHandler)
app.use(notFound)

//to connect DB
const port = process.env.PORT || 5000

const start = async() => {
    try {
        //connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()