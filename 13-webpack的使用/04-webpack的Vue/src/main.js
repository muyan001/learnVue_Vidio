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


// vue步骤2：引用vue
import Vue from 'vue'

// import App from './vue/app.js'

// import App from "./vue/App.vue"
import App from "./vue/App.vue";



// vue文件演进2
// const App = {
//     template:`
//         <div>
//           <h2>{{message}}</h2>
//           <button @click="btnclick">按钮</button>
//         </div>
//         `,
//     data(){
//         return{
//             message:'你好，重庆'
//         }
//     },
//     methods:{
//         btnclick() {
//             console.log(1233333)
//         }
//     }
//
// }



const app = new Vue({

    el:"#app",


    template:'<App/>',

    // vue文件演进1
    //     `
    // <div>
    //   <h2>{{message}}</h2>
    //   <button @click="btnclick">按钮</button>
    // </div>
    // `,
    data:{
        // message:'你好，重庆'
    },
    methods:{
        // btnclick() {
        //     console.log(1233333)
        // }
    },
    components:{
        App
    }


})