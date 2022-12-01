import { Job } from "./Job";

export class Person {
  private Job?: {
    role: string;
    salary: number;
  };
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setJob(job: Job) {
    const arrayOfValuesFromClass = Object.values(job);
    const objFromClass = {
      role: arrayOfValuesFromClass[0],
      salary: arrayOfValuesFromClass[1],
    }

    this.Job = objFromClass;
  }

  getSalary() {
    if (this.Job) {
      return this.Job.salary;
    }
  }

  work(): string {
    if (this.Job) {
      return `${this.name} работает ${this.Job.role}`;
    } else {
      return `${this.name} пока не работает`;
    }
  }
}

