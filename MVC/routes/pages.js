const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const pageDetail = require('../controllers/pages')

routes.post('/reg', pageDetail.pageRegistrationController)
routes.get('/reg', pageDetail.pageDataFetching)


module.exports = routes