/** JavaScript fundamentals, console input
 * File create date: 14/02/2022
 * Author: Julián López
 * Aim: Learn Class concepts 
 * References: 
 */


class Person{
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

const student = new Person(`Carlos`,`Lopez`,38);

console.log(`Hello ${student.name} ${student.surname}, you are ${student.age} years old`);