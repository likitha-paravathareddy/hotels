const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())
const multer=require('multer')

const imageDetail = require('../controllers/images')

routes.post('/reg',imageDetail.upload ,imageDetail.imageRegistrationController)
routes.get('/reg', imageDetail.imageDataFetching)

module.exports = routes