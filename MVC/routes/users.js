const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const userDetail = require('../controllers/users')

routes.post('/reg', userDetail.userRegistrationController)
routes.get('/reg', userDetail.userDataFetching)
routes.post('/login',userDetail.userLogin)


module.exports = routes