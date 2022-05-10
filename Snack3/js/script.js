// Snack - 3 ----------------------------------------------------
// #crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata

arrayOne = ["array1 word1","array1 word2","array1 word3","array1 word4","array1 word5"];
console.log(arrayOne);

arrayTwo = ["array2 word1","array2 word2"];
console.log(arrayTwo);

const levelOne = document.querySelector(".ul_one");
console.log(levelOne);

for (let i = 0; i < arrayOne.length; i++) {
    
    const newLi = document.createElement("li");
    const newUl = document.createElement("ul");

    console.log(newLi);
    console.log(newUl);


    levelOne.append(newLi);
    newLi.append(arrayOne[i]);
    newLi.append(newUl);

    for (let iTwo = 0; iTwo < arrayTwo.length; iTwo++) {
        
        const newLiTwo = document.createElement("li");
        console.log("questo è", newLiTwo);

        newUl.append(newLiTwo);
        newLiTwo.append(arrayTwo[iTwo]);
    }
}