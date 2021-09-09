// 使用commonjs的模块化规范
const {add,sub} = require('./mathUtil')
console.log(add(3,5))



// 使用es6的模块化规范
import {Persion} from "./dataInfo";
const person = new Persion();
console.log(person.name);
person.eat()

