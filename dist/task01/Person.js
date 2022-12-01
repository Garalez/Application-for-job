"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    Job;
    name;
    constructor(name) {
        this.name = name;
    }
    setJob(job) {
        const arrayOfValuesFromClass = Object.values(job);
        const objFromClass = {
            role: arrayOfValuesFromClass[0],
            salary: arrayOfValuesFromClass[1],
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
exports.Person = Person;
