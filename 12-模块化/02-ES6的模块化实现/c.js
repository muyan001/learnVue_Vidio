import {flag, num1, sum} from "./a.js";


var result = sum(10,90)
console.log(result)



import {Person,mul,Animal} from "./a.js"



mul(10,20)

const person = new Person();
person.run()


const animal = new Animal();
console.log(animal.name);
animal.eat()


// 导入默认值（默认值永远只有一个） 导入的时候也就不需要大括号了，同时也可以改名字

import address from "./a.js"
console.log(address)


// 导出所有的变量  as all 就是取别名 类似于 mysql中的重命名
import * as all from "./a.js"

const pers =  new all.Person();
pers.run()