import express from "express";
import mongoose from "mongoose";

// App config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://codeka:fiRFElLg4VGmI7q3@cluster0.v5c9g.mongodb.net/?retryWrites=true&w=majority"

// Middlewares

// Db configure
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndexes: true,
    useUnifiedTopology: true,
})

// Api enpoints

app.get('/', (req, res) => res.status(200).send("Hello from back"))

// Listener

app.listen(port, () => console.log(`listening of localhost ${port}`))

