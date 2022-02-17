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
    constructor(name,surname,age,course,begin_year){
        super(name,surname,age);
        this.course = course;
        this.begin_year = begin_year;
    }
}

class Professor extends Person{
    constructor(name, surname, age, matter, semester){
        super(name,surname,age);
        this.matter = matter;
        this.semester = semester;
    }
}

var stud = new Student('Julian','Lopez',21,'Telecommunications enginer',2019);
var prof = new Professor('Jair','Rodriguez',38,'Signals and Sysems',5);

console.log(stud.name);
console.log(`Your course is ${stud.course} and your birth year is ${stud.birthDate()}`);

console.log(`${'Professor ' + prof.name +' '+ prof.surname}`)
console.log(`${'Your matter is ' + prof.matter + ' of the ' + prof.semester + 'semester'}`)