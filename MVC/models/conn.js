const mongoose=require('mongoose')
const url="mongodb://localhost:27017/travels"

mongoose.connect(url)
mongoose.Promise=global.Promise;

const db=mongoose.connection;
db.on('error',console.error.bind(console,'DB Error: '))

module.exports={db,mongoose}