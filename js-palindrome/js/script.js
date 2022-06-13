// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Funzione che ci farà scoprire se la stringa inserita è Palindroma oppure no
function palindrome (userName) {

    // Capiamo da quante lettere è composta la stringa
    const length = userName.length;
    
    // Inseriamolo quindi in un for-loop
    for (let i = 0; i < length; i++) {

        // Controlliamo SE le stringhe si equivalgono
        if (userName[i] !== userName[length - 1 - i]){
            return 'Non Palindromo'
        }   
    }
    return 'Palindromo'
}


const userName = prompt('Dimmi il tuo nome: ')

// Richiamiamo la funzione
const test = palindrome(userName)
console.log(palindrome(userName))
