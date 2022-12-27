const express = require('express')
const dotenv = require('dotenv').config()
const {errHandler} = require('./middleware/errorMiddleWare')
const port = process.env.PORT || 5000 

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/users', require('./routes/userRouts'))

app.use(errHandler);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})