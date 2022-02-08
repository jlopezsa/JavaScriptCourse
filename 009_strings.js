/** JavaScript fundamentals
 * 1st version: 07/02/2022
 * Author: Julián López
 * Aim: Strings
 */

/** Objetivo: Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).
 * console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
 * console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
 * console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
 * console.log(countingEs("Ahora qué?") === 0); // true
 * console.log(countingEs("Los elefantes son enormes") === 5) // true
*/

const str = "Los elefantes son enormes";
function countingEs(str){
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            counter = counter + 1;
        }
        
    }
    return counter;
}

console.log(countingEs(str));
console.log(countingEs(str) === 5);

