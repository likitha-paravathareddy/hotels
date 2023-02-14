const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const userRoutes = require('./routes/users')

app.use('/users', userRoutes)

const queryRoutes = require('./routes/queries')

app.use('/queries', queryRoutes)

const serviceRoutes = require('./routes/services')

app.use('/services', serviceRoutes)

const placeRoutes = require('./routes/places')

app.use('/places', placeRoutes)

const projectRoutes = require('./routes/projects')

app.use('/projects', projectRoutes)

const hotelRoutes = require('./routes/hotels')

app.use('/hotels', hotelRoutes)

const vendorRoutes = require('./routes/vendors')

app.use('/vendors', vendorRoutes)

const imageRoutes = require('./routes/images')

app.use('/images', imageRoutes)

const blogRoutes=require('./routes/blogs')

app.use('/blogs',blogRoutes)
// console.log("hotelRoutes")
app.listen(3007, ()=>{
  console.log("running on port number 3007")
})