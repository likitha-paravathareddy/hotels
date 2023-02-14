const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const hotelDetail = require('../controllers/hotels')

routes.post('/reg', hotelDetail.hotelRegistrationController)
routes.get('/reg', hotelDetail.hotelDataFetching)
routes.post('/updates',hotelDetail.hotelDataUpdating)
routes.post('/updatesreg',hotelDetail.hotelDataUpdatingreg)

module.exports = routes