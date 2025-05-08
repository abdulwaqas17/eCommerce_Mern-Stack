let express = require('express');
let app = express();
require('dotenv').config();
let authRouter = require('./routes/authRoutes');
let connectDB = require('./config/db');
let cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const dashboardRouter = require('./routes/dashboardRoutes'); 
const orderRouter = require('./routes/orderRoutes');
const verifyRouter = require('./routes/verifyRoute');

app.use(express.json());

app.use(cors()); 

// to connect mongo db
connectDB();

app.use('/',verifyRouter);
app.use('/auth',authRouter);
app.use('/',productRouter); 
app.use('/dashboard',dashboardRouter); 
app.use('/',userRouter); 
app.use('/',orderRouter); 


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));


// 9 - 10 = 0
// 10 - 11 = 
// 11 - 12 = 


