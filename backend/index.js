const connectToMongo=require('./db');
var cors = require('cors') 
connectToMongo();

const express = require('express')
const port=5000
const app = express()
app.use(express.json())
app.use(cors())
//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/products',require('./routes/products'))
app.use('/api/cart',require('./routes/cart'))
app.use('/api/orderitem',require('./routes/orderitem'))


app.listen(port, () => {
    console.log(`CookiMookie backend listening at http://localhost:${port}`)
})