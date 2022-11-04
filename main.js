/*-----------------
    FUNCTIONS
-----------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
function clockhide() {
    const numhide = document.querySelector('.numbers').classList.add('d-none');
    console.log(numhide)
    
 }
 function askUser() {
    while( userNumberList < 6) {
        
        //Chiedo all'utente di inserire i numeri visti nella lista
        const userNumber = Number(prompt('Inserisci un numero della lista'));
        // Pusho i 5 numeri all'interno dell'arrey
        userNumber.push(userNumberList);
        console.log(userNumberList)
    }
 }
/*-----------------
    MAIN
-----------------*/
// 1. Creo 5 numeri randomici in un arrey senza numeri duplicati
// Creo un arrey vuoto
const numberList = [];

// Creo un ciclo che crei 5 numeri casuali da 1 a 100 senza duplicarli
while( numberList.length < 5 ) {
    const numberRandom = getRndInteger(1, 100);
    // SE il numero NON è contenuto nella lista lo aggiungo all'arrey
    if( numberList.includes(numberRandom) === false) {
        numberList.push(numberRandom);
    }
}
console.log(numberList)
// 2. Stampo nella pagina html il mio arrey
// Seleziono un elemento della pagina
document.querySelector('.numbers').innerHTML = numberList;
// 3. Parte il timer di 30 secondi e nascondo i numeri randomici dell'arrey
setTimeout(clockhide, 3000);
// 4. Utilizzo un ciclo per chiedere 5 volte di inserire(prompt) un numero e li salvo
    // Creo un arrey vuoto
const userNumberList = [];
    // Creo un ciclo per chiedere all'utente di inserire i 5 numeri
setTimeout(askUser, 4000)