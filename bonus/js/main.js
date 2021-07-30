// Esponi 5 numeri random che vengono visualizzati uno alla volta per 3 secondi.

// dopo aver visualizzato l' ultimo numero parte un timer di 10 secondi per poter inserire tutti i numeri altrimenti perdi.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Introdurre la parte di grafica oltre a quella di logica :occhiolino:





let y = 0;
const Start_nbr_rdn_pc = 0;
const End_nbr_rdn_pc = 100;
const nbr_play = 5;
let arr_nbr_rdn_pc = [];
let point = 0;

while (arr_nbr_rdn_pc.length < nbr_play) {
    nbr_rdn_pc = getRndInteger(Start_nbr_rdn_pc, End_nbr_rdn_pc);
    if (arr_nbr_rdn_pc.includes(nbr_rdn_pc) == false)
        arr_nbr_rdn_pc.push(nbr_rdn_pc);
    }
    
btn_start.addEventListener('click',

    function() {

        let z = 0;
        let clock_nbr_pc = setInterval(ClockStartFunction, 2000)
        document.getElementById('memorize').style.display = 'block';
        function ClockStartFunction() {
            document.getElementById("number_arr_pc").innerHTML = arr_nbr_rdn_pc[z];
            z++
        }

        console.log(arr_nbr_rdn_pc);

        let arr_nbr_user = [];

        setTimeout(myFunction, 12000);

        function myFunction() {
            document.getElementById('memorize').style.display = 'none';
            document.getElementById('number_arr_pc').style.display = 'none';
            for (let i = 0; i < nbr_play; i++) {
                let nbr_user = parseInt(prompt("inserisci uno dei numeri che hai visto")) 
                if (arr_nbr_user.includes(nbr_user) == false && arr_nbr_rdn_pc.includes(nbr_user) == true) {
                    arr_nbr_user.push(nbr_user);
                    point += 1;
                }
            }
            if (arr_nbr_user.length == arr_nbr_rdn_pc.length) {
                document.getElementById("result").innerHTML = 'Hai indovinato tutti i numeri! Bravo!'
                document.getElementById("point").innerHTML =  'Il tuo punteggio totale è: ' + point; 
            } else {
                document.getElementById("result").innerHTML = 'Hai sbagliato! ecco i numeri che dovevi inserire: ' + arr_nbr_rdn_pc;
                document.getElementById("point").innerHTML =  'Il tuo punteggio totale è: ' + point; 
                document.getElementById("correct_nbr").innerHTML =  'I numeri che hai inserito correttamente sono: ' + arr_nbr_user;
            }
        }

    }
)
// FUNZIONI \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// funzione che mi permette di generare dei numeri casuali tra un minimo e un massimo.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
