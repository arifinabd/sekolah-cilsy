// const nilai = [87, 84, 72, 68, 42, 54, 35, 39, 10];

// nilai.forEach((val) => {

//     if (val >= 85 && val <= 100){
//         console.log ('Nilai Kamu A')
//     }
//     else if ( val >= 70 && val <= 84){
//         console.log ('Nilai Kamu B')
//     }
//     else if (val >= 60 && val <= 69){
//         console.log ('Nilai Kamu C')
//     }
//     else if (val >= 40 && val <= 59){
//         console.log ('Nilai Kamu D')
//     }
//     else if (val >= 29 && val <= 39){
//         console.log ('Nilai Kamu E')
//     }
//     else {
//         console.log ('Nilai Kamu F')
//     }
// })


// nilai.forEach(function(val) {
// switch(true) {
//     case val >= 85 :
//         console.log ('Nilai kamu A');
//         break;
//     case val >= 70 :
//         console.log ('Nilai kamu B');
//         break;
//     case val >= 60 :
//         console.log ('Nilai kamu C');
//         break;
//     case val >= 40 :
//         console.log ('Nilai kamu D');
//         break;
//     case val >= 29 :
//         console.log ('Nilai kamu E');
//         break;
//     default :
//         console.log ('Nilai kamu F')
//         break; 
// }
// })


const nilai = [prompt('input nilai akhir')];
let grade = '';

nilai.forEach((val) => {

    if (val >= 85 && val <= 100){
        grade = 'Nilai kamu "A"'
    } else if (val >= 70 && val <= 84){
        grade = 'Nilai kamu "B"'
    } else if (val >=60 && val <= 69){
        grade = 'Nilai kamu "C"'
    } else if (val >= 40 && val <= 59){
        grade = 'Nilai kamu "D"'
    } else if (val >= 29 && val <= 39){
        grade = 'Nilai kamu "E"'
    } else { 
        grade = 'Nilai kamu "F"'
    }
})
document.write(`<p>grade anda : ${grade}</p>`);

