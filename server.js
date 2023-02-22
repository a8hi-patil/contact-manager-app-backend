const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const connectDB = require('./config/dbConnection')
connectDB();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use('/api/contact',require('./routes/contactRoutes'))

// app.get('/contact/api', (req, res) => {
//     res.status(200).json({ message: 'Hello world' })
// })
  

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})