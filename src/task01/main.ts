import { Job } from "./Job";
import { Person } from "./Person";

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