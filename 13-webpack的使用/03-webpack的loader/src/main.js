// 使用commonjs的模块化规范
const {add,sub} = require('./js/mathUtil')
console.log(add(3,5))



// 使用es6的模块化规范
import {Persion} from "./js/dataInfo";
const person = new Persion();
console.log(person.name);
person.eat()


// 依赖css文件
require('./css/normal.css')

// 依赖 less文件
require('./css/special.less')
