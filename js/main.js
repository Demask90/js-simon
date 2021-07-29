// Esponi 5 numeri generati casualmente.

// Da li parte un timer di 10 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Introdurre la parte di grafica oltre a quella di logica :occhiolino:



setTimeout (myFunction, 10000);
let y = 0;
let Start_nbr_rdn_pc = 0;
let End_nbr_rdn_pc = 100;
let nbr_play = 5;
let arr_nbr_rdn_pc = [];

while (y < nbr_play) {
    nbr_rdn_pc = getRndInteger(Start_nbr_rdn_pc, End_nbr_rdn_pc);
    let check_nbr_rdn_pc = contains(arr_nbr_rdn_pc, nbr_rdn_pc)
    if (check_nbr_rdn_pc == false) {
        arr_nbr_rdn_pc.push(nbr_rdn_pc);
    y++;
    }
}

document.getElementById("number_arr_pc").innerHTML = arr_nbr_rdn_pc;

console.log(arr_nbr_rdn_pc);

let arr_nbr_user = [];

function myFunction() {

    for (let i = 0; i < nbr_play; i++) {
        document.getElementById('number_arr_pc').style.display = 'none';
        let nbr_user = parseInt(prompt("inserisci uno dei numeri che hai visto")) 
        let check_nbr_user = contains(arr_nbr_user, nbr_user)
        let check_nbr_user_pc = contains(arr_nbr_rdn_pc, nbr_user)
        if (check_nbr_user == false && check_nbr_user_pc == true) {
            arr_nbr_user.push(nbr_user);
        y++;
        }
    }
    if (arr_nbr_user.length == arr_nbr_rdn_pc.length) {
        alert('Hai indovinato tutti i numeri! Bravo!')
    } else 
        alert('Hai sbagliato! ecco i numeri che dovevi inserire: ' + arr_nbr_rdn_pc)
}




// FUNZIONI \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// funzione che mi permette di generare dei numeri casuali tra un minimo e un massimo.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
// funzione che mi permette di verificare se i numeri non siano già stati usati all' interno di uno specifico array.
function contains(a, obj) {
    for (var i = 0; i < a.length; i++)
        if (a[i] === obj) 
            return true;

        return false;
}