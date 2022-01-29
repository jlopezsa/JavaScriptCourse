const express = require("express");
const app = express();

// (property) Application<Record<string, any>>.get: ((name: string) => any) & IRouterMatcher<Express, any>
app.get("/",(req,res)=>{
    res.send("<h1>Hola Julian Lopez</h1>")
});

// Turn on the server
// (method) Application<Record<string, any>>.listen(port: number, hostname: string, backlog: number, callback?: () => void): Server (+5 overloads)

app.listen(3000,()=>console.log("Listening on port 3000 ... "));

