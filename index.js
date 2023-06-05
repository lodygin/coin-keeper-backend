require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddlewares = require('./middlewares/error.middleware');

const PORT = process.env.PORT || 5050;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);
app.use(errorMiddlewares);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
