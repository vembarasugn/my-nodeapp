

// const getAllProductsStatic = async (req,res) => {
//     throw new Error ('Testing async errors') // it handles error without having try, catch using express package
//     res.status(200).json({msg:'product testing routes'})
// }

// const getAllProducts = async (req,res) => {
//     res.status(200).json({msg:'product routes'})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }

 /* Custom async error */


// const getAllProductsStatic = async (req,res) => {
//     //throw new Error ('Testing async errors') // it handles error without having try, catch using express package
//     res.status(200).json({msg:'product testing routes'})
// }

// const getAllProducts = async (req,res) => {
//     res.status(200).json({msg:'product routes'})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }

//To find product in a database -  having feature property

// const Product = require('../models/product')


// const getAllProductsStatic = async (req,res) => {
//     const products = await Product.find({
//       featured:true,
//     })
//     res.status(200).json({products, nbHits: products.length})
// }

// const getAllProducts = async (req,res) => {
//     res.status(200).json({msg:'product routes'})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }

 /* To find product in a database -  having name property */

 
// const Product = require('../models/product')


// const getAllProductsStatic = async (req,res) => {
//     const products = await Product.find({
//       name:'albany table',
//     })
//     res.status(200).json({products, nbHits: products.length})
// }

// const getAllProducts = async (req,res) => {
//     //console.log(req.query)
//     const products = await Product.find(req.query)
//     res.status(200).json({products, nbHits: products.length})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }

/* product that have feature values to find and using ternary operator along with in if condition */


// const Product = require('../models/product')


// const getAllProductsStatic = async (req,res) => {
//     const products = await Product.find({
//       name:'albany table',
//     })
//     res.status(200).json({products, nbHits: products.length})
// }

// const getAllProducts = async (req,res) => {
//     const { featured } = req.query 
//     const queryObject = {}
//     if(featured) {
//         queryObject.featured = featured === 'true'? true : false  
//     }
//     console.log(queryObject)
//     const products = await Product.find(queryObject)
//     res.status(200).json({products, nbHits: products.length})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }


/* product that have feature,company etc.. values to find and using ternary operator along with in if condition */


// const Product = require('../models/product')


// const getAllProductsStatic = async (req,res) => {
//     const products = await Product.find({
//       name:'albany table',
//     })
//     res.status(200).json({products, nbHits: products.length})
// }

// const getAllProducts = async (req,res) => {
//     const { featured,company,name} = req.query 
//     const queryObject = {}
//     if(featured) {
//         queryObject.featured = featured === 'true'? true : false  
//     }
//     if(company) {
//         queryObject.company = company
//     }
//     if(name) {
//         queryObject.name = name
//     }
//     console.log(queryObject)
//     const products = await Product.find(queryObject)
//     res.status(200).json({products, nbHits: products.length})
// }

//  module.exports = {
//      getAllProductsStatic,
//      getAllProducts,
//  }


 /* regex example - refer regex web docs from mongoDB (searching properties usind a letters eg.'a','ab')*/


//  const Product = require('../models/product')
 
 
//  const getAllProductsStatic = async (req,res) => {
//      const search ='a'
//      const products = await Product.find({
//        name:{ $regex: search, $options:'i'},
//      })
//      res.status(200).json({products, nbHits: products.length})
//  }
 
//  const getAllProducts = async (req,res) => {
//      const {featured,company,name} = req.query 
//      const queryObject = {}
//      if(featured) {
//          queryObject.featured = featured === 'true'? true : false  
//      }
//      if(company) {
//          queryObject.company = company
//      }
//      if(name) {
//          queryObject.name = { $regex: name, $options:'i'}
//      }
//      console.log(queryObject)
//      const products = await Product.find(queryObject)
//      res.status(200).json({products, nbHits: products.length})
//  }
 
//   module.exports = {
//       getAllProductsStatic,
//       getAllProducts,
//   }

/* Search sorts name,price properties that starts with alphabetical a to z  and price highest to lowest using'.sort('name price')' method */

  
 const Product = require('../models/product')
 
 
 const getAllProductsStatic = async (req,res) => {
     const products = await Product.find({}).sort('name price')
     res.status(200).json({products, nbHits: products.length})
 }
 
 const getAllProducts = async (req,res) => {
     const {featured,company,name, sort} = req.query 
     const queryObject = {}
     if(featured) {
         queryObject.featured = featured === 'true'? true : false  
     }
     if(company) {
         queryObject.company = company
     }
     if(name) {
         queryObject.name = { $regex: name, $options:'i'}
     }
     //console.log(queryObject)
     let result = Product.find(queryObject) 
     if(sort){
         const sortList = sort.split(',').join('');
         result = result.sort(sortList)
     }
     else{
         result = result.sort('createdAt')
     }
     const products = await result
     res.status(200).json({products, nbHits: products.length})
 }
 
  module.exports = {
      getAllProductsStatic,
      getAllProducts,
  }




