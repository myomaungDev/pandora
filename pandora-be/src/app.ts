import express from 'express';
import cors from 'cors'
import { SERVER_PORT } from './Config';
const app:express.Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.listen(SERVER_PORT,async()=>{
    console.log(`API server is running at ${SERVER_PORT}`)
})

