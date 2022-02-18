/** JavaScript fundamentals, console input
 * File create date: 17/02/2022
 * Author: Julián López
 * Aim: Getters and Setters uses 
 * References: 
 * https://www.w3schools.com/js/js_class_inheritance.asp
 * 
 */

 class Person{
    constructor(name,surname,age){
        this._name = name;
        this.surname = surname;
        this.age = age;
    }
    get name(){
        return this._name;  
    }

    set name(name){
        this._name = name;
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

    getCourse(){
        return this.course;
    }

    setCourse(course){
        this.course = course;
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


console.log(`Showing values through get method`);
console.log(stud.name)  // stud.name is calling the get name(){} method

stud.name = "Emiliano"; // stud.name is calling the set name(){} method with the parameter "Emiliano"

console.log(`New student name is: ${stud.name}`);   // stud.name is calling the get name(){} method

console.log(`Showing values through the object parameter directly`);
console.log(stud._name);    // stud._name is accessing to the parameter _name. We can acces the _name parameter becaus this is a public

console.log(`${stud.getCourse()}`)
stud.setCourse("Architecture");
console.log(`${stud.getCourse()}`)