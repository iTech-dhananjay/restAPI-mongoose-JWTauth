require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//My routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const paymentBRoutes = require('./routes/paymentBRoutes');

//DB Connection : [[https://mongoosejs.com/docs/index.html]]

main().catch((err) => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/plax-dev-copy', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
     });
     console.log('Database connected');
}

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//My Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', paymentBRoutes);

//PORT
const port = process.env.PORT || 8050;

//Starting a server
app.listen(port, () => {
     console.log(`app is running at ${port}`);
});
