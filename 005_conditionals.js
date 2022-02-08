/** JavaScript fundamentals
 * 1st version: 07/02/2022
 * Author: Julián López
 * Aim: Conditionals
 */

/**Objetivo: escribir un programa que imprima El número es igual a 8 si el número asignado a la variable number es 8, e imprima No es 8 si es diferente de 8. */

console.log(`-------------------------------------------------------`)
console.log("Objetivo: escribir un programa que imprima El número es igual a 8 si el número asignado a la variable number es 8, e imprima No es 8 si es diferente de 8.")
var number = 8;

if(number === 8){
    console.log(`The number is ${number}`);
}else{
    console.log(`The number isn't ${number}`);
}

/**Objetivo: Escribir nuevamente el programa del reto anterior, utilizando la sintaxis del operador condicional terniario. */
console.log(`-------------------------------------------------------`)
console.log("Objetivo: Escribir nuevamente el programa del reto anterior, utilizando la sintaxis del operador condicional terniario.");
number === 8 ? console.log(`The number is ${number}`) : console.log(`The number isn't ${number}`);

/**Objetivo: Escribir un programa que imprima Buenos días si el número asignado a la variable time es menor que 12. Si el numero es mayor o igual a 12 y menor o igual a 18, el programa debe imprimir Buenas tardes, de lo contrario debe imprimir Buenas noches. */

console.log(`-------------------------------------------------------`)
console.log("Objetivo: Escribir un programa que imprima Buenos días si el número asignado a la variable time es menor que 12. Si el numero es mayor o igual a 12 y menor o igual a 18, el programa debe imprimir Buenas tardes, de lo contrario debe imprimir Buenas noches.");

var time = 23;

if (time <12) {
    console.log("Good morning");
}else{
    if (time>=12 && time<=18) {
        console.log("Good afternoon");
    }else{
        console.log("Good evening");
    }
}
