export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log('Hello, I am '+ this.name + 
        ' and I am ' +
        this.age + 
        ' years old');
    }
}

export const TOTAL_USERS = 3;


