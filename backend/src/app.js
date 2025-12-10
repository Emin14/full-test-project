const express = require('express')
const cors = require('cors')
const tourRouter = require('./routes/tourRoutes.js'); 

const app = express()

app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.use('/api', tourRouter); 


module.exports = app