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

// Snack - 1 ------------------------------------------------
// 1# crea un array che parte vuoto ma viene riempito automaticamente di 10 numeri casuali da 1 a 1000 generati dal pc, possono esserci anche doppioni;

const myArray = [];

const space = document.querySelector(".try");

for (let i = 0; i < 10; i++) {

    let randomNum = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNum);

    myArray.push(randomNum);    
}
console.log(myArray);

space.innerHTML += myArray;
