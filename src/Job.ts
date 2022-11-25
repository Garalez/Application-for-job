class Job {
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

class Person {
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

const person1: Person = new Person('Влад');
const person2: Person = new Person('Иван');
const person3: Person = new Person('Сергей');

const pushJob: Job = new Job('push');
const pullJob: Job = new Job('pull');

person1.setJob(pushJob);
console.log('person1: ', person1.work());

person2.setJob(pullJob);

person3.setJob(pushJob);

console.log(person2);
console.log(person3);




