const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const serviceDetail = require('../controllers/services')

routes.post('/reg', serviceDetail.serviceRegistrationController)
routes.get('/reg', serviceDetail.serviceDataFetching)


module.exports = routes