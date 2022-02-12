/** JavaScript fundamentals
 * 1st version: 07/02/2022
 * Author: Julián López
 * Aim: Functions
 */

console.log('------Función nombrada ------------')
// Función nombrada
function hello(name = "Mundo") {    // 'Mundo' is default parameter 
    return "Hello " + name;
}

console.log(hello("Julián"));   // hello function with parameter
console.log(hello());           // hello function without parameter

console.log('----- Función anónima -------------')
// Función anónima
var hola = function (city = 'Bogotá') {     // Bogotá is a default parameter
    return "Hello " + city;
}
console.log(hola("Medellín"))
console.log(hola());

/*console.log('----- Función anónima como parámetro -------------');
setInterval(function(){
    console.log("Hola Julián");
},1000);*/

console.log('----- Función que retorna otra función -------------');
var hello2 = function (name = 'Mundo') {
    return function () {        // <--- Return function
        return "Hola " + name;
    };
};
var invocando = hello2("Jair");
console.log(invocando());


console.log('----- Scope de las variables -------------');
function suma(a, b) {
    var resultado = a + b;    // al usar VAR la variable resultado puede ser accesada fuera de la función.
}
suma(3, 8);
console.log(`la suma de 3 + 8 = ${resultado}`);