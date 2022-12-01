"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
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
exports.Job = Job;
