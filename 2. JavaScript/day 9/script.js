function luasLingkaran(diameter){
    var r = diameter / 2
    var cekJari = r % 7

if (cekJari == 0) {
    var phi = 22/7
} else {
    var phi = 3.14
}

var luas = phi * r * r

return luas
}


function onSubmit() {

    var number_1 = document.getElementById('number_1').value
    var number_2 = document.getElementById('number_2').value    
    document.getElementById('demo').innerHTML = luasLingkaran(number_1) 
    document.getElementById('demo2').innerHTML = luasPersegi(number_1, number_2)
    document.getElementById('demo3').innerHTML = luasSegitiga(number_1, number_2)
    document.getElementById('demo4').innerHTML = volumeKubus(number_1) 
    document.getElementById('demo5').innerHTML = volumeTabung(number_1, number_2)

    var LLingkaran =  document.getElementById('demo').innerHTML = luasLingkaran(number_1)
    var LPersegi = document.getElementById('demo2').innerHTML = luasPersegi(number_1, number_2)
    var LSegitiga = document.getElementById('demo3').innerHTML = luasSegitiga(number_1, number_2)
    var VKubus = document.getElementById('demo4').innerHTML = volumeKubus(number_1) 
    var Vtabung = document.getElementById('demo5').innerHTML = volumeTabung(number_1, number_2)

    document.write('hasil luas lingkaran adalah ' + LLingkaran + '<br>')
    document.write('hasil luas persegi adalah ' + LPersegi + '<br>')
    document.write('hasil dari Luas segitiga adalah ' + LSegitiga + '<br>')
    document.write('hasil dari volume kubus adalah ' + VKubus + '<br>')
    document.write('hasil dari volume tabung adalah ' + Vtabung + '<br>')

}

function luasPersegi (panjang, lebar){
    return panjang * lebar
}

function luasSegitiga (alas, tinggi){
    var luas = alas * tinggi / 2

return luas
}

function volumeKubus (sisi){
    var volume = sisi * sisi * sisi

return volume
}

function volumeTabung (jari, tinggi){
    var cekJari = jari % 7

if (cekJari == 0) {
    var phi = 22/7
} else {
    var phi = 3.14
}

var volume = phi * jari * jari * tinggi

return volume
}

