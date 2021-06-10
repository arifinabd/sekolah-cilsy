// for loop
var mobil = ['honda', 'hyundai', 'fiat', 'toyota', 'hino'];

var container ='';

for (var i = 0; i < mobil.length; i++) {
    console.log(mobil[i])
    container += mobil[i] + ',';
}

console.log(container)


var motor = ['supra', 'revo', 'pcx', 'vario', 'beat'];

var container ='';

for (var i = 0; i < motor.length; i++) {
    console.log(motor[i])
    container += motor[i] + ',';
}

console.log(container)

// while loop
var motor = ['supra', 'revo', 'pcx', 'vario', 'beat'];
var i = 0;

while (i < motor.length){
    console.log(motor[i]);

    i++;
}

// do loop
var mobil = ['honda', 'hyundai', 'fiat', 'toyota', 'hino'];
var i = 0;

do {
    console.log(mobil[i]);
    i++;
}

while(i < mobil.length)
