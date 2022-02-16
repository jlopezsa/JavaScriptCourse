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
    birthDate(){
        const date = new Date();    // Date{} is a JS class
        const this_moment = date.getFullYear();
        return this_moment - this.age;
    }
}

const student = new Person(`Carlos`,`Lopez`,38);

console.log(`Hello ${student.name} ${student.surname}, you are ${student.age} years old`);
console.log(`You birth date is ${student.birthDate()}`)