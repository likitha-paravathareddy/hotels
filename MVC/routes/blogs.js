const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const blogDetail = require('../controllers/blogs')

routes.post('/reg',blogDetail.upload,blogDetail.blogRegistrationController)
routes.get('/reg', blogDetail.blogDataFetching)
routes.post('/updates',blogDetail.blogDataUpdating)
routes.post('/updateviews',blogDetail.blogDataViewUpdating)


module.exports = routes