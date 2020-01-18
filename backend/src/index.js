require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DB_LINK, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());

app.use(express.json());

//rotas
app.use(routes);


//app listen
app.listen(3333); 