const dotev = require('dotenv').config();
const express = require('express');


const connectDB = require('./db');
const app = express();
const cors = require('cors');

// Init Middleware
app.use(express.json());
app.use(cors());

connectDB();

//import middleware
const authMiddleware = require('./middleware/auth');

//Import Routes
const auth = require('./routes/auth');
const public = require('./routes/public');
const user = require('./routes/user');

//Define Routes
// app.get('/', (req,res) => {
//     res.json('oi')
// })
app.use(public);
app.use('/auth', auth);
app.use('/user', authMiddleware, user);
  

const port = process.env.PORT  || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});