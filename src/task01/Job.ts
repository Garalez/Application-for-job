import { Person } from "./Person";

export class Job {
  private role: 'push' | 'pull';
  private salary: number = 0;

  constructor(role: 'push' | 'pull') {
    this.role = role;
    if (role === 'pull') {
      this.salary = 1000;
    }
    if (role === 'push') {
      this.salary = 1500;
    }
  }

  get Salary(): string {
    return `Зарплата: ${this.salary}$`;
  }

  public work(personName: string): string {
    return `${personName} сейчас работает как ${this.role}`;
  }
}
