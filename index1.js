// import bodyparser from "body-parser";
import superheroes from "superheroes";
import express from "express";

// express application instance
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    let name = superheroes.random();
    //here, we send a formatted html content to the client-side
    res.send(`<h1>Behold, I am ${name} and I'm gonna kick yo butt</h1>`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
})
