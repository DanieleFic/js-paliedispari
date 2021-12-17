/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

function sommaNumeri(){
    let sommaDueNumeri = (numeroUtente + numeroAI);
    return sommaDueNumeri;
}

let pariDispari = prompt("Pari o Dispari?")







let numeroUtente = '';
let numeroAI = '';
let somma = 0;


if((pariDispari =='Pari') ||(pariDispari =='pari') ||(pariDispari =='Dispari') ||(pariDispari =='dispari')){
    numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"))
    numeroAI = Math.floor(Math.random() * 5 +1);
    somma = sommaNumeri(numeroUtente, numeroAI);
    console.log("Numero scelto dall utente"+ ":" +numeroUtente)
    console.log("Numero scelto dall AI"+ ":" +numeroAI)
    console.log("Somma del numero utente e numeri AI" + ":" + somma)
    
    
}else{
    alert("riprova")
}
if((somma%2 == 0)){
    console.log("hai vinto!");
}else{
    console.log("hai perso!");
}





