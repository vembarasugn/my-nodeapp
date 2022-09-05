
// // display error message - builtIn
// const errorHandler = async ( err,req, res, next) => {
//     return res.status(500).json({msg:err})
// }

// module.exports = errorHandler


// display error message - builtIn
const errorHandler = async ( err,req, res, next) => {
    console.log(err)
    return res.status(500).json({msg:'Something went wrong , please try again'})
}

module.exports = errorHandler



