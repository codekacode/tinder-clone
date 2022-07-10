import express from "express";
import mongoose from "mongoose";

// App config

const app = express();
const port = process.env.PORT || 8001;

// Middlewares

// Db configure

// Api enpoints

app.get('/', (req, res) => res.status(200).send("Hello from back"))

// Listener

app.listen(port, () => console.log(`listening of localhost ${port}`))