// import bodyparser from "body-parser";
import superheroes from "superheroes";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    let name = superheroes.random();
    res.send(`<h1>Behold, I am ${name}</h1>`);
})

app.listen(port, () => {
    console.timeLog(`listening on port ${port}.`);
})