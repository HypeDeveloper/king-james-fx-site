const express = require('express')
const dotenv = require('dotenv').config()
const { errHandler } = require('./middleware/errorMiddleWare')
const {connectDB} = require('./config/db')
const port = process.env.PORT || 5000 



const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errHandler);


// route for user
app.use('/users', require('./routes/userRouts'))




connectDB();
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})