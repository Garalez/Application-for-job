"use strict";
class Job {
    role;
    salary = 0;
    constructor(role) {
        this.role = role;
        if (role === 'pull') {
            this.salary = 1000;
        }
        if (role === 'push') {
            this.salary = 1500;
        }
    }
    get Salary() {
        return `Зарплата: ${this.salary}$`;
    }
    work(personName) {
        return `${personName} сейчас работает как ${this.role}`;
    }
}
class Person {
    Job;
    name;
    constructor(name) {
        this.name = name;
    }
    setJob(job) {
        const arrayOfValues = Object.values(job);
        const objFromClass = {
            role: arrayOfValues[0],
            salary: arrayOfValues[1],
        };
        this.Job = objFromClass;
    }
    getSalary() {
        if (this.Job) {
            return this.Job.salary;
        }
    }
    work() {
        if (this.Job) {
            return `${this.name} работает ${this.Job.role}`;
        }
        else {
            return `${this.name} пока не работает`;
        }
    }
}
const person1 = new Person('Влад');
const person2 = new Person('Иван');
const person3 = new Person('Сергей');
const pushJob = new Job('push');
const pullJob = new Job('pull');
person1.setJob(pushJob);
console.log('person1: ', person1.work());
person2.setJob(pullJob);
person3.setJob(pushJob);
console.log(person2);
console.log(person3);
