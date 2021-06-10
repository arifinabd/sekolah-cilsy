// DOM Manipulation
// DOM (document Object Model)

// // query untuk element
// const element = document.querySelector('p')
// const element = document.querySelectorAll('p')
// console.log(Element)



// // manipulasi element
// const element = document.querySelector('h1')
// element.remove()
// const element = document.querySelector('p')
// element.textContent = `${element.textContent} !`
// console.log(element)



// // menambah element
// // createElement
// // appendChild
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'ini element baru dari js'
// document.querySelector('.content').appendChild(newParagraph)
// console.log(newParagraph)



// // handling user interaksi
// // addEventListener()
// document.querySelector('button').addEventListener('click', function(e){
//     e.target.textContent = 'button clicked'
// })

// document.querySelector('#search').addEventListener('input', function(e){
//     console.log(e.target.value)
// })



// Data Storage
// LocalStorage

// // setItem metod
// localStorage.setItem('username', 'ishack')
// localStorage.setItem('password', 'test')

const userData = {
    username: 'Stephen',
    password: 'test',
    token: 'gdgdgdgd1234'
}
const cars = ['bmw', 'honda', 'nissan']
// /*perbedaan menggunakan JSON.stringify dan tidak*/
// console.log(userData)
// console.log(JSON.stringify(userData))
localStorage.setItem('userData', JSON.stringify(userData))
localStorage.setItem('cars', JSON.stringify(cars))

// getItem
const name = localStorage.getItem('username')
console.log(name)
/*manggil userData*/
const data = localStorage.getItem('userData')
console.log(JSON.parse(data)) /*membalikan bentuk object*/



// removeItem
// localStorage.removeItem('password');

// localStorage.clear()











