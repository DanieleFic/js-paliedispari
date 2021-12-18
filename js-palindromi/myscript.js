/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// function that check str is palindrome or not
function controlloParolaPalindroma() { //creiamo una funzione  che mette a confronto le lettere una per una 
    let lunghezza = myArrayParola.length; //creiamo una variabile che prende in esame la lunghezza dell array che abbiamo pushato
    for (let  i = 0; i < lunghezza  ; i++) {  //creiamo un ciclo che confronta le lettere una per una 
        if (myArrayParola[i] == myArrayParola[lunghezza - 1 - i]) { //SE le lettere dell array [i] sono ugguali all array - la lunghezza della parola  -1 -([i] di ogni ciclo) da il risultato vero ed è palindroma
            return true;
        }
    }
    return false;
}


let parola = prompt('inserisci una parola'); //facciamo inserire la parola all utente 
let myArrayParola = []; //creiamo un array vuoto in cui dopo pushiamo le lettere una ad una 

for(i = 0 ; i < parola.length; i++){ //creiamo un ciclo for che per ogni giro pusha le lettere una ad una nell array
    myArrayParola.push(parola[i]);
    console.log(parola[i]);
}





if (controlloParolaPalindroma(parola)) { 
    document.write("La Parola è Palindroma");
} else {
    document.write("La Parola non è Palindroma");
}