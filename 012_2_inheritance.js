/** JavaScript fundamentals, console input
 * File create date: 15/02/2022
 * Author: Julián López
 * Aim: Learn Class Inheritage concepts 
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

class Student extends Person{
    constructor(name,surname,age,profission,begin_year){
        super(name,surname,age);
        this.profission = profission;
        this.begin_year = begin_year;
    }
}

var stud = new Student('Julian','Lopez',38,'Eng',2019);

console.log(stud.name);
console.log(`Your profession is ${stud.profission} and your birth year is ${stud.birthDate()}`);