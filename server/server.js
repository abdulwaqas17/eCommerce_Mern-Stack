let express = require('express');
let app = express();
require('dotenv').config();
let authRouter = require('./routes/authRoutes');
let connectDB = require('./config/db');
let cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes')

app.use(express.json());

app.use(cors()); 

// to connect mongo db
app.use('/uploads', express.static('uploads')); 
connectDB();

app.use('/auth',authRouter);
app.use('/home',productRouter); 
app.use('/',userRouter); 


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));

