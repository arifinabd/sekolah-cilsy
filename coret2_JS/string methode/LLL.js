function sSubmit (){

    var str1 = 'Aku seorang Bajak Laut mempunyai pedang panjang!'
    var str2 = 'Tapi boong'
    var str3 = '          hehehehe          '
    var str4 = 'a,b,c'
    var pos = str1.indexOf('Bajak Laut')
    var res = str1.slice(12, 22)
    var res2 = str1.substring(12, 22)
    var res3 = str1.substr(12, 10)
    var ganti = str1.replace('Laut', 'loncat')
    var kecil = str1.toLowerCase()
    var besar = str1.toUpperCase()
    var res4 = str1.concat(' ', str2)
    var res5 = str3.trim()
    var convert = str4.split(',')

    document.getElementById('demo').innerHTML = str1.length
    document.getElementById('demo2').innerHTML = pos
    document.getElementById('demo3').innerHTML = res
    document.getElementById('demo4').innerHTML = res2
    document.getElementById('demo5').innerHTML = res3
    document.getElementById('demo6').innerHTML = ganti
    document.getElementById('kecil').innerHTML = kecil
    document.getElementById('besar').innerHTML = besar
    document.getElementById('concat').innerHTML = res4
    document.getElementById('trim').innerHTML = res5
    document.getElementById('split').innerHTML = convert[0]

}

