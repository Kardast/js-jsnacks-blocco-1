// Snack - 1 ------------------------------------------------
// 1# crea un array che parte vuoto ma viene riempito automaticamente di 10 numeri casuali da 1 a 1000 generati dal pc, possono esserci anche doppioni;


// const numList = [];

// const duck = document.querySelector(".try");

// for (let i = 1; i <= 1000; i++) {
// console.log(i);

//     const numbers = numList.push(i);
//     console.log(numbers);
    
// }

// for (let i = 0; i < 10; i++) {
//     let numberRandom = Math.floor(Math.random() * 1000) + 1;

//     numList.push(numberRandom);

// }

// console.log(numList);

// duck.innerHTML = numList;


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

// Snack - 3 ----------------------------------------------------
// #crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata

arrayOne = ["array1 word1","array1 word2","array1 word3","array1 word4","array1 word5"];
console.log(arrayOne);

arrayTwo = ["array2 word1","array2 word2"];
console.log(arrayTwo);

const levelOne = document.querySelector(".ul_one");
console.log(levelOne);

for (let i = 0; i < arrayOne.length; i++) {
    
    levelOne.innerHTML += 
    `
    <li>
        ${arrayOne[i]}
        <ul class="prova">
        </ul>
    </li>
    `;
}

const levelTwo = document.querySelectorAll("ul.prova");
console.log(levelTwo);

for (let iTwo = 0; iTwo < arrayTwo.length; iTwo++) {
    console.log(iTwo);
    
    levelTwo.innerHTML += 
    `
    <li>
        ${arrayTwo[iTwo]}
    </li>
    `;
    console.log(levelTwo);
}
