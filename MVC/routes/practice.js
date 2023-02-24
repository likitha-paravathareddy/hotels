const express =require('express')
const app = express();
app.use(express.json())
const routes= express.Router()
let cookieParser=require('cookie-parser')
app.use(cookieParser());
const cors=require("cors")
routes.use(cors())

const practiceDetail = require('../controllers/practice')

routes.post('/reg', practiceDetail.practiceRegistrationController)
routes.get('/reg', practiceDetail.practiceDataFetching)
routes.post('/login',practiceDetail.practiceDataLogin)
routes.get('/access',practiceDetail.getAcessDate)


module.exports = routes