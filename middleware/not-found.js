/* To set custok 404 error - once set this , open browser to chekc unknown routes it will display the below msg*/ 

// const notFound = (req,res) => {
//     res.status(404).send('Route does not exist')
// }

// module.exports = notFound 


const notFound = (req,res) => res.status(404).send( 'Route does not exit')


module.exports = notFound


