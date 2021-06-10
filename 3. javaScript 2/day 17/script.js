var globalVar = 'ini globalVar'
let letBarang = ' ini let barang'
const constBarang = 'ini const barang'
// const constBarang = 'pulpen'


function barang(){
var localVar = 'ini localVar'
console.log(localVar)
}
 
console.log(globalVar)
console.log(letBarang)
console.log(constBarang)
barang()
// console.log(localVar) //ini menghasilkan error
 
{
    var x = 10
}

console.log(x)

{
    let y = 12
    console.log(y)
}

// console.log(y)


let dataBarang = ['pensil', 'pulpen', 'penghapus'];

for (let i = 0; i < dataBarang.length; i++ ){
    console.log(dataBarang[i]);
} 
// -------------------------------foreach-----------------------
let db = dataBarang.forEach((benda) => {
    console.log(benda)
})
// console.log(db)// nilai tidak akan muncul karena forEach tidak bisa di return
// ------------------------map--------------------------------
let milik = dataBarang.map((saya) => {
    return `punya saya ${saya}`
   
})
console.log(milik)
// --------------------------filter--------------------------
let people = [
    {nama: 'mark', age:10},
    {nama: 'david', age:20},
    {nama: 'jon', age:30},
    {nama: 'jek', age:40},
    {nama: 'joly', age:40},
    {nama: 'joley', age:40},
    {nama: 'brew', age:50},
];

let overThatAge = people.filter((person) => {
    return person.age >= 20 && person.nama.split("")[person.nama.length - 1]==='y';
 })
console.log(overThatAge)
//  -------------------------------find--------------------------------

let foundPerson = people.find((person) => {
    return person.age > 30
});
console.log(foundPerson)

// -------------------------------every&some---------------------------

const ages = [30, 20, 25, 34, 49]

let isEvery = ages.every((age) => {
    return age > 20
});
console.log(isEvery)

let isSome = ages.some((age) => {
    return age > 20
})
console.log(isSome)

// --------------------------------reduce------------------------------

const myArray = [1,2,3,4,5]

let result = myArray.reduce((acc,val) => {
    console.log(acc);
    console.log(val);
    console.log('------------------------');
    return acc + val;
},100);

console.log(result)


