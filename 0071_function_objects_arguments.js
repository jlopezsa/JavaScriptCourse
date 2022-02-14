/** JavaScript fundamentals, Object arguments
 * 1st version: 12/02/2022
 * Author: Julián López
 * Aim: Functions
 */

var square = function(a){
    return a**2;
}

var op = function(op,v1,v2){
    console.log(`Value of arguments: ${arguments}`);
    console.log(arguments);                         // Arguments is an object. Aruments object has all parameters of the function
    console.log(arguments.callee.name);             // With Callee get the name function     
    //console.log('caller: '+arguments.callee.caller);
    if(op=="Square"){
        return square(v1)
    }
}
op("Square",2,4)
console.log(`End example`);