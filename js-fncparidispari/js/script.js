// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// facciamo dichiarare all'utente il suo numero da 1 a 5 e se sceglierà "Pari o Dispari"
const userNumber = parseInt(prompt (' Dammi un numero da 1 a 5'));
const userChoice = prompt ('Scegli Pari o Dispari').toLowerCase();
console.log (userChoice)
console.log('numero casuale utente', userNumber)

// Genererà un numero da 1 a 5 attraverso una function
const pcNumberChoice = pcNumber(1, 5)
console.log('numero casuale pc', pcNumberChoice)


// Funzione che dichiara un numero da 1 a 5 da parte del Computer
function pcNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Sommiamo i due numeri
const totalsum = userNumber + pcNumberChoice;
console.log ('somma totale', totalsum)


let pcChoicetest = pcEvenOrOdd (pcChoice)
console.log(pcChoicetest)
// Funzione dichiarativa della scelta del pc
function pcEvenOrOdd (pcChoice) {
    // Dovrà dichiarare se il pc sceglie pari o dispari
    if (userChoice === 'pari' ) {
        pcChoice  = 'dispari'
        console.log(pcChoice)
    } else if (userChoice === 'dispari') {
        return pcChoice = 'dispari'    
    } 

}





    
