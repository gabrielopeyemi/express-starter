import express from 'express';
import mongoose from 'mongoose';
import { serverName, port } from '../config/serverConfig';
import { connString } from '../config/dbConfig';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
// import {  } from './../config';
// const {  } = serverConfig;

const app = express();


// Extended https:swagger.io
const options = {
    "swagger": "2.0",
    definition: {
        info: {
            "version": "1.0.0",
            title: `${serverName} API`,
            description: `${serverName} API infomation`,
            contact: {
                name: 'Opeyemi Famosipe',
            },
            servers: [`http://localhost:${port}`]
        }
    },
    apis: ['routes/users/controllers.ts']
};

const swaggerDoc = swaggerJSDoc(options);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));


app.get('/', (req, res) => {
    res.send(`I'm ${serverName}, I'm running`)
});



app.use('/api/users', require('./routes/users/controllers'));



// connect to database
mongoose.connect(connString, () =>{
    console.log('Connected is database');
});


// start listening
app.listen(port, () =>{
    console.log(`${serverName} is listening on ${port}`);
});

// mongodb+srv://aslan:aslan@cluster0.eh41r.mongodb.net/calenbine?retryWrites=true&w=majority