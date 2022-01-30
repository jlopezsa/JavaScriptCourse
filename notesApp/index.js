const express = require("express");
const app = express();

// (property) Application<Record<string, any>>.get: ((name: string) => any) & IRouterMatcher<Express, any>
app.get("/",(req,res)=>{
    const name = req.query.name;
    const age = req.query.age;

    res.send(`<h1>Hello ${name}, you are ${age} years old</h1>`);
});

app.get("/users/:name",(req,res)=>{
    const name = req.params.name;
    res.send(`<h1>Hola ${name}</h1>`)
})

// Creating routes (Routing in Express): the routs 
app.post("/users",(req,res)=>{
    // HTTP states codes: https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
    //res.status(404).send("No se encontró el recurso");
    res.sendStatus(404).send("Not found");
})

// Turn on the server
// (method) Application<Record<string, any>>.listen(port: number, hostname: string, backlog: number, callback?: () => void): Server (+5 overloads)
app.listen(3000,()=>console.log("Listening on port 3000 ... "));

