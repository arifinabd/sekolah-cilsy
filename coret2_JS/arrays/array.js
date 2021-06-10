// function myfunction() {

    var car = ['Toyota', 'Volvo', 'Nissan']
    var fruits = ['pisang', ' jeruk', 'apel', 'mangga']
        
        car[0] = 'lada'

        console.log(fruits.toString('-'))
        console.log(fruits.join('-'))
        // console.log(fruits.pop())
        console.log(fruits)
        console.log(car.push('kia'))
        console.log(car)
        // console.log(fruits.shift())
        console.log(fruits)
        console.log(fruits.unshift('mengkudu'))
        console.log(fruits)

        // console.log(fruits.splice(2,0, 'anggur', 'semangka'))
        // console.log(fruits)
        
        console.log(fruits.splice(2,2, 'anggur', 'semangka'))
        console.log(fruits)

    var f1 = ['pisang, durian, mangga']
    var f2 = ['strawberry, blueberry']

    var buah = f1.concat(f2);
    console.log(buah)


        console.log(fruits.sort());
        console.log(fruits.reverse());
    

    var angka = [40, 120, 60, 59, 55, 1000, 10, 12, 25]

        console.log(angka.sort(function(a,b){return a - b}));
        console.log(angka.sort(function(a,b){return b - a}));





// }