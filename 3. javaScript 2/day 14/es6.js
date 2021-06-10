// function
function hello() {
    return 'hallo world'
}                   /* function dengan nama */
console.log(hello())

function jumlah() {
    let num1 = 4
    let num2 = 5
    return num1 + num2
}
console.log(jumlah())

let hello2 = function(){
    let num1 = 6
    let num2 = 10
    return num1 + num2
}                  /* function tanpa nama, dengan expresion */
console.log(hello2()) 

/* contoh */
function add(x, y) {
    return x * y
}
console.log(add(5, 5))

let getscoreText = function
    (name = 'arifin', score = 0){
        return name + 'score : ' + score
    }
console.log(getscoreText('ucok', 50))



// template literal
let name = 'ucok'
let lastName = 'baba'
let fullname = `nama saya ${name} ${lastName}`
console.log(fullname)

let total = `10 + 12 = ${10 + 12}`
console.log(total)

let theBook = {
    title: 'belajar programer',
    author: 'michele black'
}
let colorBook = ['black']
let fontStyle = ['arial']

let info = `judul buku : ${theBook.title}, author : ${theBook.author}, warna : ${colorBook[0]}, font style : ${fontStyle[0]}` 
console.log(info)




//foreach
// let kuantiti = [1, 2, 3, 4]
// let k = kuantiti.forEach(function())

// map
let numbers = [1, 2, 3, 4]
let n = numbers.map(function(number){
    return number * 2
})

let n2 = numbers.forEach(function(number){
    return numbers * 2
})
console.log(numbers)
console.log(n)
console.log(n2)



// arrow function
// es5 (yg lama)
function test5() {
    console.log('hallo es5')
}
// es6
const test6 = () => {
    console.log('hallo es6')
}
test5()
test6()
/*contoh*/
const men = [
    {name: 'sule', age: 45},
    {name: 'andre', age: 40},
    {name: 'parto', age: 50},
]
/*es5*/
const filterMen1 = men.filter(function(val){ return val.age > 40
})
/*es6*/
const filterMen = men.filter((val) => val.age > 40)
console.log(filterMen1)
console.log(filterMen)



// every atau some
const computers = [
    {name: 'apple', ram: 24},
    {name: 'asus', ram: 4},
    {name: 'acer', ram: 16},
]
console.log(
    computers.every(computer => computer.ram > 8)
)
console.log(
    computers.every(computer => computer.ram > 3)
)
console.log(
    computers.some(computer => computer.ram > 20)
)



// filter
const human = [
    {name: 'mark', age: 20},
    {name: 'noble', age: 30},
    {name: 'joe', age: 12},
]
const filterPeople = human.filter(function(val){
    return val.age > 13
})      /*berbeda dengan find, filter mencari semua data*/
console.log(filterPeople)



// find & findIndex
const peoples = [
    {name: 'mark', age: 10},
    {name: 'jhon', age: 20},
    {name: 'bob', age: 30},
]
const findPeople = peoples.find(val => val.age > 10) /*berbeda dengan filter, find hanya mencari data yang pertama*/
const findIndexPeople = peoples.findIndex(val => val.age ===10)
/*findIndex hanya menghasilkan nilai index saja*/
console.log(findPeople)
console.log(findIndexPeople)



// contoh data To do
const toDos = [
    {kegiatan: 'jalan-jalan', status: false},
    {kegiatan: 'kerja', status: true},
    {kegiatan: 'makan', status: false},
    {kegiatan: 'mandi', status: false},
]
const getToDo = (dataToDo) => {
    return dataToDo.filter((val) => !val.status)
}
console.log(getToDo(toDos))



// destructuring
const fruit = ['tomato', 'watermelon', 'melon']
const [buah1, buah2, buah3] = fruit /*penamaan index bebas, urutan tetap sama*/
console.log(buah2) /*hasilnya watermelon*/

const toyota = {
    silver: 'avanza',
    black: 'fortuner',
    red: 'yaris',
}
const {silver, black, red} = toyota/*penamaan object harus sesuai dengan data*/
console.log(red) /*hasilnya yaris*/



// spread operator 
const arr1 = [11, 12, 13]
const arr2 = [16, 17, 18]
const allArr = [...arr1, ...arr2]
console.log(allArr)

const motor = [
    {
        merek: 'honda',
        type: 'beat'
    },
    {
        merek: 'yamaha',
        type: 'rx king',
    },
]
const addMotor = [...motor, {merek: 'kawasaki', type: 'tinja'}]
console.log(addMotor)



// reduce
const angka = [10, 20, 30]
let sum = 0
for (let i = 0; i < angka.length; i++) {
    sum += angka[i];
}

let sum2 = angka.reduce((sum, number) => {
    return sum + number
}, 5)
console.log(sum)
console.log(sum2) /* menggunakan reduce */







