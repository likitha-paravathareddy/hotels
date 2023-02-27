const mongoose=require('mongoose')
const url="mongodb+srv://hotellier:hotellier123@hotels.0yyc1ag.mongodb.net/test"

mongoose.connect(url)
mongoose.Promise=global.Promise;

const db=mongoose.connection;
db.on('error',console.error.bind(console,'DB Error: '))

module.exports={db,mongoose}