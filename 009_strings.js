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
console.log(`--------------------- Exercise -------------------`)
console.log(`Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).`);
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

console.log(`--------------------- Exercise -------------------`)

/**Objetivo: Escribir una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada: */
console.log(`Escribir una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:`);
console.log(`- Remplaza las mayúsculas por minúsculas.
- Elimina los espacios en blanco.
- Remplaza el caracter "a" por "4".
- Remplaza el caracter "e" por "3".
- Remplaza el caracter "i" por "1".
- Remplaza el carater "o" por "0".`)

var str_user = "esta es una prueba";

function contrasena(str){
    str = str.replace(" ",""); 
    while (str.indexOf(' ')!==-1) { // loop to replace " " to "". Delete black space
        str = str.replace(" ","");
    }
    // str is a vector without space character
    for (const i in str) {
        switch (str[i]) {
            case 'a':
                str = str.replace('a','4');                    
                break;
            case 'e':
                str = str.replace('e','3');                    
                break;
            case 'i':
                str = str.replace('i','1');                    
                break;
                case 'o':
                str = str.replace('o','0');                    
                break;
                default:
                    break;
                }
    }
    return str;
}

console.log(`The password is: ${contrasena(str_user)}`); 

/**
 *Objetivo: Escribir una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena (cambie a mayúscula la letra inicial).
 */
console.log(`--------------------- Exercise -------------------`)
console.log(`Objetivo: Escribir una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena (cambie a mayúscula la letra inicial).`);

var str_message = "julian lópez";   // original message

console.log(str_message);               // Printing original message
console.log(capitalizar(str_message));  // Calling capitalizar function and printting message.

function capitalizar(str){              // Function used to capitalizar a string
    vec_str = str.split(" ");           // Split function divides the string into a vector. Each vector position in a word of the string
    vec_upper = [];
    for (let i = 0; i < vec_str.length; i++) {
        vec_upper.push(vec_str[i].replace(vec_str[i][0],vec_str[i][0].toUpperCase()));  // Uppercase function is used to uppercase the first letter of the word. 
                                                                                        // Replace function is used to replace the lower case to capital letter.
                                                                                        // Push function is used to prench an empty vector (vec_upper)
    }
    return vec_upper.join(" ");         // Join function is used to join the words of the vector. The words are joined with a character " "
}

