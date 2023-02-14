const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const vendorDetail = require('../controllers/vendors')

routes.post('/reg',vendorDetail.upload, vendorDetail.vendorRegistrationController)
routes.get('/reg', vendorDetail.vendorDataFetching)
routes.post('/updates',vendorDetail.vendorDataUpdating)
routes.post('/updatesreg',vendorDetail.vendorDataUpdatingreg)


module.exports = routes