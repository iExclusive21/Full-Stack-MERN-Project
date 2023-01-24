import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

const app = express(); 

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://mannmusic10:Ripbob123@cluster0.siq7slv.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message)); 


