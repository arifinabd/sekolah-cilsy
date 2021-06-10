function myfunction(){
    document.getElementById('controlFlow').innerHTML = 'lets do that'


    var ulang = true
    while(ulang){
          console.log(' hallo world ')
          ulang = confirm('lagi???')
     } // untuk menghentikan loop berdasarkan aksi dari user

    var nilaiAwal = 1
    while(nilaiAwal <=10){
        console.log('hello world')
        nilaiAwal++ //(nilaiAwal = nilaiAwal + 1)
    } //untuk menghentikan loop berdasarkan program (bukan dari user)
     

    var nilaiAwal = 1
    while(nilaiAwal <=10){
        console.log('hello word' + nilaiAwal + 'x')
        nilaiAwal++
    }

    // latihannnnnnn
    var jmlhAngkot = 10
    var noAngkot = 1 

    while(noAngkot <=jmlhAngkot){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    noAngkot++
    }

    

}