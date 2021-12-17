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

let pariDispari = prompt("Pari o Dispari?")//chiediamo all utente di scegliere tra pari o dispari;







let numeroUtente = '';
let numeroAI = '';
let somma = 0;


if((pariDispari =='Pari') ||(pariDispari =='pari') ||(pariDispari =='Dispari') ||(pariDispari =='dispari')){ //se l'utente inserisce una di queste parole entriamo nel ciclo
    numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"))
    numeroAI = Math.floor(Math.random() * 5 +1);
    somma = sommaNumeri(numeroUtente, numeroAI);

    //innerhtml dei numeri
    let numeroUtentDiv = document.querySelector('.numeroUtente')
    numeroUtentDiv.innerHTML = "NUMERO UTENTE" +":" + numeroUtente;
    let numeroAIDiv = document.querySelector('.numeroAI')
    numeroAIDiv.innerHTML = "NUMERI AI" +":" + numeroAI;
    let numeroSommaDiv = document.querySelector('.Somma')
    numeroSommaDiv.innerHTML = "SOMMA DEI NUMERI" +":" + somma;

    //console log dei numeri e della somma
    console.log("Numero scelto dall utente"+ ":" +numeroUtente)
    console.log("Numero scelto dall AI"+ ":" +numeroAI)
    console.log("Somma del numero utente e numeri AI" + ":" + somma)
    
    
}else{
    alert("RIPROVA")
}
if((pariDispari =='Pari') ||(pariDispari =='pari') && (somma%2 == 0)){
    let vintoDiv = document.querySelector('.Vinto')
    vintoDiv.innerHTML = "Hai vinto!";
}else if((pariDispari =='dispari') ||(pariDispari =='Dispari') && (somma%2 != 0)){
    let vintoDiv = document.querySelector('.Vinto')
    vintoDiv.innerHTML = "Hai vinto!";
}else{
    let persoDiv = document.querySelector('.Perso')
    persoDiv.innerHTML = "Hai perso!";
}











