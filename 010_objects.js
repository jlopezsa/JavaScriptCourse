/** JavaScript fundamentals
 * 1st version: 08/02/2022
 * Author: Julián López
 * Aim: Objects
 */

/**Objetivo: Crear un programa que imprima el objeto recipe. Este objeto cuenta con las siguientes propiedades:
leche en polvo, 1 litro
chocolate en barra, 3 barras
azúcar, 3 gramos
 */
console.log(`--------------------- Exercise -------------------`)
console.log(`Crear un programa que imprima el objeto recipe. Este objeto cuenta con las siguientes propiedades: 
- leche en polvo, 1 litro
- chocolate en barra, 3 barras
- azúcar, 3 gramos`);

const recipe = {
    leche_en_polvo: "1 litro",
    chocolate_en_barra: "3 barras",
    azucar: "3 gramos"
}

const llaves = Object.keys(recipe);
var llaves_new = new Array();
llaves_new = [];

for (const key in llaves) {
    llaves_new.push(replaceSpecificCharacter(llaves[key],'_',' '));
}

function replaceSpecificCharacter(str,str_char,str2replace){           // <<----- Interesting function ------
    str = str.replace(str_char,str2replace); 
    while (str.indexOf(str_char)!==-1) { // loop to replace "_" to " ". Insert space
        str = str.replace(str_char,str2replace);
    }
    // str is a vector without space character
    return str;
}

for (const key in llaves) {
    console.log(`Agrega ${recipe[llaves[key]]} de ${llaves_new[key]}`);
}

console.log(`--------------------- Exercise -------------------`);
console.log(`Simplifying the before exercise`);

const new_recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "3 gramos"
}

for (const key in new_recipe) {
    if (new_recipe.hasOwnProperty(key)){
        console.log("Agrega " + new_recipe[key] + " de " + key);
    }
}