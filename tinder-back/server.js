import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb+srv://codeka:fiRFElLg4VGmI7q3@cluster0.v5c9g.mongodb.net/?retryWrites=true&w=majority"

// Middlewares

app.use(express.json())

// Db configure
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Api enpoints

app.get('/', (req, res) => res.status(200).send("Hello from back"))
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    } )
})
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
// Listener

app.listen(port, () => console.log(`listening of localhost ${port}`))

