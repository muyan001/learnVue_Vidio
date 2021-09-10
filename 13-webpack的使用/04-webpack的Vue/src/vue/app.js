// vue文件演进3

export default {
        template:`
        <div>
          <h2>{{message}}</h2>
          <button @click="btnclick">按钮</button>
        </div>
        `,
    data(){
        return{
            message:'你好，重庆'
        }
    },
    methods:{
        btnclick() {
            console.log(1233333)
        }
    }

}



// 下面这种写法也是可以的

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
//
// export default  App