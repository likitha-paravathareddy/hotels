const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const placeDetail = require('../controllers/places')

routes.post('/reg', placeDetail.upload,placeDetail.placeRegistrationController)
routes.get('/reg', placeDetail.placeDataFetching)


module.exports = routes