const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const { errHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const cors = require('cors')
const port = process.env.PORT || 5000 



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(errHandler);
app.use(cors())


// route for users
app.use('/users', require('./routes/userRouts'))
app.use('/admin', require('./routes/adminRoutes'))



// serve Frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/king-james-fx/dist')))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'king-james-fx', 'dist', 'index.html'))
    })
} 
else {
    app.get('/', (req, res) => {
        res.send('Set env to production');
    })
}

connectDB();
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})