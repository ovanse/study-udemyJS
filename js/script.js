'use strict';

class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя: ${this._name}, возраст ${this._age}`);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name === 'string' && name !== '') {
            this._name = name;
            return true;
        } else {
            console.log(`Недопустимое значение!`);
            return false;
        }
    }
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
            return true;
        } else {
            console.log(`Недопустимое значение!`);
            return false;
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan.age = 300;
console.log(ivan.age);

ivan.say();
