import { User } from "./user";

const user = new User('Dmitry', 'Zaytsev');
console.log(user.sayHi());

//node dist/bundle.js