const app = new Vue({
    el: "#app",
    data: {

        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1

            },
            {
                id: 2,
                name: '《Unix编程艺术》',
                date: '2006-2',
                price: 59,
                count: 1

            },
            {
                id: 3,
                name: '《编程大全》',
                date: '2008-10',
                price: 178,
                count: 1

            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2011-1',
                price: 235,
                count: 1

            }
        ]
    },
    computed: {
        totalPrice() {
            let result = 0;
            // 1.第一种，普通的for循环
            // for (let i = 0; i < this.books.length; i++) {
            //     result += this.books[i].price * this.books[i].count;
            // }


            // 2. for in 循环 返回index
            // for ( let  i in this.books){
            //     result += this.books[i].price * this.books[i].count;
            // }

            //3.for of 循环 返回book
            // for(let book of this.books){
            //     result += book.price * book.count;
            // }
            // return result;


            // 4. reduce 高阶函数写法
            // return this.books.reduce((beforeValue,book)=> beforeValue + book.price * book.count)
            result   = this.books.reduce(function (beforeValue,book) {
                return beforeValue + book.price * book.count
            },0)
            return result
        }
    },
    methods: {
        add(index) {

            return this.books[index].count++
        },
        sub(index) {
            return this.books[index].count--
        },
        isShow(index) {
            return this.books[index].count <= 1
        },
        remove(index){
            this.books.splice(index,1);
        }

    },
    filters: {
        getPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})