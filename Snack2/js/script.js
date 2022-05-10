// Snack - 2 -------------------------------------------------
// #2 Crea due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di 20 numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;

// const numList = [];
// redN = document.getElementById("red");
// greenN = document.getElementById("green");


// for (let i = 0; i < 20; i++) {
//     let numberRandom = Math.floor(Math.random() * 1000) + 1;
//     numList.push(numberRandom);


//     if (numberRandom % 2 === 0) {
//         greenN.innerHTML += `<li>${numberRandom}</li>`;
 
//     } else {
//         redN.innerHTML += `<li>${numberRandom}</li>`;
//     }
    
// }
 
// console.log(numList);

// Snack - 2 -------------------------------------------------
// #2 Crea due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di 20 numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;

const myArray = [];
const redN = document.getElementById("red");
const greenN = document.getElementById("green");

for (let i = 0; i < 20; i++) {

    let randomNum = Math.floor(Math.random() * 1000) + 1;
    myArray.push(randomNum);

    if (myArray[i] % 2 === 0) {
        greenN.innerHTML += `<li>${randomNum}</li>`;
    } else {
        redN.innerHTML += `<li>${randomNum}</li>`;
    }
}

console.log(myArray);
