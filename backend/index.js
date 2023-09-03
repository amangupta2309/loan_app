const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./app')
require('dotenv').config()
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sever is running on Port${port}`);
});