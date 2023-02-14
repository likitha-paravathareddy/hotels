const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const queryDetail = require('../controllers/queries')

routes.post('/reg', queryDetail.queryRegistrationController)
routes.get('/reg', queryDetail.queryDataFetching)


module.exports = routes