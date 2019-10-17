const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHelper = require('./helpers/errorHelper');
const cors = require('cors');

require('dotenv').config();
require('./config/setup-passport');

const app = express();
const { MONGO_URI, PORT = 3000 } = process.env;

(async () => {
    const DB_PARAMS = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(MONGO_URI, DB_PARAMS);
    console.log('DB connected');
})();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes/content'));
app.use('/users', require('./routes/users'));
app.use(errorHelper);

app.listen(PORT, () => {
    console.log(`Running on the port ${PORT}`)
});