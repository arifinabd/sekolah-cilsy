//  PERSONNNN
var person = {
    nama: 'ocit',
    umur: '23',
    gender: 'pria',
    tinggi: '168 cm',
    berat: '67 kg'
}

var nama = 'gender'
var newName = 'name'

console.log(person.nama)
person.nama = 'jepri'
console.log(person.nama)
console.log(person.umur)
console.log(person.gender)
console.log(person.tinggi)
console.log(person.berat)
console.log(person['nama'])
console.log(person[nama])

console.log(newName)
console.log('ini tampilan tinggi sebelum di delete ' + person.tinggi)
console.log(' ini tampilan tinggi setelah di delete ' + delete person.tinggi)


// CARRRR
var car = new Object() ;
car.nama = 'toyota';
car.warna = 'merah';
car.bahanBakar ='bensin';
car.pelumas = 'shell';
car.suspensi = 'per daun'

// car.nama = 'honda'
// var newName = 'nama'

console.log(car.nama)
car.nama = 'honda'
console.log('setelah di ubah '+ car.nama)
var newName = 'nama'
console.log(car.warna)
console.log(car.bahanBakar)
console.log(car.pelumas)
console.log(car.suspensi)
console.log(car.nama)
console.log('ini cara mengeluarkan nama dengan index ' + car['nama'])
console.log('ini cara mengeluarkan nama dengan index variable ' + car[newName])

console.log(delete car.suspensi)

// ANIMAALLLL
var animal ={
    omnivora: 'kucing',
    karnivora: 'harimau',
    opovivipar: 'belalang',
    unggas: 'ayam',
    serangga: 'lalat'
}
var Name = 'unggas'

console.log(animal.karnivora)
animal.karnivora = 'macan'
console.log(animal.karnivora)
console.log(animal.omnivora)
console.log(animal.opovivipar)
console.log(animal.unggas)
console.log(animal.serangga)
console.log(animal['omnivora'])
console.log(animal[Name])

console.log(delete animal.serangga)

// COMPUTERRR
var computer ={
    hardware: 'keyboard',
    Software: 'VGA card',
    Power: 'Power supply',
    Kabel: 'Kabel LAN',
    internet: 'modem'
}
var newname= 'internet'

console.log(computer)
console.log(computer.hardware)
computer.hardware = 'monitor'
console.log(computer.hardware)
computer.lampu = 'LED'
console.log(computer)
console.log(computer['internet'])// menggunakan index
console.log(computer[newname])// menggunakan index variabel

console.log(delete computer.Software)
console.log(computer)








