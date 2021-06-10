function myFunction(){
    document.getElementById('if&else').innerHTML = 'good luck!!!!'


    var jmlhAngkot = 10
    var angkotBeroperasi = 6
    var noAngkot = 1

     
    // for (var noAngkot = noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ){

    //   if( noAngkot <= angkotBeroperasi ){
    //     console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik')
    // } else {
    //     console.log('Angkot no ' + noAngkot + ' tidak beroperasi dengan baik')
    // }
    // }

// penggunaan else if

    // for (var noAngkot = noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ){

    //     if( noAngkot <= angkotBeroperasi){
    //      console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik')
    //  } else if (noAngkot === 8) {
    //      console.log('Angkot no ' + noAngkot + ' sedang lembur')
    //  } else {
    //      console.log('Angkot no ' + noAngkot + ' tidak beroperasi dengan baik')
    //  }
    //  }

// penggunaan else if lebih dari satu

    // for (var noAngkot = noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ){

    //    if( noAngkot <= angkotBeroperasi){
    //     console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik')
    // } else if (noAngkot === 8 || noAngkot === 10) { // penggunaan else if lebih dari 1 bisa di kombinasikan dengan operator logika || (atau)
    //     console.log('Angkot no ' + noAngkot + ' sedang lembur')
    // } else {
    //     console.log('Angkot no ' + noAngkot + ' tidak beroperasi dengan baik')
    // }
    // }


// cara lainnya penggunaan else if lebih dari satu

    for (var noAngkot = noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ){

        if( noAngkot <= angkotBeroperasi && noAngkot !== 5 ){ // penggunaan operator logika && (dan)
         console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik')
     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
         console.log('Angkot no ' + noAngkot + ' sedang lembur')
     } else {
         console.log('Angkot no ' + noAngkot + ' tidak beroperasi dengan baik')
     }
     }
}