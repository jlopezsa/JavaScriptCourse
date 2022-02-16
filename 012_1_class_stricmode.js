/** JavaScript fundamentals, console input
 * File create date: 15/02/2022
 * Author: Julián López
 * Aim: Learn Class strict mode concepts 
 * References: 
 * https://www.w3schools.com/js/js_class_intro.asp
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode
 * https://262.ecma-international.org/12.0/#sec-strict-mode-code
 * https://guias.makeitreal.camp/javascript-ii/scope-hoisting-closures
 */


class Computer{
    constructor(marck,cpu,memory){
        this.marck = marck;
        this.cpu = cpu;
        this.memory = memory;
    }
    printMessage(){
        'use strict';
        var message = this.marck +' '+ this.memory +' ' + this.cpu;
        return message
    }
}

const desktop = new Computer("Avell","Intel",'8G');

console.log(desktop.marck)
console.log(desktop.printMessage())

v = "¡Hola! ¡Strict mode in JavaScript!";
console.log(v)