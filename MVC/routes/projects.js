const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())

const projectDetail = require('../controllers/projects')

routes.post('/tourists', projectDetail.projectRegistrationController)
routes.get('/tourists', projectDetail.projectDataFetching)


module.exports = routes