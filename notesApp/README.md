# Notes-application with JavaScript

* Install Express (minimal and flexible Node.js web application framework)
* Create JSON file (package.json and package-lock.json)
* Create the express application (index.js)
* Nodemon library, it is used to haven't got to restart the server manually. This library is installed through the sentence: *npm install -g nodemon* 
* * Index.js has got to run with the sentence *nodemon index.js*
* * (problem...) la ejecución de scripts está deshabilitada en este sistema.
* * Set-ExecutionPolicy RemoteSigned -Force
* * Executed nodemon index.js
* * Only is required refresh the browser to update the changes made into index.js

# Adding a request 

```Javascript
app.get("/",(req,res)=>{
    const name = req.query.name;
    const age = req.query.age;

    res.send(`<h1>Hello ${name}, you are ${age} years old</h1>`);
});
```


<img src="./figures/req_example_undefined.png" width="250"/>

<img src="./figures/req_example_defined_values.png" width="250"/>

# Routes parameters

```JavaScript
app.get("/users/:name",(req,res)=>{
    const name = req.params.name;
    res.send(`<h1>Hola ${name}</h1>`)
})
```
<img src="./figures/req_example_defined_values_routes.png" width="250"/>
<img src="./figures/req_example_defined_values_routes_2.png" width="250"/>


# Showing statics files

```JavaScript
app.use(express.static("public"));
```

<img src="./figures/new_folder_require.png" width="250"/>
<img src="./figures/browser_static_file_figure.png" width="250"/>