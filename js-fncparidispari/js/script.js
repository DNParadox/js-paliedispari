// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// facciamo dichiarare all'utente il suo numero da 1 a 5 e se sceglierà "Pari o Dispari"
const userNumber = parseInt(prompt (' Dammi un numero da 1 a 5'));
const userChoice = prompt ('Scegli Pari o Dispari').toLowerCase();
console.log ("La scelta dell'utente è " , userChoice)
console.log("Il numero scelto dall'utente è ", userNumber)

// Genererà un numero da 1 a 5 attraverso una function
const pcNumberChoice = pcNumber(1, 5)
console.log('Il numero del computer è ', pcNumberChoice)


// Funzione che dichiara un numero da 1 a 5 da parte del Computer
function pcNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Sommiamo i due numeri
const totalsum = userNumber + pcNumberChoice;
console.log ('La somma dei due numeri è ', totalsum)


const pcChoicetest = pcEvenOrOdd ('pari' , 'dispari')
console.log('scelta del pc', pcChoicetest)
// Funzione dichiarativa della scelta del pc pari o dispari
function pcEvenOrOdd (pcChoice) {
    // Dovrà dichiarare se il pc sceglie pari o dispari
    // SE userChoice equivale a "Pari " allora il pc sceglie "Dispari" altrimenti viceversa
    if (userChoice === 'pari' ) {
        return pcChoice  = 'Dispari'
    } else if (userChoice === 'dispari') {
        return pcChoice = 'Pari'    
    } 
}


const evenOrOdd = declarationResult ('pari', 'dispari')
console.log('Il vincitore è ',evenOrOdd)
function declarationResult (declaration) {
    if (totalsum % 2 === 0) {
        return declaration = 'Pari'
    } else {
        return declaration = 'Dispari'
    }
    
}





    
