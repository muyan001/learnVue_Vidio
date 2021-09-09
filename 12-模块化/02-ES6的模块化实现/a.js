var name="小明"
var flag = true

var age = 18
function sum(num1,num2){
    return num1 + num2
}

if(flag){
    console.log("这是a.js")
}



// 步骤2：导出模块中变量
// 导出方式1：
export {
    flag,sum
}

// 导出方式2：

export var num1=100
export var num2=200


// 导出方式3：导出函数和类
export function mul(num1,num2){
    return num2 * num1
}

// 类  es6的类的写法
export class Person{
    // class 写法为es6的写法
    run(){
        console.log("奔跑")
    }
}


// 类 es5的类的写法
export function Animal(){
    this.name = "cat";
    this.eat = function (){
        console.log("吃饭")
    };
    function dunk(){
        console.log()
    }
}


// 导入方式4：导入默认  export default（一个模块只能使用一次）

const newAddress = "西永";
export default newAddress





