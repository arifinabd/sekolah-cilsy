function myfunction() {

    var x = 123
    var y = '123'
    var z = "123"
    var x1 = 9.656

    var res = x.toString()
    var res2 = x1.toExponential(2)
    var res3 = x1.toExponential(4)
    var res4 = x1.toExponential(6)
    var res5 = x1.toFixed(2)
    var res6 = x1.toFixed(4)
    var res7 = x1.toPrecision()
    var res8 = x1.toPrecision(2)
    var res9 = x1.toPrecision(4)
    var res10 = x1.toPrecision(6)

    console.log(res)
    console.log(res2)
    console.log(res3)
    console.log(res4)
    console.log(res5)
    console.log(res6)
    console.log(res7)
    console.log(res8)
    console.log(res9)
    console.log(res10)

    console.log(Number('10'))
    console.log(Number('  10  '))
    console.log(Number('10.33'))
    console.log(Number(true))
    console.log(Number(false))
    console.log(Number('arifin'))
    console.log(Number('10 30'))
    console.log(Number('10, 30'))
    console.log(parseInt('10 20'))
    console.log(parseInt('10 years'))
    console.log(parseInt('years 10'))
    console.log(parseInt('10.30'))
    console.log(parseFloat('10.30'))

    // document.getElementById('demo').innerHTML = parseInt('10.30')


}