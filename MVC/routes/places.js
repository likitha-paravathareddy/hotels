const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const placeDetail = require('../controllers/places')

routes.post('/reg', placeDetail.placeRegistrationController)
routes.get('/reg', placeDetail.placeDataFetching)


module.exports = routes