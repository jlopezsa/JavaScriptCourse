class Person{
    //#age
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
        this.#age = age;
        //this.profession = profession;
    }

    get age(){
        return this._age;
    }
    set age(n){
        this._age = n;
    }
    /*
    get profession(){
        return this._profession;
    }
    set profession(pro){
        this._profession = pro;
    }*/
}

const student = new Person(`Carlos`,`Lopez`);
student.age = 38;
student.profession = "Engineer";

console.log(`Hello ${student.name} ${student.surname}, you are an ${student.profession}, you are ${student.age} years old`);