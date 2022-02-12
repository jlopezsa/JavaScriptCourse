/** JavaScript fundamentals
 * 1st version: 07/02/2022
 * Author: Julián López
 * Aim: Functions
 */

console.log('------Función nombrada ------------')
// Función nombrada
function hello(name = "Mundo") {    // Mundo is a default parameter
    return "Hello " + name;
}

console.log(hello("Julián"));       // call function with a parameter
console.log(hello());               // call function without parameter

console.log('----- Función anónima -------------')
// Función anónima
var hola = function (city = 'Bogotá') {     // This function hasn't name, it is an anonym function
    return "Hello " + city;
}
console.log(hola("Medellín"))       // call function with a parameter
console.log(hola());                // call function without parameter

/*console.log('----- Función anónima como parámetro -------------');
setInterval(function(){
    console.log("Hola Julián");
},1000);*/

console.log('----- Función que retorna otra función -------------');
var hello2 = function (name = 'Mundo') {
    return function () {            // function to return
        return "Hola " + name;
    };
};
var invocando = hello2("Jair");
console.log(invocando());