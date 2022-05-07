import express from 'express';
import mongoose from 'mongoose';
import { serverName, port } from '../config/serverConfig';
import { connString } from '../config/dbConfig';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
var cors = require('cors')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Extended https:swagger.io
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`I'm ${serverName}, I'm running`)
});



app.use('/api/users', require('./routes/users/controllers'));
app.use('/api/auth', cors(corsOptions) , require('./routes/Auth/controllers'));
app.use('/api/article', require('./routes/Articles/controller'));
// app.use('/api/article', require('./routes/article/controllers'));



// connect to database
mongoose.connect(connString, () =>{
    console.log('Connected is database');
});


// start listening
app.listen(port, () =>{
    console.log(`${serverName} is listening on ${port}`);
});

// mongodb+srv://aslan:aslan@cluster0.eh41r.mongodb.net/calenbine?retryWrites=true&w=majority