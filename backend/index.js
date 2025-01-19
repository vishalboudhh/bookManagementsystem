import express, { request, response } from "express";
import { PORT,mongoURL } from './config.js';
import mongoose from "mongoose";
import { Book } from "./model/BookModels.js";
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'
const app = express();

//middleware for parsing req body
app.use(express.json());

//Middleware for handling CORS POLICY

app.use(
    cors({
        origin: 'http://localhost:5173', // Allow requests from the frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'], // Include necessary headers
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send(`welcome`)

});

app.use('/books',bookRoute);



mongoose.connect(mongoURL)
        .then(()=>{
            console.log(`App connected to database`);
            app.listen(PORT, () => {
                console.log(`App is listening to the port :${PORT}`);
            })
        })
        .catch((error)=>{
            console.log(error);  
        });