/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// function that check str is palindrome or not
function controlloParolaPalindroma() {
    let lunghezza = myArrayParola.length;
    for (let  i = 0; i < lunghezza  ; i++) {
        if (myArrayParola[i] == myArrayParola[lunghezza - 1 - i]) {
            return true;
        }
    }
    return false;
}


let parola = prompt('inserisci una parola');
let myArrayParola = [];

for(i = 0 ; i < parola.length; i++){
    myArrayParola.push(parola[i]);
    console.log(parola[i]);
}





if (controlloParolaPalindroma(parola)) {
    document.write("La Parola è Palindroma");
} else {
    document.write("La Parola non è Palindroma");
}