// 函数式编程


// 这三个高阶函数会自动遍历整个数组               !!!!!!!!!!!


const nums = [10, 20, 111, 67, 235, 89];

// 1.筛选出小于100的数据
// 原始写法

let newNum1 = [];
for (let num of nums) {
    if (num < 100) {
        newNum1.push(num)
    }
}
console.log(newNum1)


// 高阶函数filter   用于筛选符合条件的数据
let mynum1 = nums.filter(function (n) {
    return n < 100
})
console.log(mynum1)


//**********************************************************

// 2. 对筛选出来的数据 *2

// 原始写法
let newNum2 = []
for (let num of newNum1) {
    newNum2.push(num * 2)
}
console.log(newNum2)

// map高阶函数 高阶写法   用于对数组中每个元素进行相同的操作
let mynum2 = newNum1.map(function (n) {
    return n * 2
})
console.log(mynum2)

//3. 对数组的值进行求和

// 原始写法
let result = 0
for (let num of newNum2) {
    result += num
}
console.log(result)

// reduce高阶函数 ，高阶写法  ， 用于对所有的元素进行相加/减等操作

let total = newNum2.reduce(function (beforeValue,currentValue) {
    return beforeValue + currentValue;
},0)
console.log(total)



// 整体写法

let all = nums.filter(function (n) {
    return n<100
}).map(function (n){
    return n * 2
}).reduce(function (beforeVale,currentValue) {
   return beforeVale + currentValue
},0)
console.log(all)


// 整体简写
let finalResult = nums.filter(n => n<100).map(n => n*2).reduce((beforeValue,currentValue) => beforeValue + currentValue)
console.log(finalResult)